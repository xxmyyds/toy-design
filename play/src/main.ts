import { createApp } from 'vue'
import App from './App.vue'

// 开发阶段引入
// import ToyDesign from '../../packages/toy-design/index'
// import '../../packages/toy-theme/index.scss'
// import './index.scss'

// 打包阶段引入
import { ToyButton } from '@dist/es'
import '@dist/dist/index.css'

createApp(App).use(ToyDesign).mount('#play')
