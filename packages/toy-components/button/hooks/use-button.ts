import type { InjectionKey } from 'vue'
import { computed, inject, provide, reactive, toRef } from 'vue'
import type { ButtonProps } from '../src/button'
import type { ButtonGroupContext } from '../types'
import type { ButtonGroupProps } from './../src/button-group'

export const buttonGroupContextKey: InjectionKey<ButtonGroupContext> = Symbol(
  'buttonGroupContextKey'
)

export const useButton = (props: ButtonProps) => {
  const buttonGroupContext = inject(buttonGroupContextKey, undefined)

  const _size = computed(() => props.size || buttonGroupContext?.size || '')

  const _type = computed(() => props.type || buttonGroupContext?.type || '')

  return {
    _size,
    _type,
  }
}

export const useButtonGroup = (props: ButtonGroupProps) => {
  provide(
    buttonGroupContextKey,
    reactive({
      size: toRef(props, 'size') as any,
      type: toRef(props, 'type') as any,
    })
  )
}
