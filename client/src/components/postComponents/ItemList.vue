<template>
    <ul>
        <li v-for="item in list" :item="item" :key="item" :dispatch='dispatch'>
            {{item}}
            <svg @click="this.$store.commit(dispatch, item)" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </li>
    </ul>
</template>
<script>
export default {
    name:'item-list',
    props:{
        list:{
            type:Array,
            required:true
        },
        dispatch:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
    ul{
        list-style: none;
    }
    li{
        font-size: 18px;
        padding: 1px;
        justify-content: space-between;
    }
    svg {
        min-width: 25px;
        min-height: 25px;
        stroke-width: 2;
    }
</style>