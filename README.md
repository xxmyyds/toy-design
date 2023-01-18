# toy-design
基于vue3的组件库,良好支持Typescript，Vetur、Volar插件

## 使用

使用快速的，节省磁盘空间的包管理工具 [pnpm](https://pnpm.io/zh) 进行安装

```shell
pnpm i --save-dev toy-design
```

在 `main.ts` 中引入下面内容

```ts
import { createApp } from 'vue'
import ToyDesign from 'toy-design'
import App from './App.vue'

import 'toy-design/dist/index.css'

createApp(App).use(ToyDesign).mount('#app')
```
