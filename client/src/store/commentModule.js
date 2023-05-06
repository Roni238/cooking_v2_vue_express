import commentServise from "@/Service/commentServise"


export default {
    state:()=>({
        comments:[]
    }),
    mutations:{
        pushComments(state,value){state.comments=[...state.comments,...value]},
        unshiftComment(state,value){state.comments.unshift(value)},
        setComments(state,value){state.comments=value}
    },
    getters:{
        getComments(state){return state.comments},
    },
    actions:{
        async MountComments({commit},postLink){
            try {
                const commentsData = await commentServise.fetchComments(postLink,0)
                commit('setComments', commentsData.data)
            } catch (error) {
                alert(error)
            }
        },
        async fetchComments({commit,state},postLink){
            try {
                const commentsData = await commentServise.fetchComments(postLink,state.comments.length)
                commit('pushComments', commentsData.data)
            } catch (error) {
                alert(error)
            }
        },
        async createNewComment({commit}, newComment){
            try{
                if(newComment.commentText){
                    const newCommentData=await commentServise.createNewComment(newComment)
                    commit('unshiftComment', newCommentData.data)
                }
            } catch (error) {
                alert(error)
            }
        },
        async removeComment({state},_id){
            try {
              await commentServise.removeComment(_id)
              state.comments = state.comments.filter(comment =>comment._id!==_id)
            } catch (error) {
              alert('Отсудствует подлючение', error)
            }
          }
    },
    namespaced:true
}