import type { ExtractPropTypes } from 'vue'
import { buttonProps } from './button'
export const buttonGroupProps = {
  type: buttonProps.type,
  size: buttonProps.size,
}
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
