import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {visualizer} from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig((option) => {
  console.log(option, 222222222);
  const env = loadEnv(option.mode, process.cwd(), '')
  console.log(env, 333333333);
  return{
    base:'/',
    plugins: [vue(), vueJsx(),visualizer({gzipSize :true,brotliSize:true})],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
  }
})
