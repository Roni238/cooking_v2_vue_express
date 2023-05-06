export default function isCookerOrAdminUser ({ next, store, nextMiddleware }){
    const role = store.getters['userModule/getRole']
    if(role=='cooker'||role=='admin'){  
        return nextMiddleware()
    }else{
        return next({
            name:'home'
        })
    }
}