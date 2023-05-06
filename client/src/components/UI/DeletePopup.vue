<template>
    <div class="dark">
        <div class="popup">
            <h1>Хотите удалить {{ deleteObj?.title }} {{ deleteObj?.name }} {{ deleteObj?.categoryName }} {{ deleteObj.commentText }}?
                <span>
                    <button @click="this.$store.dispatch(dispatchPath, deleteObj._id?deleteObj._id:deleteObj.email);
                            this.$store.commit('setShowDeletePopup',false)">
                        Да
                    </button>
                    <button @click="this.$store.commit('setShowDeletePopup',false)">Нет</button>
                </span>
            </h1>
        </div>
    </div>
</template>
<script>
export default {
    name:'delete-popup',
    props: {
        deleteObj: {
            type: Object,
            required: true,
        },
        dispatchPath:{
            type: String,
            required: true,
        }
    },
}
</script>
<style scoped>
    .dark{
        position: fixed;
        top: 0%;
        right: 0px;
        height: 100%;
        width: 100%;
        background: #00000073;
        z-index: 100;
        display: flex;
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .popup{
        width: 80%;
        padding: 10px;
        margin: 20px;
        max-width: 400px;
        border-radius: 20px;
        background-color: aliceblue;
        overflow: hidden;
    }
    span{
        justify-content: space-around;
        display: flex;
    }
    img{
        width:100%;
        height: 100%;
    }
</style>