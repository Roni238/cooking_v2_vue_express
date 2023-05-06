const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const tokenService = require('./token-service');
const FavoritesService = require('./favorites-service');
const UserDto = require('../dtos/userDto');
const mailService = require('./mail-service');
const ApiError = require('../exceptions/api-error');

class UserService {
    async registration(email, password, name) {
        const candidate = await UserModel.findOne({email})
        if(name<2){
            throw ApiError.BadRequest('Имя слижком короткое')
        }
        if(name.length>12){
            throw ApiError.BadRequest('Имя не должно быть длиннее 12 символов')
        }
        if(password.length<7){
            throw ApiError.BadRequest('Пароль должен быть не короче 7')
        }
        if(password.length>16){
            throw ApiError.BadRequest('Пароль должен быть не длиннее 16')
        }
        if(candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 7)
        const activationLink = uuid.v4()

        const user = await UserModel.create({email, password: hashPassword,name, activationLink})

        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

        const userDto = new UserDto(user)
        await FavoritesService.createFavorites(user._id)
        const tokens = tokenService.generateTokens({...userDto})
        
        
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        setTimeout(()=>{
                if(!userDto.isActivated){
                    this.banUser(userDto.email)
                }
        }, 1000*60*5)

        return {...tokens, user: userDto}
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if (!user) {
            throw ApiError.BadRequest('Неккоректная ссылка активации')
        }
        user.isActivated = true;
        await user.save();
    }

    async login(email, password) {
        const user = await UserModel.findOne({email})
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден', user)
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль');
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        } 
        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async getAllUsers(skip) {
        const users = await UserModel.find().limit(4).skip(skip)
        const UsersDto = users.map(user=>new UserDto(user))
        return UsersDto;
    }
    async banUser(email) {
        const deleteUser =await UserModel.findOne({email}) 
        if(!deleteUser){
            return res.json("Аккаунт еще не существует")
        }
        const userData= await UserModel.deleteOne({_id:deleteUser._id})
        return userData 
    }
    async findUser(email){
        const user =await UserModel.findOne({email}) 
        return user
    }
}

module.exports = new UserService();