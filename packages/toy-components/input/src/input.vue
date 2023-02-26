<template>
  <div :class="[ns.b(), ns.is('focus', focused), ns.is('disabled', disabled)]">
    <input
      :class="ns.e('inner')"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@toy-design/toy-tools'
import { ref } from 'vue'
import { inputEmits, inputProps } from './input'

defineOptions({
  name: 'ToyInput',
})

defineProps(inputProps)
const emit = defineEmits(inputEmits)

const focused = ref(false)
const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  focused.value = false
  emit('blur', event)
}

const handleInput = (event: Event) => {
  const { value } = event.target as any
  emit('update:modelValue', value)
  emit('input', value)
}

const handleChange = (event: Event) => {
  emit('change', (event.target as any).value)
}

const ns = useNamespace('input')
</script>
