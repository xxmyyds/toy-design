import Theme from 'vitepress/theme'

import ToyDesign from '../../../../dist/es'

import { h } from 'vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.use(ToyDesign)
  },
}
