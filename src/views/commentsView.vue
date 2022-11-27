<script setup>
import User_btn from '@/components/svg/user_btn.vue';
import Back_btn from '@/components/svg/back_btn.vue';
import Send_btn from '@/components/svg/send_btn.vue';

</script>

<template>
    <div id="cont">
        <header>
            <router-link to="/">
                <Back_btn />
            </router-link>
            <div>Comments</div>
            <Send_btn />
        </header>
        <div id="form">
            <form action="">
                <User_btn id="profile_pic" />
                <input placeholder="Add a comment..." type="text">
            </form>
        </div>
        <div id="comments">
            <div class="comment">
                <div class="img"><img src="" alt=""></div>
                <div class="text">
                    <div><span class="username">username</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident omnis dignissimos laboriosam sequi dolorem perspiciatis commodi sit ab velit necessitatibus corrupti ad voluptatem, optio quisquam eum molestias itaque corporis nam eos dolore earum recusandae! Facilis ea maiores culpa sequi numquam! Totam repellendus commodi tempora aspernatur incidunt non tempore earum facere.</div>
                </div>
            </div>
            <div class="comment">
                <div class="img"><img src="" alt=""></div>
                <div class="text">
                    <div><span class="username">username</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid incidunt illo, voluptate fugit eos corporis aut fugiat in ut animi!</div>
                </div>
            </div>
            <div class="comment">
                <div class="img"><img src="" alt=""></div>
                <div class="text">
                    <div><span class="username">username</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid incidunt illo, voluptate fugit eos corporis aut fugiat in ut animi!</div>
                </div>
            </div>
            <div class="comment">
                <div class="img"><img src="" alt=""></div>
                <div class="text">
                    <div><span class="username">username</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid incidunt illo, voluptate fugit eos corporis aut fugiat in ut animi!</div>
                </div>
            </div>
            <div class="comment">
                <div class="img"><img src="" alt=""></div>
                <div class="text">
                    <div><span class="username">username</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid incidunt illo, voluptate fugit eos corporis aut fugiat in ut animi!</div>
                </div>
            </div>
            <div class="comment">
                <div class="img"><img src="" alt=""></div>
                <div class="text">
                    <div><span class="username">username</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid incidunt illo, voluptate fugit eos corporis aut fugiat in ut animi!</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
        #cont {
            padding: 70px 0;
        }

        header {
            position: fixed;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 15px;
            border-bottom: 1px solid rgb(219, 215, 215);
            background: #fff;
            height: 70px;
        }

        #form {
            background: rgb(241, 236, 236);
            padding: 15px;
        }

        form {
            display: flex;
            align-items: center;
            gap: 40px;
            justify-content: center;
        }

        #profile_pic {
            scale: 1.5;
        }

        input {
            width: 80%;
            height: 50px;
            border-radius: 25px;
            padding: 5px;
            padding-left: 15px;
            outline: none;
            border: 1px solid #e1dada;
        }

        #comments {
            display: grid;
            gap: 15px;
            padding: 30px;
        }

        .img {
            width: 30px;
            height: 30px;
            background: gray;
            border-radius: 50%;
        }

        .comment {
            justify-content: center;
            display: flex;
            padding: 10px 20px;
            gap: 25px;
        }

        .text {
            display: flex;
            line-height: 25px;
            width: 80%;
        }

        .username {
            font-weight: 800;
        }
</style>