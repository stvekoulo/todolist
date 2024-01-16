import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inscription from '../views/Inscription.vue'
import Connexion from '../views/Connexion.vue'
import Dashboard from '../views/Dashboard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: Inscription,
    },
    {
      path: '/connexion',
      name: 'Connexion',
      component: Connexion,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
