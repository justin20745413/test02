import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue({ template: { transformAssetUrls } }), vueDevTools(), quasar()],
    css: {
        preprocessorOptions: {
            scss: {
                // 如果需要导入全局变量或样式文件
                additionalData: `@import "@/style/quasar.variables.scss";`,
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
