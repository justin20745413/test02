<template>
    <div class="register-container">
        <q-form @submit="handleRegister" ref="form">
            <q-input
                v-model="username"
                label="用戶名"
                filled
                class="q-mb-md"
                :rules="[(val) => !!val || '請輸入用戶名']"
                lazy-rules
            >
                <template v-slot:prepend>
                    <q-icon name="person" />
                </template>
            </q-input>

            <q-input
                v-model="account"
                label="帳號"
                filled
                class="q-mb-md"
                :rules="[(val) => !!val || '請輸入帳號']"
                lazy-rules
            >
                <template v-slot:prepend>
                    <q-icon name="email" />
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

            <q-btn
                color="warning"
                class="full-width q-mt-lg"
                type="submit"
                :loading="loading"
                unelevated
            >
                註冊
            </q-btn>
        </q-form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { QForm, useQuasar } from 'quasar'

const router = useRouter()
const $q = useQuasar()
const form = ref<QForm | null>(null)
const username = ref('')
const account = ref('')
const password = ref('')
const loading = ref(false)
const isPwd = ref(true)

const handleRegister = async () => {
    if (!form.value) return
    const isValid = await form.value.validate()

    if (!isValid) return

    loading.value = true
    try {
        // 這裡應該是實際的註冊 API 調用
        // 目前使用模擬的成功回應
        await new Promise((resolve) => setTimeout(resolve, 1000)) // 模擬 API 延遲

        $q.notify({
            type: 'positive',
            message: '註冊成功',
            position: 'top',
        })
        router.push('/auth/login')
    } catch (error) {
        console.error('註冊失敗:', error)
        $q.notify({
            type: 'negative',
            message: '註冊失敗',
            position: 'top',
        })
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
.register-container {
    padding: 20px;
}
</style>
