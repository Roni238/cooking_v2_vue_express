<template>
    <ul>      

        <li>
            <svg viewBox="-3 -3 30 30" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            
            <p @click="this.$store.commit('setShowCategories', true)" > Категории </p>
        </li>

        <li>
            <svg viewBox="-3 -3 30 30"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>


            <p  @click="this.$store.dispatch('postModule/getRandomPost')
                .then(link=>$router.push({ name: 'recipe', params: {link}}))">
                Случайный рецепт
            </p>
        </li>

        <li v-if="getUser.id">
            <svg viewBox="-3 -3 30 30" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>

            <router-link to="/favorites"> Избранные </router-link>
        </li>
        
        <li>
            <svg viewBox="-3 -3 30 30" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>

            <router-link to="/about"> О нас </router-link>
        </li>

        <li v-if="getUser.role=='cooker'||getUser.role=='admin'">
            <svg viewBox="-3 -3 30 30" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
    
            <router-link to="/createRecipe"> Создать рецепт </router-link>
        </li>

        <sidebar-admin-links v-if="getUser.role=='admin'"/>

        
    </ul>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    name:'sidebar-links',
    computed:{
        ...mapGetters({
            getUser:'userModule/getUser',
        })
    }
}
</script>
<style lang="scss" scoped>
li{
    display: flex;
    align-items: center;
    margin: 15px;
    cursor: pointer;
    
    a,p{
        font-weight: bold;
        text-decoration: none;
        color: #45322E;
    }
    svg{
        stroke:#45322E;
    }
}
</style>