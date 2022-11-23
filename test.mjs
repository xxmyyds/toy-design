import path from 'path'
import { parse } from 'vue-docgen-api'
import { normalizePath } from 'vite'

const filePath = normalizePath(
  path.resolve('./packages/toy-components/button/src/button.vue')
)
parse(filePath).then((res) => {
  console.log(res)
})
