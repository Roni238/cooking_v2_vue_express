import $api from "../http/$api-json";

export default class FavoritesService {
    static async pushFavorites(user,post){
        return $api.post(`/push-favorites`, {user,post})
    }
    static async getFavorites(user){
        return $api.get(`/get-favorites?user=${user}`)
    }
    static async removeFavorites(user, _id){
        return $api.delete(`/remove-favorites`, {data:{user, _id}})
    }
}