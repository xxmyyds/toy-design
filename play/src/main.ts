import { createApp } from 'vue'
import App from './App.vue'
// import { TButton } from 'toy-design'

// 开发阶段引入
// import ToyDesign from 'toy-design'

// 打包阶段引入
import ToyDesign from '@dist/es'

createApp(App).use(ToyDesign).mount('#play')
