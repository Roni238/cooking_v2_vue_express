export default function isActivatedUser({next,store, nextMiddleware}){
    if(!store.getters['userModule/getIsActivated']){
        return next({
            name:'registration'
        })
    }
    return nextMiddleware()  
}