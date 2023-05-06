<template >
    <textarea rows="7" :value="modelValue" @input="updateInput"></textarea>
</template>
<script>
export default {
    name:'textarea-model',
    props: {
        modelValue: [String]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style>
    textarea{
        width:100%;
        font-size: 20px;
        padding: 7px;
        margin-top: 10px;
    }
</style>