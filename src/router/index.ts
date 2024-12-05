import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import ExampleView from '@/views/ExampleView.vue'

const routes = [
    {
        path: '/auth',
        component: () => import('@/views/LogView.vue'),
        meta: { requiresAuth: false },
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('@/components/Login/LoginView.vue'),
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('@/components/Login/RegisterView.vue'),
            },
        ],
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
        path: '/chart',
        name: 'chart',
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'chart-view',
                component: () => import('@/views/ChartView.vue'),
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

export function setupRouter(app: App) {
    app.use(router)
}

export default router
