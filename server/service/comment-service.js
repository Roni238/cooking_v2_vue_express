const CommentModel = require('../models/comment-model');
const ApiError = require('../exceptions/api-error')

class CommentService {
    async createNewComment(autor, commentText,postLink) {
        if(!commentText){
            throw ApiError.BadRequest(`Коментарий должен содержать текст`)
        }
        const comment = await CommentModel.create({autor,commentText,postLink})
        return comment
    }
    async getComments(postLink,skip=0){
        const commentsPost = await CommentModel.find({postLink}).limit(8).skip(skip)
        return commentsPost;
    }
    async removeComment(_id){
        const commentsData= await CommentModel.deleteOne({_id})
        return commentsData
    }
    async findComment(_id){
        const comment = await CommentModel.findById({_id})
        return comment
    }
}

module.exports= new CommentService()