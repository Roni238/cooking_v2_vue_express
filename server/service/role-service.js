class RoleService {
    async changeRole(user, role='client'){
        user.role=role
        await user.save()
        return user
    }
}

module.exports= new RoleService()