<template lang="">
 
    <p v-if="!editMode">
        {{category.categoryName}}
      </p>
      
      <input-model class="edit_input" :modelValue="category.categoryName" @update:modelValue="setNewCategoryName" v-else/>
  
      <span>
        <edit-button @click="editMode=true" v-if="!editMode"/>
        <confirm-button :dispatchPath="'categoryModule/editCategory'" :selectedObj="category" @click="editMode=false" v-else/>
  
        <delete-button :selectedObj="category" 
          @click="this.$store.commit('setSelectedAction','categoryModule/removeСategory');this.$store.commit('setSelectObj',category)"/>
      </span>
 
</template>
<script>
import {mapMutations} from 'vuex'

export default {
    name:'category-item',
    props:{
      category:{
        require:true,
        type:Object
      }
    },
    data() {
        return {
            editMode:false
        }
    },
    methods:{
      ...mapMutations({
        setNewCategoryName:'categoryModule/setNewCategoryName',
      }),
    }
}
</script>
<style scoped>
  span{
    align-items: center;
    display:flex;
    gap: 10px;
  }
  .edit_input{
    width:225px;
  }
</style>