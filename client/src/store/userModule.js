import AuthService from "@/Service/AuthService"
import FavoritesServise from "@/Service/favoritesServise"
import axios from 'axios';
import {API_URL} from "../http/$api-json";

export default {
    state:()=>({
        user:{},
        errorMessage:''
    }),
    mutations:{
        setUser(state,user){state.user=user},
        setErrorMessage(state,errorMessage){state.errorMessage=errorMessage},
    },
    getters:{
        getName(state){ return state.name},
        getUser(state){ return state.user},
        getRole(state){ return state.user?.role},
        getIsActivated(state){ return state.user?.isActivated}
    },
    actions:{
        async login({commit},loginData){
            try {
                const {email, password} = loginData              
                const response=await  AuthService.login(email,password)
                localStorage.setItem('token', response.data.accessToken)

                commit('setUser', response.data.user)
                commit('favoritesModule/setUser', response.data.user , { root: true })
            } catch (error) {
                return error.response?.data?.message
            }
        },
        async registration({commit},registrationData){
            try {
                const {email,password,name} = registrationData
                const response=await  AuthService.registration(email,password,name)
                if(password.lenght<7){
                    commit('setErrorMessage','Пароль должен быть не короче 7')
                }
                localStorage.setItem('token', response.data.accessToken)
                commit('setUser', response.data.user)
                commit('favoritesModule/setUser', response.data.user , { root: true })
                window.location.href = 'http://localhost:8080'
            } catch (error) {
                return error.response?.data?.message
            }
        },
        async logout({commit}){
            try {
                await AuthService.logout()
                localStorage.removeItem("token")
                commit('setUser', {})
            } catch (error) {
                console.log(error.response?.data?.message)
            }
        },
        async checkAuth({commit}){
            try {
                const response=await axios.get(`${API_URL}/refresh`, {withCredentials:true})
                localStorage.setItem('token', response.data.accessToken)
                commit('setUser', response.data.user)
                commit('favoritesModule/setUser', response.data.user , { root: true })
            } catch (error) {
                console.log(error)
            }
        }
    },
    namespaced:true
}