import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import VueMacros from 'unplugin-vue-macros/vite'
import { move } from './scripts/move'
import { normalize } from './scripts/normalize'

export default defineConfig({
  resolve: {
    alias: {
      '@toy-design': resolve(__dirname, 'packages'),
    },
  },
  plugins: [
    dts({
      skipDiagnostics: false, // 是否跳过类型诊断
      // aliasesExclude: ['./alert.vue'], // 设置在转换别名时哪些路径需要排除
      staticImport: true, // 是否将动态引入转换为静态
      outputDir: ['./dist/types'], // 可以指定一个数组来输出到多个目录中
      // insertTypesEntry: true, // 是否生成类型声明入口
      cleanVueFileName: false, // 是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
      include: ['packages/toy-*'],
      // 构建后回调钩子
      afterBuild: (): void => {
        move()
        normalize()
      },
    }),

    VueMacros({
      plugins: {
        vue: vue(),
      },
    }),
  ],
  build: {
    target: 'modules', // 这是指 支持原生 ES 模块、原生 ESM 动态导入
    minify: true, // 压缩代码
    chunkSizeWarningLimit: 2, // 打包的组件超过 2kb 警告提示
    reportCompressedSize: true, // 启用 gzip 压缩大小报告
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'packages/toy-design/index.ts'), // 打包入口
      name: 'ToyDesign',
    },
    rollupOptions: {
      external: ['vue', '@xxm7/toy-icon'],
      input: resolve(__dirname, 'packages/toy-design/index.ts'),
      output: [
        {
          format: 'es', // 打包模式 https://rollupjs.org/guide/en/#outputformat
          exports: 'named', // 导出模式 https://rollupjs.org/guide/en/#outputexports
          dir: 'dist/es', // 输出路径 https://rollupjs.org/guide/en/#outputdir
          sourcemap: false, // https://rollupjs.org/guide/en/#outputsourcemap
          entryFileNames: 'index.js', // 输出后的文件名 https://rollupjs.org/guide/en/#outputentryfilenames
          chunkFileNames: '[name].js', // 输出的 chunk文件名 https://rollupjs.org/guide/en/#outputchunkfilenames
          assetFileNames: '[name].[ext]', // 输出资产文件名 https://rollupjs.org/guide/en/#outputassetfilenames
          namespaceToStringTag: true, // https://rollupjs.org/guide/en/#outputnamespacetostringtag
          inlineDynamicImports: false, // https://rollupjs.org/guide/en/#outputinlinedynamicimports
          manualChunks: undefined,
          preserveModules: true, // https://rollupjs.org/guide/en/#outputpreservemodules
        },
        {
          format: 'cjs',
          exports: 'named',
          dir: 'dist/lib',
          sourcemap: false,
          entryFileNames: 'index.js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          namespaceToStringTag: true,
          inlineDynamicImports: false,
          manualChunks: undefined,
          preserveModules: true,
        },
      ],
    },
  },
})
