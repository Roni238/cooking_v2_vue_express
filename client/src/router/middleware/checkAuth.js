export default async function checkAuth ({ next, store, nextMiddleware }){
    if(localStorage.getItem('token')){
        await store.dispatch('userModule/checkAuth')
    }
    return nextMiddleware()
}