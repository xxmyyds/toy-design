import type { Component, PropType, VNode } from 'vue'

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
}
