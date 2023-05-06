<template>
  <select  @change="changeCategory">
    <option disabled selected>Выберите категорию</option>
    <option
      v-for="category in getCategories"
      :key="category.value"
      :value="category.value"
    >
      {{ category.categoryName}}
    </option>
  </select>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'categories-selected',
  methods: {
    changeCategory(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  },
  computed: {
  ...mapGetters({
        getCategories:'categoryModule/getCategories'
    }),
  },
}
</script>
<style scoped>
  select {
    
    width: 100%;
    border: none;
    font-size: 20px;
  } 
</style>