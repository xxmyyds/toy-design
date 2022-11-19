import type { Component, PropType, VNode } from 'vue'

export const props = {
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null,
  },
}
