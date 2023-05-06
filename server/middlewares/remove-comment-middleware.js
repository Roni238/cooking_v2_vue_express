const ApiError = require('../exceptions/api-error')
const tokenService = require('../service/token-service')
const commentService = require('../service/comment-service')

module.exports =async function (req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization
        
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError())
        }
        
        const accessToken = authorizationHeader.split(' ')[1]
        
        if (!accessToken) {
            return next(ApiError.UnauthorizedError())
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData) {
            return next(ApiError.UnauthorizedError())
        }
        
        const comment = await commentService.findComment(req.body._id)
        
        if(comment.autor.id!==userData.id && userData.role!='admin'){
            return next(ApiError.BadRequest('Неправельный пользователь'))  
        }

        next()
    } catch (e) {
        return next(ApiError.UnauthorizedError())
    }
}