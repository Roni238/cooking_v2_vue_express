import { createStore } from 'vuex'
import categoryModule from './categoryModule'
import postModule from './postModule'
import newPostModule from './newPostModule'
import userModule from './userModule'
import usersModule from './usersModule'
import styleModule from './styleModule'
import favoritesModule from './favoritesModule'
import commentModule from './commentModule'

export default createStore({
  state: {
    showSidebar:false,
    showCategories:false,
    showSearch:false,
    showLoginForm:false,
    showDeletePopup:false,
    selectedAction:'',
    selectObj:{}
  },
  getters: {
    getShowSidebar(state){return state.showSidebar},
    getShowCategories(state){return state.showCategories},
    getShowSearch(state){return state.showSearch},
    getShowLoginForm(state){return state.showLoginForm},
    getShowDeletePopup(state){return state.showDeletePopup},
    getSelectObj(state){return state.selectObj},
    getSelectedAction(state){return state.selectedAction},
  },
  mutations: {
    setShowSidebar(state,value){state.showSidebar=value},
    setShowCategories(state,value){state.showCategories=value},
    setShowSearch(state,value){state.showSearch=value},
    setShowLoginForm(state,value){state.showLoginForm=value},
    setShowDeletePopup(state,value){state.showDeletePopup=value},
    setSelectObj(state,value){state.selectObj=value},
    setSelectedAction(state,value){state.selectedAction=value},
  },
  actions: {
  },
  modules: {
    categoryModule,postModule,newPostModule,userModule,usersModule,styleModule,favoritesModule,commentModule
  }
})