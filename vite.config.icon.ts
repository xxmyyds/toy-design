import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader' // https://github.com/jpkleemans/vite-svg-loader
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import { moveIcon } from './scripts/move'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true, // 是否生成类型声明入口
      cleanVueFileName: true, // 是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
      copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
      include: ['./packages/toy-icons'], // 手动设置包含路径的 glob
      afterBuild: (): void => {
        moveIcon()
      },
    }),
    svgLoader(),
  ],
  build: {
    minify: true,
    emptyOutDir: false,
    outDir: resolve(__dirname, 'dist-icons'),
    lib: {
      entry: resolve(__dirname, 'packages/toy-icons/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        preserveModules: true,
      },
    },
  },
})
