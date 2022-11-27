<template>  
<div id="cont">
    <header>
        <div id="instagram_logo"><i>instagram</i></div>
        <div id="header_btns">
            <Add_btn />
            <Like_btn v-if="white"  @click="toggle"/>
            <Black_like v-else @click="toggle" />
        </div>

        <div id="pop_up" v-if="pop">
            <div>first</div>
            <div>second</div>
        </div>
    </header>

    <main>
        <div id="status">
            <router-link to="/status">
                <div></div>
            </router-link>
            <router-link to="/status">
                <div></div>
            </router-link>
        </div>

        <div id="posts">
            <post
            @toggle_modal="toggle_modal"
            :users="users"
            />
            <More_modal
            v-if="modal"
            @toggle_modal="toggle_modal"
            />
        </div>
    </main>
</div>
</template>

<script setup>
import post from '../components/post.vue'
import Like_btn from '@/components/svg/like_btn.vue';
import Add_btn from '@/components/svg/add_btn.vue';
import More_modal from '@/components/more_modal.vue';
import Black_like from '@/components/svg/black_like.vue';
import { ref } from '@vue/reactivity';
import { defineProps } from 'vue';

const props = defineProps(['users'])

const white = ref(true)
const modal = ref(false)

const toggle_modal = () => {
    modal.value = !modal.value
}

const toggle = () => {
    white.value = !white.value
}

</script>

<style scoped>
        #cont {
            padding: 65px 0;
        }

        .black {
            background: #000;
        }

        .white {
            background: white;
        }

        
        header {
            border-bottom: 1px solid #ded8d8;
            display: flex;
            justify-content: space-between;
            padding: 15px 30px;
            position: fixed;
            top: 0;
            width: 100%;
            background: white;
        }
        
        #instagram_logo {
            font-size: 30px;
            font-family: cursive;
        }

        #header_btns {
            display: flex;
            gap: 40px;
        }

        svg {
            width: 30px;
            height: 30px;
        }

        div #status {
            border-bottom: 1px solid #d8d3d3;
            background: #f7f2f2;
            display: flex;
            width: 100%;
            padding: 20px 10px;
            padding-left: 30px;
            gap: 30px;
        }
    
        div #status div {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            background: white;
            border: 1px solid;
        }

        #pop_up {
        background: white;
        border-radius: 5px;
        padding: 10px 25px;
        position: fixed;
        bottom: 85%;
        left: 70%;
        border: 1px solid #d08b8b;
        display: grid;
        gap: 15px;
        }
</style>








