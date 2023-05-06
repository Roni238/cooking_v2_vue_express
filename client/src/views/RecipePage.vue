<template>
    <div :style="{backgroundColor: getCurrentStyle?.bgColor,color: getCurrentStyle?.textColor}" >
        <div class="post">

        <a href="#recipe">
            <svg :style="{stroke:getCurrentStyle?.iconColor}" class="arrowDown" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-3 -3 30 30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </a>


        <div class="title-image">
            <img :src="'http://localhost:5000/'+currentPost.fileName" alt="img"  v-if="currentPost.fileName">
        </div>

        <section class="info">
            <h2>{{currentPost.title}}</h2>
            <h4>({{ currentPost.category }})</h4> 
            <br> 
            <p>{{currentPost.description}}</p> 
        </section>
        
        <section>
            <h3>Состав</h3>
            <ul>
                <li v-for="component in currentPost.components" :key="component"  ref="li">{{  component }}</li>
            </ul>
        </section>
        
        <section id="recipe">
            <h3>Рецепт</h3>
            <ul>    
                <li v-for="(point, index) in currentPost.recipe" ref="li" :key="point">{{index+1 }}.  {{ point }}</li>
            </ul>
        </section>

        <h3>Комментарии:</h3>
        <div class="comments">
            <create-new-comment v-if="getUser.isActivated==true"/>
            <h4 v-else>Зарегестрируйтесь чтобы оставлять комментарии</h4>
            <comment-list/>
        </div>
        
    </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            currentPost:{},
            secondColor:''
        }
    },
    async mounted(){
        this.$store.dispatch('postModule/loadСurrentPost', this.$route.params.link)
            .then(res=>this.currentPost=res)
            .then(()=>this.$store.dispatch('styleModule/loadStyleCategory', this.currentPost.category))
            .then(()=>this.$store.dispatch('commentModule/MountComments', this.currentPost.category))
            .then(()=>document.title = `${this.currentPost.title}`)
            .then(()=>this.liStyled())
    },
    computed:{
      ...mapGetters({
            getCurrentStyle:'styleModule/getCurrentStyle',
            getUser:'userModule/getUser',
        }) 
    },
    methods:{
        async liStyled(){
            this.secondColor = await this.$store.dispatch('styleModule/modificationColor')
            const liArr=this.$refs?.li.filter((item, index)=>!((index)%2))
            liArr.map(el=>el.style.backgroundColor=this.secondColor)
        }
    }
}
</script>
<style lang="scss" scoped>
.post{
    position: relative;
    min-height: 92.4vh;
    max-width:900px;
    margin:auto;
    padding:0px 10px;
    .arrowDown{
        position: absolute;
        right: 0;
        top: 0;
        margin: 5px;
        background-color: rgba(0, 0, 0, 0.298);
        border: black solid 1px;
        border-radius: 5px;
    }
    .title-image{
        width: 100%;
        max-height: 350px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    
        img {
            height: 100%;
            overflow: hidden;
            object-fit: cover;
        }
      }
    .info{
        padding: 10px;
    }
    li{
        padding: 2px 20px;
        width: 100%;
        margin: 5px 0;
    }
}
section{
    border: #242525 solid 2px;
    border-radius: 15px;
    margin: 10px 10px;
    padding: 10px 0px;
}
  h3{
    margin: 0 10px;
  }
  .comments{
    padding: 0px 10px;
    widows: 100%;
  }
</style>