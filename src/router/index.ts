import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/utils/auth'
import type { App } from 'vue'
import ExampleView from '@/views/ExampleView.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
        meta: { requiresAuth: false },
    },
    {
        path: '/',
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
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'about-view',
                component: () => import('@/views/AboutView.vue'),
            },
        ],
    },
    {
        path: '/swiper',
        name: 'swiper',
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'swiper-view',
                component: () => import('@/views/SwiperView.vue'),
            },
        ],
    },
    {
        path: '/example',
        name: 'Example',
        component: ExampleView,
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
