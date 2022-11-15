# 快速上手

## 完整引入

在 `main.ts` 中引入下面内容

```ts
import { createApp } from 'vue'
import App from './App.vue'

import ToyDesign from 'toy-design'
import 'toy-design/dist/index.css'

createApp(App).use(ToyDesign).mount('#app')
```


## 按需引入

为了减小体积，只希望引入部分组件，可以使用按需引入的方式

```ts
import { createApp } from 'vue'
import App from './App.vue'

// 组件按需引入
import { ToyButton, ToyInput } from 'toy-design'

// 样式引入
import 'toy-design/dist/index.css'

createApp(App).use(ToyButton).use(ToyInput).mount('#app')
```


