<template>
    <comment-item v-for="comment in getComments" :comment="comment" :key="comment.id"/>
    <div v-intersection="()=>fetchComments(this.$route.params.link)" class="observer"/>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name:'comment-list',
    methods:{
        ...mapActions({
            fetchComments: 'commentModule/fetchComments',
        }),
    },
    computed:{
      ...mapGetters({
            getComments:'commentModule/getComments'
        }) 
    },
}
</script>