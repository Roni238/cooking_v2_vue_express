const {Schema, model} = require('mongoose');

const FavoritesSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', require:true},
    favorites: {type: Array},
})

module.exports = model('Favorites', FavoritesSchema);