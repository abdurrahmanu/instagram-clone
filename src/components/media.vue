<script setup>
import data from '../../data/users.json'
import { ref } from 'vue';

const posts_media = ref(data.media)
</script>

<template>
    <div id="gallery">
        <div v-for="media in posts_media" :key="media.id" :class="media.height">
            <img :src="'/img/' + media.pic" alt="">
        </div>
    </div>
</template>

<style scoped>
    #gallery {
        padding: 3px 1px 10px 1px;
        display: grid;
        grid-auto-rows: 150px;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-auto-flow: dense;
    }

    #gallery div {
        border: 1px solid;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .long, .normal {
        position: relative;
    }

    .long {
        grid-row: span 2;
    }
</style>