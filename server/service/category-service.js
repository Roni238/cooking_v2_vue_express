const СategoryModel = require('../models/category-model');
const CyrillicToTranslit = require('cyrillic-to-translit-js');
const ApiError = require('../exceptions/api-error')
const StyleModel = require('../models/style-model');

class CategoryService {
    async createNewCategory(categoryName) {
        if(await СategoryModel.findOne({categoryName})){
            throw ApiError.BadRequest('Такая категория существует')
        }else{
            const cyrillicToTranslit = new CyrillicToTranslit()
            
            const categoryLink = cyrillicToTranslit.transform(categoryName, "_").toLowerCase()
            
            await StyleModel.create({categoryName})
            const category = await СategoryModel.create({categoryName,categoryLink})
            return {category}
        }
    }
    
    async getCategories() {
        const categories = await СategoryModel.find()
        return categories;
    }
    async removeCategory(_id){
        const category = await СategoryModel.findOne({_id})
        const categoryName = category.categoryName
        await StyleModel.deleteOne({categoryName})
        const categotyData= await СategoryModel.deleteOne({_id})
        return categotyData 
    }
    async editCategory(_id, newCategoryName){
        if(await СategoryModel.findOne({newCategoryName})){
            throw ApiError.BadRequest('Такая категория существует')
        }
        const cyrillicToTranslit = new CyrillicToTranslit()
        const newCategoryLink = cyrillicToTranslit.transform(newCategoryName, "_").toLowerCase()

        const categoriy=await СategoryModel.findById({_id})
        const style = await StyleModel.findOne({categoryName:categoriy.categoryName})

        style.categoryName = newCategoryName
        style.save()

        categoriy.categoryName=newCategoryName
        categoriy.categoryLink=newCategoryLink
        categoriy.save()
        
        return categoriy
 
    }
}

module.exports= new CategoryService()