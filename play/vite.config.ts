import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { Plugin } from 'vite'

const test = (): Plugin => ({
  name: 'xxx',
  enforce: 'post',
})

export default defineConfig({
  plugins: [vue()],
})
