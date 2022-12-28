import type { ExtractPropTypes } from 'vue'
import { buttonProps } from './button'
export const buttonGroupProps = {
  type: buttonProps.type,
  size: buttonProps.size,
} as const
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
