import { copyFileSync } from 'fs'
import { version } from '../packages/toy-icon/package.json'

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
}

export function moveIcon() {
  const files = [
    { entry: './packages/toy-icon/README.md', outDir: 'dist-icon/README.md' },
    {
      entry: './packages/toy-icon/package.json',
      outDir: 'dist-icon/package.json',
    },
    { entry: './LICENSE', outDir: 'dist-icon/LICENSE' },
  ] as const

  files.forEach((item): void => {
    copyFileSync(item.entry, item.outDir)
  })

  console.warn('\n' + `Toy Icons ${version} 版本打包成功 🎉🎉🎉` + '\n')
}
