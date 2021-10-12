import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 固定路由
export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  }
]

const createRouter = () => new Router({
  routes: constantRoutes
})

const router = createRouter()

export default router
