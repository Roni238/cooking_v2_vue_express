const {Schema, model} = require('mongoose');

const StyleSchema = new Schema({
    categoryName: {type: String, required: true, default:''},
    bgColor: {type: String, default:'#D2B48C'},
    headerColor: {type: String, default:'#45322E'},
    itemColor: {type: String,  default:'#5A3D30'},
    textColor: {type: String, default:'#000'},
    iconColor: {type: String, default:'#C19A6B'},
})

module.exports = model('Style', StyleSchema);