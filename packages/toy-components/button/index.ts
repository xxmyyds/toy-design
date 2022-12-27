import { withInstall, withNoopInstall } from '@toy-design/toy-tools'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const ToyButton = withInstall(Button, { ButtonGroup })
export const ToyButtonGroup = withNoopInstall(ButtonGroup)
export default Button
export * from './src/button'
