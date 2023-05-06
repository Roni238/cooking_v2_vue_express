const FavoritesService = require('../service/favorites-service');

class FavoritesController {
    async getFavorites(req, res, next) {
        try {
            const favoritesData = await FavoritesService.getFavorites(req.query.user)
            return res.json(favoritesData)
        } catch (error) {
            next(error)
        }
    }
    async pushFavorites(req,res,next){
        try {
            const favoritesData = await FavoritesService.pushFavorites(req.body.user, req.body.post)
            return res.json(favoritesData)
        } catch (error) {
            next(error)
        }
    }
    async removeFavorites(req,res,next){
        try {
            const postDelete = await FavoritesService.removeFavorites(req.body.user,req.body._id)
            return res.json(postDelete)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new FavoritesController()