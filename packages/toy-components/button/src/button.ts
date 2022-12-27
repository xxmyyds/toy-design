import type { Component, ExtractPropTypes, PropType } from 'vue'
import type Button from './button.vue'

export const definePropType = <T>(val: any): PropType<T> => val

export const iconPropType = definePropType<string | Component>([
  String,
  Object,
  Function,
])

export const buttonProps = {
  type: {
    type: String,
    default: '',
  },
  disabled: Boolean,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  text: Boolean,
  size: {
    type: String,
    values: ['', 'default', 'small', 'large'],
    require: false,
  },
  icon: {
    type: iconPropType,
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>
