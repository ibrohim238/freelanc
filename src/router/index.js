import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/ContactView')
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import('@/views/PartnerView')
  },
  {
    path:  '/individuals',
    name: 'individuals',
    component: () => import('@/views/IndividualsView')
  },
  {
    path:  '/branches',
    name: 'branches',
    component: () => import('@/views/BranchesView'),
    meta: {
      title: 'qwe'
    }
  },
  {
    path:  '/entity',
    name: 'entity',
    component: () => import('@/views/EntityView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
