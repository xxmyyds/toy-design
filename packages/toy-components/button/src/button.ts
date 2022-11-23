import type { Component, ExtractPropTypes, PropType, VNode } from 'vue'
import type Button from './button.vue'

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
    type: Object as PropType<VNode | Component>,
  },
} as const

export type Props = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>
