import { version } from '../../../../packages/toy-design/package.json'

export const nav = [
  {
    text: '文档',
    activeMatch: '^/docs/',
    link: '/docs/install',
  },
  {
    text: '基础组件',
    activeMatch: '^/components/',
    link: '/components/button',
  },
  {
    text: 'Playground',
    link: '',
  },
  {
    text: version,
    link: 'https://www.npmjs.com/package/toy-design',
  },
]
