const UserService = require('../service/user-service');

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password, name} = req.body
            const userData = await UserService.registration(email, password, name)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    }
    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const userData = await UserService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    }
    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const token = await UserService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (error) {
            next(error)
        }
    }
    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await UserService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    }
    async getUsers(req, res, next) {
        try {
            const users = await UserService.getAllUsers(req.query.skip)
            return res.json(users)
        } catch (error) {
            next(error)
        }
    }
    async activate(req, res, next) {
        try {
            const activationLink = req.params.link
            await UserService.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
        } catch (error) {
            next(error)
        }
    }
    async banUser(req,res,next){
        try {
            const ban = await UserService.banUser(req.body.email)
            return ban
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new UserController()