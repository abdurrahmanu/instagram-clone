<template>
    <div id="cont">
        <header id="header">
            <router-link to="/">
                <Back_btn id="back" />
            </router-link>
            <div>{{friend_data.username}}</div>
        </header>
        <div id="about">
            <div id="info">
                <div id="profile_pic"><img src="" alt=""></div>
            <div id="user_and_buttons">
                <div id="user_name">
                    <div>{{friend_data.name}}</div>
                    <More_btn />
                </div>
                <div id="buttons">
                    <button>Message</button>
                    <button>Add</button>
                    <button>suggested</button>
                </div>
            </div>
            </div>
            <div>
                <p>{{friend_data.full_name}}</p>
                <p>{{friend_data.about}}</p>                
            </div>
            <div id="followers">
                <div><img src="" alt=""></div>
                <div><img src="" alt=""></div>
                <div><img src="" alt=""></div>
                <div><img src="" alt=""></div>
            </div>
        </div>
        <div id="follower_count">
            <div>
                <div>{{friend_data.posts_number}}</div>
                <div>posts</div>
            </div>
            <div>
                <div>{{friend_data.followers}}</div>
                <div>followers</div>
            </div>
            <div>
                <div>{{friend_data.following}}</div>
                <div>following</div>
            </div>
        </div>
        <div id="svgs">
            <Reel_btn />
            <Reel_btn />
            <Reel_btn />
            <User_btn />
        </div>
        <router-link to="/">
            <Media />
        </router-link>
    </div>
</template>

<script setup>
import Back_btn from '@/components/svg/back_btn.vue';
import More_btn from '@/components/svg/more_btn.vue';
import User_btn from '@/components/svg/user_btn.vue';
import Reel_btn from '@/components/svg/reel_btn.vue';
import Media from '@/components/media.vue';
import { onMounted, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps(['users'])
const route = useRoute()
const friend_data = ref([])

const mounted = onMounted(() => {
    console.log('worked');
    const data = props.users.filter(each => each.username == route.params.username);
    friend_data.value = data[0];
})

</script>

<style scoped>
        #cont {
            padding: 60px 0;
        }
    
        p {
            margin: 5px;
        }
    
        header {
            position: fixed;
            border-bottom: 1px solid gray;
            padding: 20px;
            display: flex;
            justify-content: center;
            top: 0%;
            width: 100%;
            background: white;
            height: 60px;
        }

        header #back {
            position: absolute;
            left: 10px;
        }
    
        #profile_pic {
            width: 100px;
            height: 100px;
            background: gray;
            border-radius: 50%;
        }
    
        #info {
            display: flex;
            gap: 20px;
            align-items: center;
        }
    
        #user_and_buttons {
            display: grid;
            gap: 30px;
        }
    
        #user_name {
            display: flex;
            gap: 30px;
        }
    
        #buttons {
            display: flex;
            gap: 10px;
        }
        
        #buttons button {
            padding: 10px 20px;
            border-radius: 10px;
            border: 1px solid gray;
            outline: none;
        }
    
        #about {
            padding: 10px;
            display: grid;
            gap: 20px;
            border-bottom: 1px solid gray;
        }
    
        #followers {
            display: flex;
            padding: 10px;
            gap: 10px;
        }
    
        #follower_count {
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
            border-bottom: 1px solid gray;
        }

        #follower_count > div {
            text-align: center;
        }
    
        #svgs {
            display: flex;
            padding: 10px;
            border-bottom: 1px solid gray;
            justify-content: space-around;
        }
    
        #svgs div {
            width: 40px;
            height: 40px;
            background: aqua;
        }
    
        #followers div {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: gray;
        }
    
        #media {
            display: grid;
            grid-auto-rows: 100px;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            padding: 10px;
            gap: 10px;
        }
    
        #media div {
            border: 1px solid;
        }
</style>