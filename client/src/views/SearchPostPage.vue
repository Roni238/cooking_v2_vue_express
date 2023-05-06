<template>

        <div class="menu">
            <h1>Вы искали:</h1>
              <div class="list"> 
                <post-list :posts='getSearchedPosts'></post-list>
              </div>  
          </div>

</template>
<script>
import {mapGetters} from 'vuex' 

export default {
    computed:{
        ...mapGetters({
            getCurrentStyle:'styleModule/getCurrentStyle',
            getSearchedPosts:'postModule/getSearchedPosts',
        })
    },
    mounted(){
     this.$store.dispatch('postModule/findPost')
    }
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