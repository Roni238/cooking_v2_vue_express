import PostService from "@/Service/postServise"

export default {
    state:()=>({
        newPost:{
            title:'',
            category:'',
            components:[],
            description:'',
            recipe:[],
        },
        newPostImage:null,
    }),
    mutations:{
        setNewPostTitle(state,value){state.newPost.title=value},
        setNewPostDescription(state,value){state.newPost.description=value},
        setNewPostCategory(state,value){state.newPost.category=value},
        setNewPostRecipe(state,value){state.newPost.recipe=value},
        setNewPostComponents(state,value){state.newPost.components=value},
        setImage(state,value){state.newPostImage=value},
        pushComponents(state,value){state.newPost.components.push(value)},
        pushRecipe(state,value){state.newPost.recipe.push(value)},
        deleteComponent(state,value){state.newPost.components=state.newPost.components.filter(component=>component!=value)},
        deleteRecipeParagraph(state,value){state.newPost.recipe=state.newPost.recipe.filter(paragraph=>paragraph!=value)}
    },
    getters:{
        getComponents(state){return state.newPost.components},
        getRecipe(state){return state.newPost.recipe},
    },
    actions:{
        async createNewPost({state, commit}){
            try {
                if(!state.newPost.description){
                   return alert('Заполните описание')
                }
                if(!state.newPost.category){
                    return alert('Укажите категорию')
                }
                if(!state.newPostImage){
                    return alert('Добавте фото')
                }
                    const newPostData = await PostService.createNewPost(state.newPost)
                    const fd = new FormData()
                    
                    fd.append('image',state.newPostImage, state.newPostImage.name)
                    fd.append('post',newPostData.data._id)
                    await PostService.addImage(fd)

                    commit('postModule/pushPost', newPostData.data , { root: true })

                    commit('setNewPostComponents', [])
                    commit('setNewPostDescription', '')
                    commit('setImage', null)
                    commit('setNewPostRecipe', [])
                    commit('setNewPostTitle', '')
                    commit('setNewPostCategory','')
                    return newPostData.data.link
            } catch (error) {
                alert(error?.response?.data?.message)
            }
        }
    },
    namespaced:true
}