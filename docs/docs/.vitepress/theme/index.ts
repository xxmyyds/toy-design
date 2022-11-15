import Theme from 'vitepress/theme'
import vpDemo from './components/vp-demo.vue'
import ToyDesign from '../../../../dist/es'
import '../../../../dist/dist/index.css'

import { h } from 'vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.use(ToyDesign)
    app.component('vp-demo', vpDemo)
  },
}
