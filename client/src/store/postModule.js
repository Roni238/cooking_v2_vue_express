import PostService from "@/Service/postServise"


export default {
    state:()=>({
        posts:[],
        searchPost:[],
        currentPost:{},
        searchPostQuery:''
    }),
    mutations:{
        setPosts(state,value){state.posts=[...state.posts,...value]},
        setSearchPost(state,value){state.searchPost=value},
        pushPost(state,value){state.posts.push(value)},
        setCurrentPost(state,value){state.currentPost=value},
        setSearchPostQuery(state,value){state.searchPostQuery=value},
    },
    getters:{
        getSearchedPosts(state){return state.searchPost},
        getPosts(state){return state.posts},
    },
    actions:{
        async mountedPost({state,commit}, category='all'){
            try {
                state.posts=[]
                const postsData = await PostService.getPosts(category,0)
                commit('setPosts', postsData.data)
                if(category!='all' && postsData.data.length>0){
                    document.title=postsData.data[0]?.category
                }
            } catch (error) {
                window.location.href = 'http://localhost:8080'
            }
        },
        async loadMorePosts({commit,state}, category='all'){
            try {
                if(state.posts.length>0){
                    const postsData = await PostService.getPosts(category,state.posts.length)
                    commit('setPosts', postsData.data)
                }
            } catch (error) {
                alert('Отсудствует подлючение', error)
            }
        },
        async getRandomPost(){
            const postR = await PostService.randomPost()
            return postR.data.link
        },
        async loadСurrentPost({commit},link){
            try {
                const currentPostData= await PostService.getСurrentPost(link)
                if(currentPostData.data){
                    return currentPostData.data
                }else{
                    console.log('Странница не найденна')
                    window.location.href = 'http://localhost:8080'
                }
            } catch (error) {
                alert('Некорректная ссылка')
            }
        },
        async removePost({state},_id){
            try {
                await PostService.removePost(_id)
                state.posts = state.posts.filter(post =>post._id!=_id)
              } catch (error) {
                alert('Отсудствует подлючение', error)
              }
        },
        async findPost({commit,state}){
            try { 
                const postsData = await PostService.findPost(state.searchPostQuery)
                commit('setSearchPost', postsData.data)          
            } catch (error) {
                alert('Отсудствует подлючение', error)
            }
        },
    },
    namespaced:true
}