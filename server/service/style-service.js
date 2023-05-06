const StyleModel = require('../models/style-model');
const СategoryModel = require('../models/category-model');

class StyleService{
    async getStyle(categoryLink){   
        const currentСategory = await СategoryModel.findOne({categoryLink})
        if(currentСategory){
            const categoryName = currentСategory.categoryName
            const style = await StyleModel.findOne({categoryName})
            return style
        }else{
            const style = await StyleModel.findOne({categoryName:categoryLink})
            return style
        }
    }
    async editStyle(category,bgColor,headerColor,itemColor,textColor,iconColor){  
        const currentСategory = await StyleModel.findOne({categoryName:category})
        if(currentСategory){
            currentСategory.bgColor = bgColor
            currentСategory.headerColor = headerColor
            currentСategory.itemColor = itemColor
            currentСategory.textColor = textColor
            currentСategory.iconColor = iconColor
            currentСategory.save()

            return currentСategory
        }
        
    }
}

module.exports = new StyleService();