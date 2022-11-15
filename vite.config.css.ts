import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist/dist'),
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(__dirname, 'packages/toy-theme/index.scss'),
      output: {
        assetFileNames: '[name].[ext]', // https://rollupjs.org/guide/en/#outputassetfilenames
      },
    },
  },
})
