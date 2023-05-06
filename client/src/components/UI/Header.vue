<template>
    <header :style="{ backgroundColor:getCurrentStyle?.headerColor}">
        <div @click.stop="this.$store.commit('setShowSidebar',true)" v-if="!getShowSearch">
          <svg :style="{stroke:getCurrentStyle?.iconColor}" viewBox="-3 -6 30 30"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
        </div>

        <div @click.stop="this.$store.commit('setShowSearch',false);this.$router.push('/')" v-else>
          <svg :style="{stroke:getCurrentStyle?.iconColor}" viewBox="-3 -6 30 30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </div>
          

        
        <post-search v-if="getShowSearch" v-focus/>

  
           
        <router-link to="/" v-else><h2 :style="{ color:getCurrentStyle?.bgColor}" >light food</h2></router-link>

        



        <div @click="search" >
          <svg viewBox="-3 -6 30 30" :style="{stroke:getCurrentStyle?.iconColor}"><circle cx="11" cy="11" r="8" fill="none"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        
      </header>
</template>
<script>
import {mapGetters} from 'vuex'

  export default {
      name:'header-vue',
      computed:{
      ...mapGetters({
          getShowSearch:'getShowSearch',
          getCurrentStyle:'styleModule/getCurrentStyle',
        }) 
      },
      methods:{
        search(){
          if(this.getShowSearch){
            this.$router.push('/search')
            this.$store.dispatch('postModule/findPost')
          }else{
            this.$store.commit('setShowSearch',true)
           
          }
        }
      }
}
</script>
<style lang="scss" scoped>
  header{
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 65px;
    position: fixed;
    width: 100vw;
    top: 0px;
    z-index:100;
  }
  div{
    margin: 0 20px;
  }
  h2,svg{
    cursor: pointer;
  }
</style>