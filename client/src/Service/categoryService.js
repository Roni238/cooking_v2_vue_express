import $api from "../http/$api-json";

export default class CategoryService {

    static loadCategories(){
        return $api.get('/categories')
    }
    static createNewCategories(categoryName){
        return $api.post('/create-new-category', {categoryName})
    }
    static editCategory(_id, newCategoryName){
        return $api.put('/edit-category', {_id,newCategoryName})
    }
    static async removeСategory(_id){
        return $api.delete('/remove-category', {data:{_id}})
    }
}