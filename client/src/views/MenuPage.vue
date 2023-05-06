<template>
    <div :style="{background: getCurrentStyle?.bgColor,color: getCurrentStyle?.itemColor}">
        <div class="menu">
            <h1>В меню {{this.$route.params.category?getPosts[0]?.category:''}}:</h1>
              <div class="list"> 
                <post-list :posts='getPosts' v-if="getPosts.length>0"></post-list>
                <loader-vue v-else/>
                <div v-intersection="()=>loadMorePosts(this.$route.params.category)" class="observer"/>
              </div>  
          </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex' 

export default {
    computed:{
        ...mapGetters({
            getCurrentStyle:'styleModule/getCurrentStyle',
            getPosts:'postModule/getPosts',
        })
    },
  mounted(){
    this.$store.dispatch('postModule/mountedPost', this.$route.params.category)
        if(this.$route.params.category!=='all'){
            this.$store.dispatch('styleModule/loadStyleCategory', this.$route.params.category)
        } 
    },
    methods:{
        ...mapActions({
            loadMorePosts: 'postModule/loadMorePosts',
        }),
    },
}
</script>
<style lang="scss">
.menu{
    padding:10px;
    max-width: 1200px;
    margin: auto;
    min-height: calc(100vh - 65px);
    
}
    .list{
        margin: auto;
        
        
    }
    h1{
        padding: 10px;

    }
    
    @media (min-width: 600px) {
        .list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 900px) {
        .list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>