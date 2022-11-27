<script setup>
import Like_btn from './svg/like_btn.vue';
import Send_btn from './svg/send_btn.vue';
import Save_btn from './svg/save_btn.vue';
import Comment_btn from './svg/comment_btn.vue';
import More_btn from './svg/more_btn.vue'
import Liked_btn from './svg/red_like.vue';
import Saved_btn from './svg/black_save.vue';
import { defineEmits, defineProps, ref} from 'vue';

const emit = defineEmits(['toggle_modal'])
const props = defineProps(['users'])

const toggle_like = (user) => {
    user.posts[0].like = !user.posts[0].like
    if (user.posts[0].like) user.posts[0].likes++;
    else if (!user.posts[0].like) user.posts[0].likes--
}

const toggle_save = (user) => {
    user.posts[0].save = !user.posts[0].save
}

</script>

<template>
        <div id="post" v-for="user in users" :key="user.id">
            <div id="post_head">
                <div id="poster_name">
                    <router-link :to="user.username">
                        <div id="display_pic">
                            <img src="" alt="">
                        </div>
                    </router-link>
                    <router-link :to="user.username">
                        <div>{{user.username}}</div>
                    </router-link>
                </div>
                    <More_btn @click="$emit('toggle_modal')" />
            </div>
            <div id="img">
                <img 
                class="post_media" 
                :src="`/img/` + user.posts[0].media" height="100%"
                :alt="user.posts[0].media"
                >
            </div>
            <div id='post_bottom'>
                <div id="interactions">
                    <div id="like">
                        <Like_btn @click="toggle_like(user)" v-if="!user.posts[0].like"/>
                        <Liked_btn @click="toggle_like(user)" v-else/>
                        <router-link to="/comments">
                            <Comment_btn />
                        </router-link>
                        <Send_btn />
                    </div>
                    <Save_btn @click="toggle_save(user)" v-if="!user.posts[0].save"/>
                    <Saved_btn @click="toggle_save(user)" v-else/>
                </div>
                <div id="likes">{{user.posts[0].likes}} {{user.like}}likes</div>
                <div id="post_text">
                    <span id="name">{{user.username}}</span> {{user.posts[0].text}}
                </div>
                <router-link to="/comments">
                    <div id="comments">View all 
                    {{user.posts[0].comments_count}} comments</div>
                </router-link>
                <div id="duration">{{user.posts[0].time}}</div>
            </div>
        </div>
</template>


<style scoped>
        #post {
            margin-top: 20px;
            display: grid;
            gap: 10px;
        }

        .white {
            background: white;
        }

        img.post_media {
            width: 100%;
            height: 100%;
        }

        #post_head {
            display: flex;
            justify-content: space-between;
            padding: 10px 30px;
            align-items: center;
        }

        #poster_name {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        #display_pic {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid;
        }

        #img {
            background: aqua;
        }

        #interactions {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
        }

        #like {
            display: flex;
            gap: 20px;
        }

        #likes, #name {
            font-weight: 900;
        }

        #post_bottom {
            padding-left: 20px;
            padding-right: 20px;
            display: grid;
            gap: 10px;
        }
</style>




