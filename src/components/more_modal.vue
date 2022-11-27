<template>
    <div id="cont">
            <div id="ul" @click.self="toggle">
                <div id="first_child" class="red">Report</div>
                <div class="red">Unfollow</div>
                <div>Add to favourites</div>
                <div>Go to post</div>
                <div>Share to...</div>
                <div>Copy link</div>
                <div>Embed</div>
                <div id="last_child" @click.self="toggle">Cancel</div>
            </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['toggle_modal'])

const toggle = () => {
    emit('toggle_modal')
}
</script>

<style scoped>
    #cont {
        display: grid;
        place-content: center;
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0%;
    }

    .red {
        color: red;
        font-weight: 700;
    }

    #ul::after {
        content: '';
        background: gray;
        width: 100vw;
        opacity: 0.4;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    #ul {
        background: white;
        border: 1px solid gainsboro;
        text-align: center;
        border-radius: 20px;
        display: grid;
        width: fit-content;
    }
    
    #ul div {
        padding: 20px 100px;
        border-bottom: 1px solid gainsboro;
    }

    #ul #last_child {
        border-bottom: none;
        border-radius: 0 0 20px 20px;
    }

    #ul #first_child {
        border-radius: 20px 20px 0 0;
    }

    #ul div:hover {
        background: gainsboro;
    }
</style>
