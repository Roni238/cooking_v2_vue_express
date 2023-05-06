const CommentService = require('../service/comment-service');

class CommentController {
    async createNewComment(req, res, next) {
        try {
            const {autor,commentText,postLink} = req.body.newComment
            const commentData = await CommentService.createNewComment(autor,commentText,postLink)
            return res.json(commentData)
        } catch (error) {
            next(error)
        }
    }
    async getComments(req, res, next) {
        try {
            const commentsPost = await CommentService.getComments(req.query.postLink,req.query.skip)
            return res.json(commentsPost)
        } catch (error) {
            next(error)
        }
    }
    async removeComment(req, res, next){
        try {
            const commentDelete = await CommentService.removeComment(req.body._id)
            return res.json(commentDelete)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new CommentController()