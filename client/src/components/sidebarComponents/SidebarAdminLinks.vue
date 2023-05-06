<template>
    <li>
        <svg viewBox="-3 -3 30 30" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>

        <h3>Админ панель</h3>
    </li>

    <li>
        <svg viewBox="-3 -3 30 30" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>

        <router-link to="/createCategory"> Настройки категорий </router-link>
    </li>

    <li>
        <svg viewBox="-3 -3 30 30" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>

        <router-link to="/users"> Пользователи и роли </router-link>
    </li>

    <li>
        <svg viewBox="-3 -3 30 30" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>

        <router-link to="/category-styling"> Стилизация категорий </router-link>
    </li>

</template>
<script>
export default {
    name:'sidebar-admin-links',
}
</script>
<style lang="scss">
li{
    display: flex;
    align-items: center;
    margin: 15px;
    
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