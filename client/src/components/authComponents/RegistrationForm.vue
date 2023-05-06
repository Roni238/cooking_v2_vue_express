<template>
    <form-styled>
        <h3>{{errorMessage}}</h3>
        <h4>Почта</h4> 
        <input type="email" v-model.trim="data.email" required>

        <h4>Пароль</h4> 
        <label for="password" v-if="hidePassword">
            <input type="password" v-model.trim="data.password" required>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="password-control" @click="this.hidePassword=false"    
            ><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" ></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
        </label> 

        <label for="password" v-else>
            <input type="text" v-model.trim="data.password" required>

            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="password-control" @click="this.hidePassword=true"
            ><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        </label>

        <h4>Имя</h4> 
        <input type="text" v-model.trim="data.name" required>

        <button @click="registration">Регистрация</button>

    </form-styled>     
</template>
<script>
export default {
    name:'registration-form',
    data() {
        return {
            data:{
                email:'',
                password:'',
                name:'',
            },
            errorMessage:'',
            hidePassword:true
        }
    },
    methods:{
        async registration(){
            const error = await this.$store.dispatch('userModule/registration', this.data)
            this.errorMessage=error
        }
    }
}
</script>
<style scoped>
label {
    display: flex;
    align-items: center;
    position: relative;
}
.password-control{
    position: absolute;
    height: 30px;
    width: 30px;
    right: 5px;
}
input{
    width: 100%;
}
</style>