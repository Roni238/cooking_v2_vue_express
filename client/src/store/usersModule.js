import UsersService from "@/Service/usersService"

export default {
    state:()=>({
        users:[],
        newUserRole:'',
        searchUsersQuery:''
    }),
    mutations:{
        setUsers(state,value){state.users= [...state.users,...value]},
        setNewUserRole(state,value){state.newUserRole=value},
        setSearchUsersQuery(state,value){state.searchUsersQuery=value},
    },
    getters:{
        getUsers(state){return state.users},
        getSearchedUsers(state) {
            if(state.searchUsersQuery.includes('@')){
                return state.users.filter(user => user.email.toLowerCase().includes(state.searchUsersQuery.toLowerCase()))
            }else{
                return state.users.filter(user => user.name.toLowerCase().includes(state.searchUsersQuery.toLowerCase()))
            }
        },
    },
    actions:{
        async loadUsers({commit,state}){
            try {
              const usersData = await UsersService.loadUsers(state.users.length)
              commit('setUsers', usersData.data)
            } catch (error) {
              alert('Отсудствует подлючение', error)
            }  
        },
        async editRole({state}, user){
            try {
                if(user.role!==state.newUserRole&&state.newUserRole){
                    user.role=state.newUserRole
                    await UsersService.changeRole(user.email,state.newUserRole)
                }      
            } catch (error) {
                alert('Отсудствует подлючение', error)
            }
        },
        async banUser({state},email){
            try {
                state.users = state.users.filter(user =>user.email!==email)
                const deleteUser = await UsersService.banUser(email)    
                return deleteUser
            } catch (error) {
                alert('Отсудствует подлючение', error)
            }
        }
    },
    namespaced:true
}