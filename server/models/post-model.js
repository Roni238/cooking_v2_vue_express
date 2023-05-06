const {Schema, model} = require('mongoose')

const PostSchema =new Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    recipe:{type: Array, required: true},
    components:{type: Array, required: true},
    link:{type: String, required: true, unique:true},
    category:{type: String, required:true},
    fileName:{type: String, default:'default.jpg'}
})

module.exports = model('Post', PostSchema)