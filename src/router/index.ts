import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/utils/auth'
import type { App } from 'vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/',
    component: () => import('@/layout/AppLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'home-view',
        component: () => import('@/views/HomeView.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/layout/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'about-view',
        component: () => import('@/views/AboutView.vue'),
      },
    ],
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/layout/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'contact-view',
        component: () => import('@/views/ContactView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !isAuthenticated()) {
    next('/login')
  } else if (to.path === '/login' && isAuthenticated()) {
    next('/')
  } else {
    next()
  }
})

export function setupRouter(app: App) {
  app.use(router)
}

export default router
