const CategoryService = require('../service/category-service')

class CategoryController {
    async getCategories(req, res, next) {
        try {
            const categories = await CategoryService.getCategories()
            return res.json(categories)
        } catch (error) {
            next(error)
        }
    }
    async createNewCategory(req, res, next){
        try {
            const categoryData = await CategoryService.createNewCategory(req.body.categoryName)
            return res.json(categoryData)
        } catch (error) {
            next(error)
        }
    }
    async removeCategory(req, res, next){
        try {
            const categoryDelete = await CategoryService.removeCategory(req.body._id)
            return res.json(categoryDelete)
        } catch (error) {
            next(error)
        }
    }
    async editCategory(req, res, next){
        try {
            const {_id,newCategoryName} = req.body
            const editCategory = await CategoryService.editCategory(_id, newCategoryName)
            return res.json(editCategory)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new CategoryController();