<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="header-with-blur">
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" aria-label="Menu" />
        <q-toolbar-title>System Y</q-toolbar-title>
        <q-btn flat round dense icon="logout" @click="handleLogout" aria-label="Logout" />
      </q-toolbar>
    </q-header>

    <!-- 左侧抽屉导航 -->
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import NavbarDrawer from '@/components/drawer/NavbarDrawer.vue'
import { logout } from '@/utils/auth'

const router = useRouter()
const leftDrawerOpen = ref(false)

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
</style>
