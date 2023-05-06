<template>
    <input-model 
    :model-value="searchUsersQuery"
    @update:model-value="setSearchUsersQuery"
    type="search"
    placeholder="Введите имя или почту...."
  />
</template>
<script>
import {mapState,mapMutations} from 'vuex'

export default {
    name: 'users-search',
    computed:{
        ...mapState({
            searchUsersQuery: state => state.usersModule.searchUsersQuery
        })
    },
    methods:{
        ...mapMutations({
            setSearchUsersQuery: 'usersModule/setSearchUsersQuery',
        }),
    }
}
</script>