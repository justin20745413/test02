<template>
    <q-header elevated class="header-with-blur" :class="{ 'dark-mode': isDark }">
        <q-toolbar class="toolbar-centered">
            <q-btn
                v-if="showMenuButton"
                flat
                round
                dense
                icon="menu"
                @click="$emit('toggle-drawer')"
                aria-label="Menu"
            />
            <q-toolbar-title class="title-centered">System Y</q-toolbar-title>
            <div class="flex items-center">
                <div v-if="showMenuButton" class="remaining-time">
                    剩餘時間：{{ timerState.remainingTime }}
                </div>
                <q-btn
                    v-if="showMenuButton"
                    flat
                    round
                    dense
                    :icon="isDark ? 'light_mode' : 'dark_mode'"
                    @click="toggleDarkMode"
                />
            </div>
        </q-toolbar>
    </q-header>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTimer } from '@/utils/timer'
import { useTheme } from '@/utils/theme'

const route = useRoute()
const { timerState, startTimer, clearTimers } = useTimer()
const { isDark, toggleDarkMode, initTheme } = useTheme()

const isLoginPage = computed(() => {
    return route.path.includes('/auth')
})

// 使用 ref 來存儲認證狀態
const showMenuButton = computed(() => {
    return !isLoginPage.value
})

// 監聽路由變化
watch(
    () => route.path,
    (newPath) => {
        if (!newPath.includes('/auth')) {
            startTimer()
        }
    },
    { immediate: true },
)

// 監聽登入狀態
watch(
    () => localStorage.getItem('token'),
    (newVal) => {
        if (newVal && isLoginPage.value) {
            startTimer()
        }
    },
    { immediate: true },
)

onMounted(() => {
    initTheme()
})

onUnmounted(() => {
    clearTimers()
})
</script>

<style scoped lang="scss">
.header-with-blur {
    background: radial-gradient(circle at center, #5819f880, transparent 30%), #467ea3;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(10px);

    &.dark-mode {
        background: radial-gradient(circle at center, #1a1a1a80, transparent 30%), #2d3648;
    }
}

.toolbar-centered {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.title-centered {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}

.remaining-time {
    margin-left: 16px;
    margin-right: 16px;
    font-size: 14px;
    color: white;
}
</style>
