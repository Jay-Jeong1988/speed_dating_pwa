import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import DashBoard from '../views/DashBoard.vue'

const routes = [
  {
    path: '/',
    name: 'loginPage',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'dashBoard',
    component: DashBoard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
