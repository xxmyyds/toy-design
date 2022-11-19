import { copyFileSync } from 'fs'
import { version } from '../packages/toy-icons/package.json'

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
    { entry: './packages/toy-icons/README.md', outDir: 'dist-icons/README.md' },
    {
      entry: './packages/toy-icons/package.json',
      outDir: 'dist-icons/package.json',
    },
    { entry: './LICENSE', outDir: 'dist-icons/LICENSE' },
  ] as const

  files.forEach((item): void => {
    copyFileSync(item.entry, item.outDir)
  })

  console.warn('\n' + `Toy Icons ${version} 版本打包成功 🎉🎉🎉` + '\n')
}
