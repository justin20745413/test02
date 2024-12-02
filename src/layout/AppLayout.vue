<template>
    <q-layout view="hHh lpR fFf">
        <!-- Header -->
        <q-header elevated class="header-with-blur">
            <q-toolbar>
                <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" aria-label="Menu" />
                <q-toolbar-title>System Y</q-toolbar-title>
                <q-btn
                    v-if="userIsAuthenticated"
                    flat
                    round
                    dense
                    icon="logout"
                    @click="handleLogout"
                    aria-label="Logout"
                />
            </q-toolbar>
        </q-header>

        <NavbarDrawer v-model="leftDrawerOpen" />

        <!-- Main Content -->
        <q-page-container>
            <router-view />
        </q-page-container>

        <!-- Footer -->
        <q-footer elevated class="bg-grey-8 text-white">
            <q-toolbar>
                <q-toolbar-title>Footer Content</q-toolbar-title>
            </q-toolbar>
        </q-footer>
    </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import NavbarDrawer from '@/components/drawer/NavbarDrawer.vue'
import { logout, isAuthenticated } from '@/utils/auth'

const router = useRouter()
const leftDrawerOpen = ref(false)

const userIsAuthenticated = computed(() => isAuthenticated())

const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
}

const handleLogout = () => {
    logout()
    router.push('/login')
}
</script>

<style lang="scss">
@import 'quasar/src/css/variables.sass';
@import '@/style/quasar.variables.scss';

// 全局樣式放在這裡
</style>

<style lang="scss" scoped>
.header-with-blur {
    background: rgba(57, 255, 245, 0.3);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(10px);
}

.q-page-container {
    /* 確保內容不被干擾 */
    width: 100%;
    height: 100%;
}
</style>
