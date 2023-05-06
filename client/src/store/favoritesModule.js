import FavoritesServise from "@/Service/favoritesServise"

export default {
    state:()=>({
        user:{},
        favoritesPosts:[],
        favoritesId:[]
    }),
    mutations:{
        setUser(state,user){state.user=user},
        setFavoritesPosts(state,value){state.favoritesPosts=value},
        pushFavoritesPosts(state,value){state.favoritesPosts.push(value)},
        setFavoritesId(state,value){state.favoritesId=value},
        pushFavoritesId(state,value){state.favoritesId.push(value)},
    },
    getters:{
        getFavoritesPosts(state){return state.favoritesPosts},
        getFavoritesId(state){return state.favoritesId},
    },
    actions:{
        async getFavorites({commit,state}){
            try {
                const favoritesData = await FavoritesServise.getFavorites(state.user.id)
                commit('setFavoritesPosts',favoritesData.data)
                commit('setFavoritesId',favoritesData.data.map(post=>post._id))
            } catch (error) {
                alert('Отсудствует подлючение', error)
            }
        },
        async pushFavorites({commit,state},post){
            try {
                await FavoritesServise.pushFavorites(state.user.id, post)
                commit('pushFavoritesPosts', post)
                commit('pushFavoritesId', post._id)
            } catch (error) {
                alert('Отсудствует подлючение', error)
            }
        },
        async removeFavorites({state}, postId){
            try {
                await FavoritesServise.removeFavorites(state.user.id, postId)
                state.favoritesPosts = state.favoritesPosts.filter(favoritePosts =>favoritePosts._id!==postId)
                state.favoritesId=state.favoritesId.filter(id=>id!==postId)
            } catch (error) {
                alert(error)
            }
        }
    },
    namespaced:true
}