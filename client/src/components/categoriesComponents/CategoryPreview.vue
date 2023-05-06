<template>
    <div  class="preview">
        <div class="header" :style="{ backgroundColor: getEditCategory?.headerColor}">
            <svg :style="{stroke:getEditCategory?.iconColor}" viewBox="-3 -3 30 30"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>

            <h3 :style="{color: getEditCategory?.bgColor}">light food</h3>

            <svg :style="{stroke:getEditCategory?.iconColor}" viewBox="-3 -3 30 30"><circle cx="11" cy="11" r="8" fill="none"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>


        <div class="wrapp" :style="{backgroundColor: getEditCategory?.bgColor,color: getEditCategory?.textColor}">
            <h3>В меню {{getSelectedCategory}}:</h3>

            <article :style="{ border: `${getEditCategory?.headerColor} 4px solid`,backgroundColor: getEditCategory?.itemColor}">

                <img src="https://avatars.dzeninfra.ru/get-zen_doc/28845/pub_614725aa8a833355e7a72e40_614725b6ffef2a3a0728e1fd/scale_1200" alt="">
                <h3>title test</h3>

                <p>description test</p>
               
            </article>
        </div>     
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import StyleService from "@/Service/styleService"

export default {
    name:'category-preview',
    computed:{
       ...mapGetters({
            getSelectedCategory:'styleModule/getSelectedCategory',
            getCurrentStyle:'styleModule/getCurrentStyle',
            getEditCategory:'styleModule/getEditCategory'
        }) 
    },
    watch:{
        async getSelectedCategory(category){
            await StyleService.getStyle(this.getSelectedCategory).then(res=>{
                this.$store.commit('styleModule/setHeaderColor',res.data.headerColor)
                this.$store.commit('styleModule/setBgColor',res.data.bgColor)
                this.$store.commit('styleModule/setItemColor',res.data.itemColor)
                this.$store.commit('styleModule/setTextColor',res.data.textColor)
                this.$store.commit('styleModule/setIconColor',res.data.iconColor)
            })
        }
    }  
}
</script>
<style lang="scss" scoped>
    .preview{
        width: 100%;
        background-color: black;
        color: aliceblue;
        margin: 40px 0;
        

        .header{
            background: #000;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 3px 0;
        }
        .wrapp{
            padding: 7px;
            overflow: hidden;
        }
        .list{
            overflow: hidden;
        }
        article{
            background-color: cadetblue;
            border: black solid 2px;
            border-radius: 12px;
            padding: 10px 20px 5px 20px;
            max-width: 400px;
            font-size: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 11;
            -webkit-box-orient: vertical;
            margin: auto;
        }
        img{
            width: 100%;
            height: 260px;
        }
    }
</style>