import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

export function normalize() {
  const content = JSON.parse(
    readFileSync(resolve('./dist/package.json'), {
      encoding: 'utf-8',
    })
  )
  delete content.dependencies

  const version = content.version

  writeFileSync('./dist/package.json', JSON.stringify(content))

  console.warn('\n' + `Toy Design ${version} 版本打包成功 🎉🎉🎉` + '\n')
}
