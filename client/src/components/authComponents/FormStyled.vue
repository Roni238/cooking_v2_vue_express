<template >
    <form @submit.prevent class="sss">
        <slot></slot>
    </form>
</template>
<script>
export default {
    name:'form-styled'
}
</script>
<style scoped lang="scss">
form{
    width: 80%;
    margin: auto;
    background-color: #fff;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    padding: 25px 17px;

    
}
form:deep(){
    h4{
        margin-top: 10px;
        color: rgb(115, 115, 115);
    }
    button{
        border: 1px solid #cddbef;
        border-radius: 30px;
        background: #eef9fe;
        align-self: center;
        padding: 10px 17px;
        font-size: 1.1rem;
        margin-top: 20px;
    }
    input{ 
        border: 1px solid #cddbef;
        border-radius: 2px;
        background: #eef9fe;
        padding: 7px;
        font-size: 1.1rem;
    }
}
</style>