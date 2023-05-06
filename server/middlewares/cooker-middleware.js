const ApiError = require('../exceptions/api-error')
const tokenService = require('../service/token-service')

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

       

        if(userData.role=='client'){
            return next(ApiError.rootError())  
        }

        next()
    } catch (e) {
        return next(ApiError.UnauthorizedError())
    }
}