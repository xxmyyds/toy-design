import type { Component, ExtractPropTypes } from 'vue'
import { ToyIconLoading } from '@xxm7/toy-icon'
import { definePropType } from '@toy-design/toy-tools/hooks/use-props'
import type Button from './button.vue'

export const iconPropType = definePropType<string | Component>([
  String,
  Object,
  Function,
])

export const buttonProps = {
  type: {
    type: String,
    default: '',
    require: false,
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
  loadingIcon: {
    type: iconPropType,
    default: () => ToyIconLoading as any,
  },
  loading: Boolean,
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>
