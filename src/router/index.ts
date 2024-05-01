import { createRouter, createWebHistory } from 'vue-router'
import TicketListing from '../views/ticket-listing/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/ticket-listing'
    },
    {
      path: '/ticket-listing',
      name: 'TicketListing',
      component: TicketListing
    }
  ]
})

export default router
