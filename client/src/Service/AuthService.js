import $api from "../http/$api-json";

export default class AuthService {
    static async login(email, password){
        return $api.post('/login', {email,password})
    }
    static async registration(email, password,name){
        return $api.post('/registration', {email,password,name})
    }
    static async logout(){
        return $api.post('/logout')
    }
}