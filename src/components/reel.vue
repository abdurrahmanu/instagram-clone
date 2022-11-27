<script setup>
import data from '../../data/users.json'
import More_btn from './svg/more_btn.vue';
import Send_btn from './svg/send_btn.vue';
import Comment_btn from './svg/comment_btn.vue';
import Like_btn from './svg/like_btn.vue';
import Message_btn from './svg/message_btn.vue';
import {ref} from 'vue'

const reels = ref(data.reels)
</script>

<template>
    <div id="cont">
        <div id="video"  v-for="reel in reels" :key="reel.id">
            <img :src="/img/ + reel.vid" alt="">
            <div id="vid">
                <div id="reel_info">
                    <div id="user">
                        <div id="img"></div>
                        <div>{{reel.username}}</div>
                    </div>
                    <div class="info"></div>
                    <div class="info"></div>
                </div>
                <div id="interactions">
                    <div>
                        <Like_btn />
                        {{reel.likes}}
                    </div>
                    <div>
                        <Comment_btn />
                        {{reel.comments}}
                    </div>
                    <Send_btn />
                    <More_btn />
                    <Message_btn />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
        #cont {
            display: grid;
        }

        #video {
            background: #dfd6d6;
            position: relative;
            width: 100%;
            height: 100vh;
            display: grid;
            border-bottom: 3px solid black;
        }

        img {
            width: 100%;
            height: 100vh;
        }

        #user {
            display: flex;
            gap: 15px;
            align-items: center;
            align-self: flex-end;
        }

        #user #img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: gray;
        }

        #vid {
            align-self: flex-end;
            display: flex;
            justify-content: space-between;
            padding: 15px;
            width: 100%;
            padding-bottom: 40px;
            position: absolute;
            bottom: 0;
        }

        #reel_info {
            display: grid;
            align-content: flex-end;
            gap: 20px;
            padding-left: 50px;
        }

        #reel_info .info {
            background: gray;
            width: 250px;
            height: 30px;
            border-radius: 10px;
        }

        #interactions {
            display: grid;
            gap: 20px;
        }

        #interactions > div {
            display: grid;
            gap: 5px;
            text-align: center;
        }
</style>