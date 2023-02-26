import { definePropType } from '@toy-design/toy-tools/hooks/use-props'
import type { ExtractPropTypes } from 'vue'

import type Input from './input.vue'

export const inputProps = {
  modelValue: {
    type: definePropType<string | number | null | undefined>([
      String,
      Number,
      Object,
    ]),
    default: '',
  },
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
  disabled: {
    type: Boolean,
    default: false,
    require: false,
  },
} as const

export const inputEmits = {
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  input: (value: string) => value,
  change: (value: string) => value,
  'update:modelValue': (value: string) => value,
}
export type InputEmits = typeof inputEmits

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputInstance = InstanceType<typeof Input>
