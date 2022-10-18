import type { App, Plugin } from 'vue'

export function withInstall(component: Plugin) {
  component.install = (app: App): void => {
    const { name } = component
    app.component(name, component)
  }
  return component
}
