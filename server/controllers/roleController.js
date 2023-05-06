const RoleService = require('../service/role-service');
const UserService = require('../service/user-service');

class RoleController {
    async changeRole(req, res, next){
        try {
            const {email,role} = req.body
            console.log(req.body)
            if(role==="admin"||role==="cooker"||role==="client"){
                const user = await UserService.findUser(email)
                const newRole = await RoleService.changeRole(user,role)
                return res.json(newRole);
            }else{
                return res.json("Введена не существующая роль, варианты: cilent, admin, cook.")
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new RoleController()