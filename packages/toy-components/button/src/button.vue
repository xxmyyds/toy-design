<template>
  <button
    :class="[
      ns.b(),
      ns.m(props.type),
      ns.is('disabled', props.disabled),
      ns.is('plain', props.plain),
    ]"
    :disabled="props.disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup name="ToyButton" lang="ts">
import { useNamespace } from '@toy-design/toy-tools'
import { buttonProps } from './button'
const props = defineProps(buttonProps)
const ns = useNamespace('button')
</script>
