const {Schema, model} = require('mongoose');

const CommentShema = new Schema({
    commentText: {type: String, required: true},
    autor: {type: Object, required: true},
    postLink:{type: String,required: true},
})


module.exports = model('Comment', CommentShema);