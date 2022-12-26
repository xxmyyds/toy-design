import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { svg } from './build/plugins/svg' // https://github.com/jpkleemans/vite-svg-loader

export default defineConfig({
  plugins: [
    vue(),
    svg({
      tsConfigFilePath: resolve(__dirname, 'tsconfig.json'),
      outDir: resolve(__dirname, 'dist', 'toy-icon'),
    }),
  ],
  build: {
    minify: true,
    emptyOutDir: false,
    outDir: resolve(__dirname, 'dist', 'toy-icon'),
    lib: {
      entry: resolve(__dirname, 'packages/toy-icon/index.ts'),
      formats: ['es'],
      fileName: () => '[name].js',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        preserveModules: true,
      },
    },
  },
})
