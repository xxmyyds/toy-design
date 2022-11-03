import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@dist': new URL('../dist', import.meta.url).pathname,
    },
  },
  plugins: [vue(), vueSetupExtend()],
})
