import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView'),
    meta: {
      title: 'Главная страница'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView'),
    meta: {
      title: 'О компании'
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/ContactView'),
    meta: {
      title: 'Контакты'
    }
  },
  {
    path:  '/individuals',
    name: 'individuals',
    component: () => import('@/views/IndividualsView'),
    meta: {
      title: 'Физические лица'
    }
  },
  {
    path:  '/reference',
    name: 'reference',
    component: () => import('@/views/ReferenceView'),
    meta: {
      title: 'Справка'
    }
  },
  {
    path:  '/entity',
    name: 'entity',
    component: () => import('@/views/EntityView'),
    meta: {
      title: 'Юридические лица'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
