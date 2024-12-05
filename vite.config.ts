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
            imports: ['vue', 'vue-router'],
            dts: 'src/auto-imports.d.ts',
        }),
        Components({
            resolvers: [QuasarResolver()],
            dts: 'src/components.d.ts',
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/style/quasar.variables.scss";@import "@/style/dark-mode.scss";`,
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
