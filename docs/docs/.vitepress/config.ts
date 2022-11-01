import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'

export default defineConfig({
  title: 'Toy Design',
  // head: [
  //   [
  //     'link',
  //     {
  //       rel: 'icon',
  //       href: 'https://tianyuhao.cn/images/fighting-design/FightingDesign.svg',
  //     },
  //   ],
  //   [
  //     'meta',
  //     {
  //       name: 'viewport',
  //       content: 'width=device-width, initial-scale=1.0,user-scalable=no',
  //     },
  //   ],
  // ],
  description,
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    nav,
    sidebar,
    // socialLinks: [
    //   {
    //     icon: 'github',
    //     link: 'https://github.com/FightingDesign/fighting-design',
    //   },
    // ],
    logo: 'https://xxmyyds-images.oss-cn-hongkong.aliyuncs.com/logo.jpeg?Expires=1667314836&OSSAccessKeyId=TMP.3KjyhCT3ox1H4P3dVfHxs5vb8nZaqrFMbYL25snPVEkscjvLd3wDvqRc8htukZmMq6VVfHyL3UrphF2FiDUnFz54VBYHAg&Signature=Sqk1KsFdeJxpeFc3p6WJnw7ucMY%3D',
  },
  //   markdown: {
  //     config: (md) => mdPlugin(md),
  //   },
})
