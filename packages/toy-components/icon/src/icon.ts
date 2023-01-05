import type { Component, PropType } from 'vue'

export const definePropType = <T>(val: any): PropType<T> => val

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
