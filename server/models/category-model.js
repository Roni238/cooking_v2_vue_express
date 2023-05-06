const {Schema, model} = require('mongoose');

const CategoriesSchema = new Schema({
    categoryName: {type: String,require, unique:true},
    categoryLink:{type: String,require, unique:true}
})

module.exports = model('Category', CategoriesSchema);