import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { QuasarResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue({ template: { transformAssetUrls } }),
        vueDevTools(),
        quasar(),
        AutoImport({
            imports: ['vue', 'vue-router'], // 自动导入 Vue 的 API，如 ref, reactive
            dts: 'src/auto-imports.d.ts', // 生成的自动导入类型声明文件
        }),
        Components({
            resolvers: [QuasarResolver()], // 自动导入 Quasar 和其他组件
            dts: 'src/components.d.ts', // 生成的自动引入类型声明文件
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
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
