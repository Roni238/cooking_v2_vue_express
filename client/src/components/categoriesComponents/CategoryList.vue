<template>
  <div v-for="category in getSearchedCategories" :key="category._id" v-if="getSearchedCategories.length>0">
    <category-item :category="category"/>
  </div>
  <loader-vue v-else/>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'categoriy-list',
  computed: {
  ...mapGetters({
      getSearchedCategories:'categoryModule/getSearchedCategories',
      getEditMode:'categoryModule/getEditMode'
    }),
  }
}
</script>
<style scoped>
div{
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  background-color: rgba(59, 59, 59, 0.369);
  padding: 7px 10px;
  border-radius: 10px;
  margin-top: 10px;
  align-items: center;
}
span{
  align-items: center;
  display:flex;
  gap: 10px;
}
.edit_input{
  width:225px;
}
</style>