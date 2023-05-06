<template>
    <article :style="{ border: `${getCurrentStyle.headerColor} 6px solid`, backgroundColor:getCurrentStyle.itemColor, color:getCurrentStyle.textColor}" >
        <span @click="this.$store.commit('setSelectObj',post)">
            <delete-button :selectedObj="post" v-if="getUser.isActivated&&getUser.role=='admin'"  
                @click="this.$store.commit('setSelectedAction','postModule/removePost')"/>
            <favorites-button :post="post" v-if="getUser.email&&getUser.isActivated"/>
        </span>

        <router-link :to="{ name:'recipe', params:{link:post.link} }" :style="{color:getCurrentStyle.textColor}">
            <img :src="'http://localhost:5000/'+post.fileName">
            <h3>{{post.title}}</h3> 
            <p>{{post.description}}</p>
       </router-link>
    </article>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    name:'post-item',
    props:{
        post:{
            type:Object,
            required:true
        }
    },
    computed:{
      ...mapGetters({
            getCurrentStyle:'styleModule/getCurrentStyle',
            getFavoritesId:'favoritesModule/getFavoritesId',
            getUser:'userModule/getUser',
        }),
    },
}
</script>
<style lang="scss" scoped>
    article{
        background-color: cadetblue;
        border: black solid 6px;
        border-radius: 12px;
        padding: 10px 20px 5px 20px;
        max-width: 400px;
        font-size: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 11;
        -webkit-box-orient: vertical;
        position: relative;
        margin:5px auto;
    }
    @media (min-width: 600px) {
        article{
            margin:5px;
        }
    }
    img{
        width: 100%;
        height: 260px;
    }
    span{
        position: absolute;
        right: 20px;
        gap: 10px;

        svg{
           margin: 3px; 
        }
    }   
</style>