import { copyFileSync } from 'fs'
import { version } from '../packages/toy-design/package.json'

export function move() {
  const files = [
    { entry: './README.md', outDir: 'dist/README.md' },
    {
      entry: './packages/toy-design/package.json',
      outDir: 'dist/package.json',
    },
    { entry: './LICENSE', outDir: 'dist/LICENSE' },
  ] as const

  files.forEach((item): void => {
    copyFileSync(item.entry, item.outDir)
  })

  console.warn('\n' + `Toy Design ${version} 版本打包成功 🎉🎉🎉` + '\n')
}
