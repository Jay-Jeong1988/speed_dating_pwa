import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import DashBoard from '../views/DashBoard.vue'
import BookedEventsPage from '../views/BookedEventsPage.vue'

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
  },
  {
    path: '/booked_events',
    name: 'Booked_events_page',
    component: BookedEventsPage
  },
  {
    path: '/submit_result',
    name: 'Submit'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
