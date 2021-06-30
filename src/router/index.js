import Vue from 'vue'
import VueRouter from 'vue-router'
import HellowWorld from '../views/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HellowWorld
  },
  {
    path: '/other',
    name: 'other',
    component: () => import('../views/Other.vue')
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
