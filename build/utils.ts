export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', '__tests__', 'mock', 'dist']
  return files.filter(
    (path: any) => !excludes.some((exclude: any) => path.includes(exclude))
  )
}
