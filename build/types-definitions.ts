// import path from 'path'
// import { mkdir, readFile, writeFile } from 'fs/promises'
// import * as vueCompiler from 'vue/compiler-sfc'
// import glob from 'fast-glob'
// import { Project } from 'ts-morph'
// import type { CompilerOptions, SourceFile } from 'ts-morph'
// import { excludeFiles } from './utils'
// import { cpRoot, entryRoot, pkgRoot, projRoot, toolRoot } from './contants'

// const TSCONFIG_PATH = path.resolve(projRoot, 'tsconfig.json')
// const outDir = path.resolve(projRoot, 'dist', 'types')

// // /**
// //  * fork = require( https://github.com/element-plus/element-plus/blob/dev/internal/build/src/tasks/types-definitions.ts )
// //  */

// export const generateTypesDefinitions = async () => {
//   const compilerOptions: CompilerOptions = {
//     emitDeclarationOnly: true,
//     outDir,
//     baseUrl: projRoot,
//     declaration: true,
//     skipLibCheck: true,
//     noImplicitAny: false,
//     allowJs: true,
//     allowSyntheticDefaultImports: false,
//   }
//   const project = new Project({
//     compilerOptions,
//     tsConfigFilePath: TSCONFIG_PATH,
//     skipAddingFilesFromTsConfig: true,
//   })

//   const sourceFiles = await addSourceFiles(project)
//   console.log('Added source files')

//   typeCheck(project)

//   await project.emit({
//     emitOnlyDtsFiles: true,
//   })

//   const tasks = sourceFiles.map(async (sourceFile) => {
//     const relativePath = path.relative(pkgRoot, sourceFile.getFilePath())
//     console.log(`Generating definition for file: ${relativePath}`)

//     const emitOutput = sourceFile.getEmitOutput()
//     const emitFiles = emitOutput.getOutputFiles()

//     // if (emitFiles.length === 0) throw new Error(`Emit no file: ${relativePath}`)

//     const subTasks = emitFiles.map(async (outputFile) => {
//       const filepath = outputFile.getFilePath()
//       await mkdir(path.dirname(filepath), {
//         recursive: true,
//       })

//       await writeFile(filepath, outputFile.getText(), 'utf8')

//       console.log(`Definition for file: ${relativePath} generated`)
//     })

//     await Promise.all(subTasks)
//   })

//   await Promise.all(tasks)
// }

// async function addSourceFiles(project: Project) {
//   const entryPaths = excludeFiles(
//     await glob('*.ts?(x)', {
//       cwd: entryRoot,
//       absolute: true,
//       onlyFiles: true,
//     })
//   )

//   const componentsPaths = excludeFiles(
//     await glob('**/*.{ts,vue}', {
//       cwd: cpRoot,
//       absolute: true,
//       onlyFiles: true,
//     })
//   )

//   const toolsPaths = excludeFiles(
//     await glob('**/*.ts?(x)', {
//       cwd: toolRoot,
//       absolute: true,
//       onlyFiles: true,
//     })
//   )
//   // const componentsPaths = await glob(
//   //   'packages/toy-components/button/src/button.ts'
//   // )

//   const sourceFiles: SourceFile[] = []
//   // project.addSourceFileAtPath(path.resolve(projRoot, 'typings/vite-env.d.ts'))
//   await Promise.all([
//     ...entryPaths.map(async (file) => {
//       const content = await readFile(path.resolve(projRoot, file), 'utf-8')
//       sourceFiles.push(
//         project.createSourceFile(path.resolve(projRoot, file), content, {
//           overwrite: true,
//         })
//       )
//       // const sourceFile = project.addSourceFileAtPath(file)
//       // sourceFiles.push(sourceFile)
//     }),
//     ...toolsPaths.map(async (file) => {
//       const content = await readFile(path.resolve(projRoot, file), 'utf-8')
//       sourceFiles.push(
//         project.createSourceFile(path.resolve(projRoot, file), content, {
//           overwrite: true,
//         })
//       )
//       // const sourceFile = project.addSourceFileAtPath(file)
//       // sourceFiles.push(sourceFile)
//     }),
//     ...componentsPaths.map(async (file) => {
//       if (file.endsWith('.vue')) {
//         const content = await readFile(file, 'utf-8')
//         const hasTsNoCheck = content.includes('@ts-nocheck')

//         const sfc = vueCompiler.parse(content)
//         const { script, scriptSetup } = sfc.descriptor
//         if (script || scriptSetup) {
//           let content =
//             (hasTsNoCheck ? '// @ts-nocheck\n' : '') + (script?.content ?? '')

//           if (scriptSetup) {
//             const compiled = vueCompiler.compileScript(sfc.descriptor, {
//               id: 'xxx',
//             })
//             content += compiled.content
//           }

//           const lang = scriptSetup?.lang || script?.lang || 'js'

//           const sourceFile = project.createSourceFile(
//             `${file}.${lang}`,
//             content
//           )
//           console.log(`${path.relative(process.cwd(), file)}.${lang}`)

//           sourceFiles.push(sourceFile)
//         }
//       } else {
//         const sourceFile = project.addSourceFileAtPath(file)
//         sourceFiles.push(sourceFile)
//       }
//     }),
//   ])

//   return sourceFiles
// }

// // 类型检查
// function typeCheck(project: Project) {
//   const diagnostics = project.getPreEmitDiagnostics()
//   if (diagnostics.length > 0)
//     console.log(project.formatDiagnosticsWithColorAndContext(diagnostics))
// }
// generateTypesDefinitions()
// // async function testGenType() {
// //   const compilerOptions: CompilerOptions = {
// //     emitDeclarationOnly: true,
// //     outDir: 'distEx',
// //     declaration: true,
// //     baseUrl: projRoot,
// //     preserveSymlinks: true,
// //     skipLibCheck: true,
// //     noImplicitAny: false,
// //     paths: {
// //       '@toy-design/*': ['packages/*'],
// //     },
// //   }
// //   const project = new Project({
// //     compilerOptions,
// //     tsConfigFilePath: TSCONFIG_PATH,
// //     skipAddingFilesFromTsConfig: true,
// //   })

// //   const content = await readFile(
// //     path.resolve(pkgRoot, 'toy-components/test.ts'),
// //     'utf-8'
// //   )
// //   const sourceFile = project.createSourceFile(
// //     'packages/toy-components/test.ts',
// //     content,
// //     { overwrite: true }
// //   )

// //   project.emit({
// //     emitOnlyDtsFiles: true,
// //   })

// //   console.log(sourceFile.getEmitOutput().getOutputFiles())
// // }

// // testGenType()
