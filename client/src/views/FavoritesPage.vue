<template lang="">
    <div class="favorietes">
        <h2>Избранные</h2>
        <div class="list">
          <post-list :posts='getFavoritesPosts'></post-list>  
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex' 

export default {
    computed:{
        ...mapGetters({
            getFavoritesPosts:'favoritesModule/getFavoritesPosts'
        }),
    },
    mounted(){
        this.$store.dispatch('favoritesModule/getFavorites')
    }
}
</script>
<style scoped>
.favorietes{
    max-width:1200px;
    margin:auto;
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