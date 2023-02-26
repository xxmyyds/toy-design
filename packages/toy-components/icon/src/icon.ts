import { definePropType } from '@toy-design/toy-tools/hooks/use-props'
import type { Component } from 'vue'

export const iconPropType = definePropType<string | Component>([
  String,
  Object,
  Function,
])

export const props = {
  icon: {
    type: iconPropType,
  },
}
