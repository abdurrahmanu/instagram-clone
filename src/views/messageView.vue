<template>
    <div id="cont">
        <header>
            <router-link to="/">
                <Back_btn />
            </router-link>
            <div id="username">
                <span>Username</span>
                <Arrow_down_btn />
            </div>
            <Write_btn />
        </header>
        <main>
            <p>No messages</p>
            <router-link to="/send_message">
                <button>Create a message</button>
            </router-link>
        </main>
    </div>
</template>

<script setup>
import Back_btn from '@/components/svg/back_btn.vue';
import Add_btn from '@/components/svg/add_btn.vue'
import Write_btn from '@/components/svg/write_btn.vue';
import Arrow_down_btn from '../components/svg/arrow_down_btn.vue';

</script>

<style scoped>
        #cont {
            text-align: center;
            padding-top: 50px;
        }

        header {
            position: fixed;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 15px;
            border-bottom: 1px solid gray;
            height: 70px;
        }

        svg {
            width: 30px;
            height: 30px;
        }

        #username {
            display: flex;
            align-items: center;
        }

        main {
            display: grid;
            place-content: center;
            min-height: calc(100vh - 50px);
        }
</style>