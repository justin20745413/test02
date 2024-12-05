<template>
    <div class="login-container">
        <q-form @submit="handleLogin" ref="form">
            <q-input
                v-model="username"
                label="帳號"
                filled
                class="q-mb-md"
                :rules="[(val) => !!val || '請輸入帳號']"
                lazy-rules
            >
                <template v-slot:prepend>
                    <q-icon name="person" />
                </template>
            </q-input>

            <q-input
                v-model="password"
                label="密碼"
                filled
                class="q-mb-md"
                :type="isPwd ? 'password' : 'text'"
                :rules="[(val) => !!val || '請輸入密碼']"
                lazy-rules
            >
                <template v-slot:prepend>
                    <q-icon name="lock" />
                </template>

                <template v-slot:append>
                    <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                    />
                </template>
            </q-input>

            <AuthCode ref="authCode" />

            <q-btn
                color="warning"
                class="full-width q-mt-lg"
                type="submit"
                :loading="loading"
                unelevated
            >
                登入
            </q-btn>
        </q-form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { QForm, useQuasar } from 'quasar'
import AuthCode from '@/components/AuthCode.vue'

const router = useRouter()
const $q = useQuasar()
const form = ref<QForm | null>(null)
const authCode = ref(null)
const username = ref('')
const password = ref('')
const loading = ref(false)
const isPwd = ref(true)

const handleLogin = async () => {
    if (!form.value) return
    const isValid = await form.value.validate()

    if (!isValid) return

    if (authCode.value) {
        const { captchaCode, inputCode } = authCode.value

        if (inputCode !== captchaCode) {
            $q.notify({
                type: 'negative',
                message: '驗證碼錯誤',
                position: 'top',
            })
            return
        }
    }

    loading.value = true
    try {
        if (username.value === 'test' && password.value === '1234') {
            localStorage.setItem('token', 'dummy-token')
            localStorage.setItem('sessionStartTime', Date.now().toString())
            $q.notify({
                type: 'positive',
                message: '登入成功',
                position: 'top',
            })
            await router.replace('/')
        } else {
            $q.notify({
                type: 'negative',
                message: '帳號或密碼錯誤',
                position: 'top',
            })
        }
    } catch (error) {
        console.error('登入失敗:', error)
        $q.notify({
            type: 'negative',
            message: '登入失敗',
            position: 'top',
        })
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    const token = localStorage.getItem('token')
    if (!token) {
        router.push('/auth/login')
    }
})
</script>

<style scoped>
.login-container {
    padding: 20px;
}
</style>
