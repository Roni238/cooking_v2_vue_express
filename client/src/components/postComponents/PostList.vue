<template>
    <post-item v-for="post in posts" :post="post" :key="post.id"/>  
</template>
<script>
export default {
    name:'post-list',
    props:{
        posts:{
            type:Array
        }
    }
}
</script>