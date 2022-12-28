<template>
  <div :class="`${ns.b('group')}`">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@toy-design/toy-tools'
import { useButtonGroup } from '../hooks/use-button'
import { buttonGroupProps } from './button-group'

defineOptions({
  name: 'ToyButtonGroup',
})
const props = defineProps(buttonGroupProps)
const ns = useNamespace('button')
useButtonGroup(props)
</script>
