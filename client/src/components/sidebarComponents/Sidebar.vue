<template>
    <Transition name="slide-fade">
        <aside @click.stop>
          <div class="sidebar-header">
            
            <router-link to="/"> <h2>light food</h2> </router-link>
                
            <div @click="getShowCategories ? this.$store.commit('setShowCategories',false) : this.$store.commit('setShowSidebar',false)">
              <svg fill="none" stroke="#D2B48C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>

            </div> 
          </div>

          <Transition name="slide-fade">

            <sidebar-links v-if="!getShowCategories"/>
            <sidebar-categories v-else/>

          </Transition>
          
        <div class="profile" @click.stop="this.$store.commit('setShowSidebar',false)" v-show="!getShowCategories">
          <div v-if="getUser.name">
            <svg viewBox="-3 -3 30 30" stroke="currentColor" stroke-width="2" fill="none"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            
            <div @click="this.$store.dispatch('userModule/logout').then(()=>this.$router.push('/'))">
                <p> Выйти ({{getUser.name}})</p>
            </div>
          </div>
        
          <div v-else>
          <div @click="this.$router.push('/registration')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>

            <p>Войти</p>
          </div>
        </div>
      </div>
    </aside>
  </Transition>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
    ...mapGetters({
        getShowCategories:'getShowCategories',
        getUser:'userModule/getUser',
    })
  },
  mounted(){
        this.$store.dispatch('categoryModule/loadCategories')
  },
  name:'sidebar-vue',
}
</script>
<style lang="scss" scoped>
aside{
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    color: #45322E;
    background: #D2B48C;
    box-shadow: 19px 0px 16px 0px rgba(69, 50, 46, 0.7);
    z-index: 120;
    transition: all 0.5s ease;
    min-width: 255px;
    display: flex;
    flex-direction: column;
}
  .sidebar-header{
    display: flex;
    align-items: center;
    padding: 12.2px;
    background-color: #45322E;
    justify-content: space-between;
    
    a{
      color: #D2B48C;
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease-out;
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(-100%);
  }
  .profile{
    margin-top: auto;
    cursor:pointer;

    div{
      font-size: 20px;
      display: flex;
      background-color:#45322E;
      align-items: center;
      min-height: 6vh;
      padding: 0px 15px;

      p{
        color: #D2B48C;
        max-width: 200px;
      }
      svg{
        stroke: #D2B48C;
      }
      a{
        color: #D2B48C;
      }
    }
  }
</style>