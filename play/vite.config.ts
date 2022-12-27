import VueMacros from 'unplugin-vue-macros/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '@dist': new URL('../dist', import.meta.url).pathname,
    },
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: vue(),
      },
    }),
  ],
})
