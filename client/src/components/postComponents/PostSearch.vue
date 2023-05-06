<template>
        <input-model :model-value="searchPostQuery" @update:model-value="setSearchPostQuery" type="search" placeholder="Поиск...."/>
</template>
<script>
import {mapState,mapMutations} from 'vuex'

export default {
    name: 'post-search',
    computed:{
        ...mapState({
            searchPostQuery: state => state.postModule.searchPostQuery
        })
    },
    methods:{
        ...mapMutations({
            setSearchPostQuery: 'postModule/setSearchPostQuery',
        }),
    }
}
</script>