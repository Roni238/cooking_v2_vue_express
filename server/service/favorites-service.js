const FavoritesModel = require('../models/favorites-model');

class FavoritesService {
    async createFavorites(user){
        const userFavorites = await FavoritesModel.create({user})
        return userFavorites;
    }
    async getFavorites(user){
        const userFavorites = await FavoritesModel.findOne({user})
        return userFavorites.favorites;
    }
    async pushFavorites(user, post){
        const userFavorites = await FavoritesModel.findOne({user})
        if(!userFavorites.favorites.map(post=>post._id).includes(post._id)){
            userFavorites.favorites.push(post)
            userFavorites.save()
            return post;
        }
    }
    async removeFavorites(user, _id){
        const userFavorites = await FavoritesModel.findOne({user})
        userFavorites.favorites= userFavorites.favorites.filter(post =>post._id!==_id)
        userFavorites.save()
        return userFavorites.favorites
    }
}

module.exports= new FavoritesService()