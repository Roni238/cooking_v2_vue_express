<template >
  <activation-popup v-if="getUser.isActivated==false && !!getUser.email"/>
  <div @click="this.$store.commit('setShowSidebar',false);this.$store.commit('setShowCategories',false)">
    <header-vue/>
    
    <div class="wrp">
      <delete-popup v-if="getShowDeletePopup" :deleteObj="getSelectObj" :dispatchPath="getSelectedAction"/>

      <sidebar-vue v-show="getShowSidebar"/>

      <div class="router">
        <router-view :key="$route.fullPath" /> 
      </div>
      
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #D2B48C;
  box-sizing: border-box;
  font-family: "Poppins" , sans-serif;
  overflow: hidden;
}
.wrp{
  margin-top: 65px;
  min-height: 92.4vh;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  font-weight: bold;
  text-decoration: none;
  color: #45322E;
}
svg{
  width: 34px;
  height: 34px;
  stroke-width:2;
}
.observer{
  width: 100%;
  height: 10px;
  margin-bottom: 1px;
}
</style>

<script>
import {mapGetters} from 'vuex'

export default {
  computed:{
    ...mapGetters({
      getShowSidebar:'getShowSidebar',
      getShowDeletePopup:'getShowDeletePopup',
      getCurrentStyle:'styleModule/getCurrentStyle',
      getSelectObj:'getSelectObj',
      getSelectedAction:'getSelectedAction',
      getUser:'userModule/getUser',
    })
  }
}
</script>