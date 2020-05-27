import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Constructor from '../views/Constructor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/constructor/:uuid',
    name: 'Constructor',
    component: Constructor,
  },
]

const router = new VueRouter({
  routes,
})

export default router
