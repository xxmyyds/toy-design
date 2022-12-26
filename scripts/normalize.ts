import { readFileSync, writeFileSync } from 'fs'

import { resolve } from 'path'

export function normalize() {
  let content
  // package.json
  content = JSON.parse(
    readFileSync(resolve('./dist/package.json'), {
      encoding: 'utf-8',
    })
  )
  delete content.dependencies

  const version = content.version

  writeFileSync('./dist/package.json', JSON.stringify(content))

  // global.d.ts
  content = JSON.parse(
    readFileSync(resolve('./dist/global.d.ts'), {
      encoding: 'utf-8',
    })
  )
  content = content.replace('// @ts-nocheck', '')

  writeFileSync('./dist/package.json', JSON.stringify(content))

  console.warn('\n' + `Toy Design ${version} 版本打包成功 🎉🎉🎉` + '\n')
}
