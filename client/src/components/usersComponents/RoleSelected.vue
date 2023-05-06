<template>
    <select  @change="changeCategory">
    <option disabled selected>Выберите роль</option>
      <option>admin</option>
      <option>client</option>
      <option>cooker</option>
    </select>
  </template>
  
  <script>
  export default {
    name: 'role-selected',
    methods: {
      changeCategory(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    },
  }
  </script>
  <style scoped>
    select {
      border: none;
      font-size: 20px;
      display: block;
    } 
  </style>