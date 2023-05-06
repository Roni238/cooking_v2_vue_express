<template>
    <div class="bg-popup">
        <div class="activation-popup">
            <h2>Проверьте почту и подтвердите регистрацию!</h2>
                <button @click="this.$store.dispatch('userModule/logout')"> Не могу подтвердить почту </button>
        </div>
    </div>
</template>
<script>
export default {
    name:'activation-popup',
}
</script>
<style scoped>
    .activation-popup{
        width: 80%;
        color: blanchedalmond;
        background: #2f1c00;
        margin: auto;
        padding: 20px;
        border-radius: 20px;
        min-height: 120px;
        max-width: 700px;
    }
    .bg-popup{
        background: #0000006c;
        position:fixed;
        z-index: 200;
        height:100%;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    button{
        background: #704300;
        border: solid blanchedalmond 1px;
        margin-top:10px;
        color:blanchedalmond;
        padding:5px;
        border-radius: 5px;
    }
</style>