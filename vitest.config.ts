import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: Vue(),
        vueJsx: VueJsx(),
      },
    }),
  ],
  test: {
    globals: true, // 全局引入测试函数
    clearMocks: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
