<script setup>
import res from '../data/users.json'
import search_btn from './components/svg/search_btn.vue'
import home_btn from './components/svg/home_btn.vue'
import Black_home_btn from './components/svg/black_home.vue'
import reel_btn from './components/svg/reel_btn.vue'
import user_btn from './components/svg/user_btn.vue'
import Send_btn from './components/svg/send_btn.vue';
import Smartphone_svg from './components/svg/smartphone.vue'
import { watchEffect, ref} from '@vue/runtime-core'
import { useRoute } from 'vue-router'

const max_app_width = 750
const screen = ref(0)
const users = ref(res.users)
const white = ref(true)
const footer = ref(true)
const show_page = ref(true)
const path  = ref('')
const route = useRoute()

window.addEventListener('resize', () => {
  screen.value = innerWidth
})

watchEffect(() => {
    screen.value = innerWidth
    path.value = route.path;
    path.value === '/' ? white.value = false : white.value = true;
    if (screen.value > max_app_width) show_page.value = false
    else show_page.value = true
})
</script>

<template>
  <div v-if="show_page" id="main_page">

    <router-view
    :users="users"
    />

      <footer v-if="footer">
        <router-link to="/">
            <home_btn v-if="white" />
            <Black_home_btn  v-else />
      </router-link>

      <router-link to="/search">
          <search_btn />
      </router-link>
      
      <router-link to="/reels">
        <reel_btn />
      </router-link>
  
      <router-link to="/message">
          <Send_btn />
      </router-link>
      
      <router-link to="/user">
          <user_btn />
      </router-link>
      
      </footer>
  </div>

  <div id="max_width" v-else>
    <div>
      <Smartphone_svg />
      <p>Mobile View only</p>
    </div>
  </div>
</template>

<style scoped>
  #main_page {
    display: none;
  }

  @media (max-width: 751px) {
    #main_page {
      display: block;
    }

    footer {
        display: flex;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        width: 100%;
        background: white;
        padding: 10px 0;
        border-top: 1px solid #cfcaca;
    }
  
    svg {
        width: 30px;
        height: 30px;
    }
    .black {
            background: #000;
    }

    .white {
        background: white;
    }
  }
</style>
