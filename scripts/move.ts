import { copyFileSync } from 'fs'

export function move() {
  const files = [
    { entry: './README.md', outDir: 'dist/README.md' },
    {
      entry: './packages/toy-design/package.json',
      outDir: 'dist/package.json',
    },
    { entry: './LICENSE', outDir: 'dist/LICENSE' },
    { entry: './helper/vetur/attributes.json', outDir: 'dist/attributes.json' },
    { entry: './helper/vetur/tags.json', outDir: 'dist/tags.json' },
    { entry: './typings/global.d.ts', outDir: 'dist/global.d.ts' },
  ] as const

  files.forEach((item): void => {
    copyFileSync(item.entry, item.outDir)
  })
}
