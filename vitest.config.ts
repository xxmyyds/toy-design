import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true, // 全局引入测试函数
  },
})
