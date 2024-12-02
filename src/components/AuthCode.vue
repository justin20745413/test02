<template>
    <div class="auth-code">
        <q-input
            v-model="inputCode"
            label="請輸入驗證碼"
            filled
            class="q-mb-md"
            :rules="[(val) => !!val || '請輸入驗證碼']"
            lazy-rules
        >
            <template v-slot:append>
                <q-btn flat size="sm" @click="generateCaptcha" class="text-primary"> 更新 </q-btn>
            </template>
        </q-input>
        <canvas ref="canvas" class="captcha-canvas"></canvas>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineExpose } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
const inputCode = ref('')
const captchaCode = ref('')

const generateCaptchaCode = () => {
    let code = ''
    for (let i = 0; i < 4; i++) {
        code += Math.floor(Math.random() * 10)
    }
    return code
}

const drawCaptcha = (code: string) => {
    if (!canvas.value) return
    const ctx = canvas.value.getContext('2d')
    if (!ctx) return

    canvas.value.width = 120
    canvas.value.height = 40

    ctx.fillStyle = '#f2f2f2'
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)

    for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.moveTo(Math.random() * canvas.value.width, Math.random() * canvas.value.height)
        ctx.lineTo(Math.random() * canvas.value.width, Math.random() * canvas.value.height)
        ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255,
        )}, ${Math.floor(Math.random() * 255)}, 0.7)`
        ctx.lineWidth = 1
        ctx.stroke()
    }

    ctx.font = '24px Arial'
    ctx.fillStyle = '#333'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    for (let i = 0; i < code.length; i++) {
        const x = (canvas.value.width / (code.length + 1)) * (i + 1)
        const y = canvas.value.height / 2
        const angle = (Math.random() - 0.5) * 30
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate((angle * Math.PI) / 180)
        ctx.fillText(code[i], 0, 0)
        ctx.restore()
    }
}

const generateCaptcha = () => {
    captchaCode.value = generateCaptchaCode()
    drawCaptcha(captchaCode.value)
}

onMounted(() => {
    generateCaptcha()
})

defineExpose({
    inputCode,
    captchaCode,
    generateCaptcha,
})
</script>

<style scoped>
.auth-code {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.captcha-canvas {
    margin-top: 8px;
    border: 1px solid #ccc;
}
</style>
