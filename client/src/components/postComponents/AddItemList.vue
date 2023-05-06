<template>
    <div>
        <input type="text" v-model.trim="text" placeholder="Пункт..."/>
        <button @click="create">+</button>
    </div>
</template>
<script>
export default {
    name:'add-item-list',
    props:{
        mutationPost:{
            type:String,
            required:true
        }
    },
    data() {
        return {
            text:''
        }
    },
    methods:{
        create(){
            if(this.text){
                this.$store.commit('newPostModule/'+this.mutationPost, this.text)
                this.text=''
            } 
        }
    }
}
</script>
<style lang="scss" scoped>
    div{
        display: flex;
    }
    input{
        width: 100%;
        height: 30px;
        box-sizing: border-box;
    }
    button{
        width: 30px;
        height: 30px;
        box-sizing: border-box;
    }

</style>