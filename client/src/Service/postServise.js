import $api from "../http/$api-json";
import $apiFormData from "../http/$api-form-data";

export default class PostService {

    static getPosts(category,skip=0){
        return $api.get(`/posts?categorylink=${category}&skip=${skip}`)
    }
    static findPost(searchQuery){
        return $api.get(`/findPost?searchQuery=${searchQuery}`)
    }
    static removePost(_id){
        return $api.delete('/remove-post', {data:{_id}})
    }
    static getСurrentPost(link){
        return $api.get(`/current-post/${link}`)
    }
    static createNewPost(post){
        return $api.post('/create-new-post',{post})
    }
    static randomPost(){
        return $api.get('/random-post')
    }
    static addImage(file){
        return $apiFormData.post('/add-image',file)
    }
}