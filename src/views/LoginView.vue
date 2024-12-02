<template>
    <div class="flex-container">
        <q-card class="login-card" elevated>
            <q-card-section>
                <div class="text-h6 text-center text-black text-bold">登入系統</div>
            </q-card-section>
            <q-card-section>
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
                    <q-btn color="button">123</q-btn>
                    <q-btn
                        color="primary"
                        class="full-width q-mt-md text-black"
                        type="submit"
                        :loading="loading"
                    >
                        登入
                    </q-btn>
                </q-form>
            </q-card-section>
        </q-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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

        // 校验验证码
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
            $q.notify({
                type: 'positive',
                message: '登入成功',
                position: 'top',
            })
            router.push('/')
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
</script>

<style scoped>
/* 外层容器使用 Flexbox */
.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

/* 登录卡片的样式 */
.login-card {
    width: 100%;
    max-width: 400px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 可选：设置阴影效果 */
}
</style>
