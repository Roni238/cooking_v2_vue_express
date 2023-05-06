import $api from "../http/$api-json";

export default class CommentService {
    static async createNewComment(newComment){
        return $api.post(`/create-new-comment`, {newComment})
    }
    static async fetchComments(postLink,skip){
        return $api.get(`/get-comments?postLink=${postLink}&skip=${skip}`)
    }
    static async removeComment(_id){
        return $api.delete(`/removeComment`, {data:{_id}})
    }
}