<template>
    <input :value="modelValue" @input="updateInput">
</template>
<script>
export default {
  name: 'input-model',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
<style scoped>
input{
  outline: none;
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
  background-color: rgba(89, 89, 89, 0.519);
  border: solid 1px black;
  color: #FFF;
  width: 100%;
}
</style>