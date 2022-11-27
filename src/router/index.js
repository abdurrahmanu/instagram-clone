import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import messageView from '../views/messageView.vue'
import userView from '../views/profile.vue'
import searchView from '../views/searchView.vue'
import viewFriend from '../views/friend_profile.vue'
import reelsView from '../views/reelsView.vue'
import statusView from '../views/statusView.vue'
import send_messageView from '../views/send_messageView.vue'
import commentsView from '../views/commentsView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/message',
      name: 'message',
      component: messageView
    },
    {
      path: '/user',
      name: 'user',
      component: userView
    },
    {
      path: '/search',
      name: 'search',
      component: searchView
    },
    {
      path: '/:username',
      name: 'friend',
      component: viewFriend
    },
    {
      path: '/reels',
      name: 'reels',
      component: reelsView
    },
    {
      path: '/status',
      name: 'status',
      component: statusView
    },
    {
      path: '/comments',
      name: 'comments',
      component: commentsView
    },
    {
      path: '/send_message',
      name: 'send_messageView',
      component: send_messageView
    }

  ]
})

export default router
