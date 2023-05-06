export default function isAdminUser ({next, store, nextMiddleware}){
    if(store.getters['userModule/getRole']!='admin'){
        return next({
            name:'home'
        })
    }
    return nextMiddleware() 
}