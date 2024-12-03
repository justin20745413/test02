<template>
    <q-layout view="hHh lpR fFf">
        <!-- Header -->
        <HeaderLayout @toggle-drawer="toggleLeftDrawer" />

        <!-- Drawer -->
        <NavbarDrawer v-model="leftDrawerOpen" />

        <!-- Main Content -->
        <q-page-container>
            <router-view />
        </q-page-container>

        <!-- Footer -->
        <FooterLayout />
    </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavbarDrawer from '@/components/drawer/NavbarDrawer.vue'
import FooterLayout from './FooterLayout.vue'
import HeaderLayout from './HeaderLayout.vue'

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style lang="scss">
@import 'quasar/src/css/variables.sass';
@import '@/style/quasar.variables.scss';
</style>
