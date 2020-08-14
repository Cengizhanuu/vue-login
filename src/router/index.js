import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Page from '../views/Page.vue'
import SignUp from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/page',
    name: 'Page',
    component: Page
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
