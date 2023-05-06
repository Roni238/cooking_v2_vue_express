export default async function authMiddleware ({ next, store, nextMiddleware }){
    if(!store.getters['userModule/getUser'].id){
        return next({
            name:'home',
        },)
    }
    return nextMiddleware()
}