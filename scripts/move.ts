import { copyFileSync } from 'fs'

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
