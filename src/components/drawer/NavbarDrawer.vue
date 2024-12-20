<template>
    <q-drawer v-model="drawerOpen" side="left" bordered overlay :class="{ 'body--dark': isDark }">
        <q-list>
            <q-item clickable v-ripple @click="navigateTo('')">
                <q-item-section avatar>
                    <q-icon :color="isDark ? 'white' : 'black'" name="home" />
                </q-item-section>
                <q-item-section :class="{ 'dark-text': isDark }">Home</q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="navigateTo('chart')">
                <q-item-section avatar>
                    <q-icon :color="isDark ? 'white' : 'black'" name="info" />
                </q-item-section>
                <q-item-section :class="{ 'dark-text': isDark }">Echart</q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="navigateTo('swiper')">
                <q-item-section avatar>
                    <q-icon :color="isDark ? 'white' : 'black'" name="image" />
                </q-item-section>
                <q-item-section :class="{ 'dark-text': isDark }">Swiper</q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="navigateTo('product')">
                <q-item-section avatar>
                    <q-icon :color="isDark ? 'white' : 'black'" name="mail" />
                </q-item-section>
                <q-item-section :class="{ 'dark-text': isDark }">Product</q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="navigateTo('bg')">
                <q-item-section avatar>
                    <q-icon :color="isDark ? 'white' : 'black'" name="image" />
                </q-item-section>
                <q-item-section :class="{ 'dark-text': isDark }">BG</q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="navigateTo('q-expansion')">
                <q-item-section avatar>
                    <q-icon :color="isDark ? 'white' : 'black'" name="image" />
                </q-item-section>
                <q-item-section :class="{ 'dark-text': isDark }">q-expansion</q-item-section>
            </q-item>
            <q-separator inset /><!-- 線可加 -->

            <q-item clickable v-ripple @click="navigateTo('extest01')">
                <q-item-section avatar>
                    <q-icon :color="isDark ? 'white' : 'black'" name="card_giftcard" />
                </q-item-section>
                <q-item-section :class="{ 'dark-text': isDark }">Extest01</q-item-section>
            </q-item>
            <q-separator /><!-- 線可加inset -->
            <q-item clickable v-ripple @click="handleLogout">
                <q-item-section avatar>
                    <q-icon :color="isDark ? 'white' : 'black'" name="logout" />
                </q-item-section>
                <q-item-section :class="{ 'dark-text': isDark }">登出</q-item-section>
            </q-item>
        </q-list>
    </q-drawer>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { logout } from '@/utils/auth'
import { Dark } from 'quasar'

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    },
})

const emit = defineEmits(['update:modelValue'])
const isDark = ref(Dark.isActive)

// 監聽暗色模式變化
watch(
    () => Dark.isActive,
    (val) => {
        isDark.value = val
    },
)

const drawerOpen = computed({
    get: () => props.modelValue,
    set: (value: boolean) => emit('update:modelValue', value),
})

const router = useRouter()

const navigateTo = (route: string) => {
    router.push(`/${route}`).then(() => {
        emit('update:modelValue', false)
    })
}

const handleLogout = () => {
    logout()
}
</script>

<style scoped>
.q-drawer {
    background: var(--header-bg);
}

.body--dark {
    background: var(--header-bg);
    color: white;
}

.dark-text {
    color: white !important;
}

.custom-text-color {
    color: black;
}
</style>
