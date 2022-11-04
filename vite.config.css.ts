import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist/dist'),
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(__dirname, 'packages/toy-theme/src/index.scss'),
      output: {
        assetFileNames: '[name].[ext]', // 取消文件名 hash 值 https://rollupjs.org/guide/en/#outputassetfilenames
      },
    },
  },
})
