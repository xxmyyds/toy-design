<template>
  <div :class="`${ns.b('group')}`">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@toy-design/toy-tools'
import { provide, reactive, toRef } from 'vue'
import { buttonGroupProps } from './button-group'

defineOptions({
  name: 'ToyButtonGroup',
})
const props = defineProps(buttonGroupProps)
const ns = useNamespace('button')
provide(
  'button-group-context',
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
  })
)
</script>
