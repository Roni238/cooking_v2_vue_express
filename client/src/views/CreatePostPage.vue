<template>
    <div class="create-post-page">
        
        <section>
            <upload-image/>
            <input-model required :model-value="newPostTitle" @update:model-value="setNewPostTitle" placeholder="Название" class="title"/>
        </section>

        <section>
           <textarea-model placeholder="Описание" required :model-value="newPostDescription" @update:model-value="setNewPostDescription" maxlength="255"/> 
        </section>

        <section>
            <h3>Состав</h3>
            <add-item-list :mutationPost="'pushComponents'"/>
            <item-list :list="getComponents" :dispatch="'newPostModule/deleteComponent'"/>   
        </section>

        <section>
            <h3>Рецепт</h3>
            <add-item-list :mutationPost="'pushRecipe'"/>
            <item-list :list="getRecipe" :dispatch="'newPostModule/deleteRecipeParagraph'"/>   
        </section>
        
        <section>
           <categories-selected  @update:model-value="setNewPostCategories"/> 
        </section>
        
        <button @click="this.$store.dispatch('newPostModule/createNewPost').then(res=>newPostLink=res)">Создать новый пост</button>

        <router-link 
         v-if="newPostLink"
         :to="{name:'recipe', params: { link:newPostLink}}"
        >
         Новый рецепт создан! Хотите посмотреть?
        </router-link>
    </div>
</template>
<script>
 import {mapState,mapMutations, mapGetters} from 'vuex'
export default {
    data() {
        return {
            newPostLink:''
        }
    },
    computed: {
        ...mapState({
            newPostTitle:state=>state.newPostModule.newPost.title,
            newPostDescription:state=>state.newPostModule.newPost.description,
        }),
        ...mapGetters({
            getComponents:'newPostModule/getComponents',
            getRecipe:'newPostModule/getRecipe',
        }),
    },
    methods:{
        ...mapMutations({
            setNewPostTitle:'newPostModule/setNewPostTitle',
            setNewPostDescription:'newPostModule/setNewPostDescription',
            setNewPostCategories:'newPostModule/setNewPostCategory'
        }),
    }
}
</script>
<style scoped>
@media (min-width: 900px) {
    .create-post-page{
        max-width:900px;
        margin:auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        
    }
}
.create-post-page{
    padding: 10px 20px;
    gap: 10px;
}

section{
    border: solid 2px black;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
}
.title{
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    border: 2px solid black;
}
button{
    width: 100%;
    padding: 5px;
    font-size: 18px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: rgba(217, 217, 217, 0.377);
    border: 2px solid black;
}
</style>