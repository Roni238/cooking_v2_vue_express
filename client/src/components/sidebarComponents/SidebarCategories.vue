<template>
    <ul>
        <router-link :to="{ name: 'menu', params: { category: category.categoryLink }}"  v-for="category in getCategories" :key="category._id" v-if="getCategories.length>0">
            <li >{{ category.categoryName }}</li>
        </router-link>
        <loader-vue v-else/>
    </ul>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    name:'sidebar-categories',   
    computed:{
    ...mapGetters({
        getCategories:'categoryModule/getCategories'
    }),
  },
}
</script>
<style scoped>
    li{
    display: flex;
    align-items: center;
    margin: 15px;
    }
    div{
        margin: 15px;  
    }
    ul{
        overflow: auto;
    }
</style>