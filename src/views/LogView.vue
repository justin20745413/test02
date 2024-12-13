<template>
    <div class="auth-container">
        <div class="auth-card" :class="{ 'dark-mode': isDark }">
            <div class="mode-toggle">
                <q-btn
                    flat
                    round
                    dense
                    :icon="isDark ? 'light_mode' : 'dark_mode'"
                    @click="toggleDarkMode"
                />
            </div>
            <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
            >
                <q-tab name="login" label="登入" />
                <q-tab name="register" label="註冊" />
            </q-tabs>

            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="login">
                    <LoginView />
                </q-tab-panel>

                <q-tab-panel name="register">
                    <RegisterView />
                </q-tab-panel>
            </q-tab-panels>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LoginView from '@/components/Login/LoginView.vue'
import RegisterView from '@/components/Login/RegisterView.vue'
import { Dark } from 'quasar'

const tab = ref('login')
const isDark = ref(Dark.isActive)

const toggleDarkMode = () => {
    Dark.toggle()
    isDark.value = Dark.isActive
}

onMounted(() => {
    document.body.classList.add('auth-page')
})

onUnmounted(() => {
    document.body.classList.remove('auth-page')
})
</script>

<style scoped>
.auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.auth-card {
    width: 100%;
    max-width: 450px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 20px;
    position: relative;
}

.auth-card.dark-mode {
    background: var(--header-bg);
    color: white;
}

.mode-toggle {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
}
</style>
