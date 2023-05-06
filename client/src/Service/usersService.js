import $api from "../http/$api-json";

export default class UsersService {
    static async loadUsers(skip=0){
        return $api.get(`/users?skip=${skip}`)
    }
    static async changeRole(email,role){
        return $api.put('/change-role', {email,role})
    }
    static async banUser(email){
        return $api.delete('/ban-user', {data:{email}})
    } 
}