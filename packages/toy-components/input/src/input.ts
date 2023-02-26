import type { ExtractPropTypes } from 'vue'

import type Input from './input.vue'

// export const definePropType = <T>(val: any): PropType<T> => val

// export const iconPropType = definePropType<string | Component>([
//   String,
//   Object,
//   Function,
// ])

export const inputProps = {
  type: {
    type: String,
    default: '',
    require: false,
  },
  placeholder: {
    type: String,
    default: '',
    require: false,
  },
} as const

export const inputEmits = {
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
}
export type InputEmits = typeof inputEmits

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputInstance = InstanceType<typeof Input>
