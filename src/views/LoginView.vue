<template>
  <div class="login-container">
    <q-card class="login-card" elevated>
      <q-card-section>
        <div class="text-h6 text-center">登入系統</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="handleLogin" ref="form">
          <q-input v-model="username" label="帳號" :rules="[(val) => !!val || '請輸入帳號']" />

          <q-input
            v-model="password"
            label="密碼"
            type="password"
            :rules="[(val) => !!val || '請輸入密碼']"
          />

          <q-btn color="primary" class="full-width q-mt-md" type="submit" :loading="loading">
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
import { QForm } from 'quasar'

const router = useRouter()
const form = ref<QForm | null>(null)
const username = ref('')
const password = ref('')
const loading = ref(false)

const handleLogin = async () => {
  if (!form.value) return
  const isValid = await form.value.validate()

  if (!isValid) return

  loading.value = true
  try {
    // 這裡實作登入 API 呼叫
    // const response = await loginApi(username.value, password.value)

    // 模擬登入成功
    localStorage.setItem('token', 'dummy-token')
    router.push('/')
  } catch (error) {
    console.error('登入失敗:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.login-card {
  width: 100%;
  max-width: 400px;
}
</style>
