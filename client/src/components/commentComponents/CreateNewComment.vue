<template>
    <input type="text" v-model="newComment.commentText">
    <div>
        <button @click="this.$store.dispatch('commentModule/createNewComment',newComment);newComment.commentText=''"
        >Добавить комментарий</button>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            newComment:{
                autor:'',
                commentText:'',
                postLink:this.$route.params.link
            },
        }
    },
    async mounted(){
        if(this.getUser.name){
            this.newComment.autor=this.getUser
        }
    },
    watch:{
        getUser(user){
            this.newComment.autor=user
        }
    },
    computed:{
        ...mapGetters({
            getUser:'userModule/getUser',
        }),
    },
    name:'create-new-comment'
}
</script>
<style lang="scss" scoped>
div{
    display: flex;
    justify-content: flex-end;  

    input{
        width: 100%;
        padding: 3px;
        font-size: 14px;
        border-radius: 10px;
        border: solid black 1px;
        margin-bottom: 10px;
        background-color: #FFF;
    }
    button{
        border: solid black 1px;
        padding: 7px;
        font-size: 14px;
        border-radius: 10px;
        background-color: #FFF;
    }
}
</style>