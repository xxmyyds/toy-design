<template>
  <div :class="[ns.b(), ns.is('focus', focused)]">
    <input
      :class="ns.e('inner')"
      :type="type"
      :placeholder="placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
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

const ns = useNamespace('input')

// import {} from 'vue'
</script>
