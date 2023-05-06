import $api from "../http/$api-json";

export default class PostService {
    static getStyle(category){
        return $api.get(`/style?categorylink=${category}`)
    }
    static styleEdit(editCurrentCategory){
        return $api.put('/style-edit',{editCurrentCategory})
    }
}