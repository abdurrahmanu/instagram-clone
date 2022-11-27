<script setup>
import Settings_btn from '@/components/svg/settings_btn.vue'
import Add_user_btn from '@/components/svg/add_user_btn.vue'
import Save_btn from '@/components/svg/save_btn.vue';
import User_btn from '@/components/svg/user_btn.vue';

</script>

<template>
    <div id="cont">
        <header>
            <Settings_btn />
            <div>username</div>
            <Add_user_btn />
        </header>
        <main>
            <div id="profile">
                <div id="user">
                    <div id="profile_pic"></div>
                    <div id="edit_profile">
                        <div>Username</div>
                        <button>Edit Profile</button>
                    </div>
                </div>
                <div id="fullname">FirstName Surname</div>
            </div>

            <div id="info">
                <div>
                    <div>0</div>
                    <div>posts</div>
                </div>
                <div>
                    <div>1</div>
                    <div>follower</div>
                </div>
                <div>
                    <div>3</div>
                    <div>following</div>
                </div>
            </div>

            <div id="more">
                <Save_btn />
                <Save_btn />
                <Save_btn />
                <User_btn />
            </div>

            <div id="others">
                <p>Getting started</p>
                <div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
        #cont {
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
            background: white;
        }

        main {
            margin-bottom: 40px;
        }

        #profile {
            height: 200px;
            padding: 20px;
            border-bottom: 1px solid gray;
            display: grid;
            align-items: center;
            gap: 10px;
            padding-left: 50px;
        }

        #edit_profile {
            display: grid;
            gap: 15px;
            justify-items: center;
        }

        #profile #user {
            display: flex;
            align-items: center;
            gap: 50px;
        }

        #fullname {
            align-self: flex-start;
            justify-self: flex-start;
        }

        #profile_pic {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            border: 1px solid;
        }

        #more, #info {
            padding: 20px 20px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid gray;
        }

        #info div {
            display: grid;
            justify-content: center;
        }

        #others {
            padding: 20px;
            background: rgb(236, 232, 232);
        }

        #others > div {
            display: flex;
            gap: 10px;
        }

        #others .card {
            width: 150px;
            height: 150px;
            border: 1px solid gainsboro;
            background: white;
        }

        #more div {
            width: 50px;
            height: 50px;
            background: black;
        }

        p {
            padding-left: 10px;
            font-size: 1.4rem;
        }
</style>