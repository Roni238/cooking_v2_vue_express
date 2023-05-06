<template>
    <div class="create-category">
        <h2>Создать новую категорию</h2>    
        <input-model v-model="newCategory" v-focus/>
    
        <h4>{{error}}</h4>
        <button @click="Create">Создать!</button>

        <h2>Категории:</h2>
        <categoriy-search/>
        <categoriy-list/>
    </div>
</template>
  
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'HomeView',
    data() {
        return {
            newCategory:'',
            error:''
        }
    },
    methods:{
        Create(){
            this.$store.dispatch('categoryModule/CreateNewCategories', this.newCategory).then(res=>this.error=res)
            this.newCategory=''
        },
    },
    computed: {
        ...mapGetters({
            getShowDeletePan:'getShowDeletePan',
        }),
    },
}
  </script>
<style scoped>
.create-category{
    max-width:1000px;
    margin:auto;
    padding: 10px 20px;
}
</style>