import {fileURLToPath, URL} from 'node:url'
import Components from 'unplugin-vue-components/vite';

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        Components({
            extensions: ['vue'],
            include: [/\.vue$/,/\.vue\?vue/],
            dts: 'src/components.d.ts',
            dirs: ['src/**/*', 'node_modules/primevue/**/*','node_modules/primeicons/**/*' ],
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
