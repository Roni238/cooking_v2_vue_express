<template >
<div class="categoriy-styling">
    <categories-selected :model-value="selectedCategory" @update:model-value="setSelectedCategory"/>
    <h2>Цвет фона</h2>
    <input-model type="color" :model-value="bgColor" @update:model-value="setBgColor"/>

    <h2>Цвет шапки и обводок</h2>
    <input-model type="color" :model-value="headerColor" @update:model-value="setHeaderColor"/>

    <h2>Цвет поста</h2>
    <input-model type="color" :model-value="itemColor" @update:model-value="setItemColor"/>

    <h2>Цвет текста</h2>
    <input-model type="color" :model-value="textColor" @update:model-value="setTextColor"/>

    <h2>Цвет иконок</h2>
    <input-model type="color" :model-value="iconColor" @update:model-value="setIconColor"/>
    
    <button @click="this.$store.dispatch('styleModule/styleEdit')">Стилизовать</button>

    <category-preview/>
</div>
</template>
<script>
import { mapMutations, mapState} from 'vuex'

export default {
    methods:{
        ...mapMutations({
            setSelectedCategory:'styleModule/setSelectedCategory',
            setBgColor:'styleModule/setBgColor',
            setHeaderColor:'styleModule/setHeaderColor',
            setItemColor:'styleModule/setItemColor',
            setTextColor:'styleModule/setTextColor',
            setIconColor:'styleModule/setIconColor',
        }),
    },
    computed:{
        ...mapState({
            selectedCategory: state => state.styleModule.editCurrentCategory.selectedCategory,
            bgColor: state => state.styleModule.editCurrentCategory.bgColor,
            headerColor: state => state.styleModule.editCurrentCategory.headerColor,
            itemColor: state => state.styleModule.editCurrentCategory.itemColor,
            textColor: state => state.styleModule.editCurrentCategory.textColor,
            iconColor: state => state.styleModule.editCurrentCategory.iconColor,
        }),
    },
}
</script>
<style scoped>
button{
    padding: 10px;
    border: 1px black solid;
    background-color: #45322E;
    margin:10px;
    border-radius:10px;
    color:#D2B48C;
}

.categoriy-styling{
    max-width:900px;
    margin:auto;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.3);
    padding: 10px 20px;
}

</style>