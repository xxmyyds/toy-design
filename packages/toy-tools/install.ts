import type { App, DefineComponent, Plugin } from 'vue'

import version from './version'

export type InstallType<T> = T & Plugin

export function withInstall<T, E extends Record<string, any>>(
  component: T,
  extra?: E
) {
  ;(component as InstallType<T>).install = (app: App): void => {
    for (const comp of [component, ...Object.values(extra ?? {})])
      app.component(comp.name, comp)
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra))
      (component as any)[key] = comp
  }

  return component as InstallType<T> & E
}

export function withNoopInstall<T>(component: T) {
  ;(component as InstallType<T>).install = () => {}

  return component as InstallType<T>
}

export function makeInstall<T>(components: T[]) {
  const installTargets: App[] = []

  const install = (app: App): void => {
    if (installTargets.includes(app)) return
    installTargets.push(app)
    ;(components as DefineComponent[]).forEach((component) => {
      const { name } = component
      registerComponent(app, name, component)
    })
  }
  return {
    version,
    install,
  }
}

function registerComponent(
  app: App,
  name: string,
  component: DefineComponent
): void {
  const registered = app.component(name)
  if (!registered) app.component(name, component)
}
