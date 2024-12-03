<template>
    <q-header elevated class="header-with-blur">
        <q-toolbar>
            <q-btn flat round dense icon="menu" @click="$emit('toggle-drawer')" aria-label="Menu" />
            <q-toolbar-title>System Y</q-toolbar-title>
            <q-btn
                v-if="isAuthenticatedtxt"
                flat
                round
                dense
                icon="logout"
                @click="handleLogout"
                aria-label="Logout"
            />
        </q-toolbar>
    </q-header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { logout, isAuthenticated } from '@/utils/auth'

const isAuthenticatedtxt = computed(() => isAuthenticated())

const router = useRouter()
const handleLogout = () => {
    logout()
    router.push('/login')
}
</script>

<style scoped lang="scss">
.header-with-blur {
    background: radial-gradient(circle at center, #5819f880, transparent 30%), #467ea3;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(10px);
}
</style>
