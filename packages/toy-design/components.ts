import type { DefineComponent } from 'vue'
import * as components from '@toy-design/toy-components'
import { makeInstall } from '@toy-design/toy-tools'

const ToyDesign = makeInstall(Object.values(components) as DefineComponent[])
export default ToyDesign
