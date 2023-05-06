import CategoryService from "@/Service/categoryService"

export default {
    state:()=>({
        categories:[],
        searchCategoryQuery:'',
        editMode:false,
        newCategoryName:''
    }),
    mutations:{
        setCategories(state,value){state.categories=value},
        pushCategories(state,value){state.categories.push(value)},
        setNewCategoryName(state,value){state.newCategoryName=value},
        setSearchCategoryQuery(state,value){state.searchCategoryQuery=value},
        setEditMode(state){state.editMode=!state.editMode},
        setNewCategoryName(state,value){state.newCategoryName=value},
    },
    getters:{
        getCategories(state){return state.categories},
        getSearchedCategories(state) {
          return state.categories.filter(category => category.categoryName.toLowerCase().includes(state.searchCategoryQuery.toLowerCase()))
        },
        getEditMode(state){return state.editMode},
    },
    actions:{
        async loadCategories({commit}){
            try {
              const categoriesData = await CategoryService.loadCategories()
              commit('setCategories', categoriesData.data)
            } catch (error) {
              alert('Отсудствует подлючение', error)
            }  
          },
        async CreateNewCategories({state,commit}, newCategory){
          try {
            const categoriyData = await CategoryService.createNewCategories(newCategory)
            commit('pushCategories', categoriyData.data.category)
            state.newCategoryName=''
          } catch (error) {
            return error.response?.data?.message
          }
        },
        async editCategory({state},selectedCategory){
          try {
            if(selectedCategory.categoryName!==state.newCategoryName && state.newCategoryName){
              const changedCategory = await CategoryService.editCategory(selectedCategory._id, state.newCategoryName)
              selectedCategory.categoryName=changedCategory.data.categoryName
              selectedCategory.categoryLink=changedCategory.data.categoryLink
            }
          } catch (error) {
            alert('Отсудствует подлючение', error)
          }
        },
        async removeСategory({state},_id){
          try {
            await CategoryService.removeСategory(_id)
            state.categories = state.categories.filter(category =>category._id!==_id)
          } catch (error) {
            alert('Отсудствует подлючение', error)
          }
        }
    },
    namespaced:true
}