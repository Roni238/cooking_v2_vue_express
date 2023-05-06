<template>
    <user-item :user="user" v-for="user in getSearchedUsers" :key="user.id"/>
    <div v-intersection="()=>loadUsers()" class="observer"/>
</template>
<script>
import { mapGetters,mapActions } from 'vuex';
export default {
    name:'users-list',
    computed: {
    ...mapGetters({
            getSearchedUsers:'usersModule/getSearchedUsers',
        }),
    },
    methods:{
        ...mapActions({
            loadUsers: 'usersModule/loadUsers',
        }),
    },
}
</script>