import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManageHome from '@/views/ManageHome.vue'
import Login from '@/views/Login.vue'
import Ranking from '@/views/Ranking.vue'
import Sort from '@/views/Sort.vue'
import VideoPlayback from '@/views/VideoPlayback.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking,
    },
    {
      path: '/sort',
      name: 'sort',
      component: Sort,
    },
    {
      path: '/manage',
      name: 'homeManage',
      component: ManageHome,
    },
    {
      path: '/Videoplayback/:animeId/:episode',
      name: 'Videoplayback',
      component: VideoPlayback,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
      meta: { requiresAuth: false }
    },
  ],
})

export default router
