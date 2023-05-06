<template>
    <svg :style="{stroke:getCurrentStyle.iconColor}"  xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 30 30" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    name:'edit-button',
    computed:{
      ...mapGetters({
        getCurrentStyle:'styleModule/getCurrentStyle',
        }) 
    }
}
</script>
<style scoped>
    svg{
        background: rgba(56, 56, 56, 0.412);
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
    }
</style>