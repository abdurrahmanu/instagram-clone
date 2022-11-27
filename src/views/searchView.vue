<script setup>
import Media from '../components/media.vue'

</script>

<template>
    <div id="cont">
        <form>
            <input type="text">
            <div v-if="true">cancel</div>
        </form>
        <router-link to="/">
            <Media />
        </router-link>
    </div>
</template>

<style scoped>
    #cont {
        padding: 50px 0;
    }

    form {
        z-index: 100;
        background: white;
        position: fixed;
        top: 0;
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #ded6d6;
    }
    
    input {
        width: 80%;
        border-radius: 5px;
        height: 30px;
    }
</style>