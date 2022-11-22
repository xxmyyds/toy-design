<template>
  <button
    :class="[
      ns.b(),
      ns.m(props.type),
      ns.m(props.size),
      ns.is('disabled', props.disabled),
      ns.is('plain', props.plain),
      ns.is('round', props.round),
      ns.is('circle', props.circle),
      ns.is('text', props.text),
    ]"
    :disabled="props.disabled"
    :aria-disabled="props.disabled"
  >
    <toy-icon v-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </toy-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script setup name="ToyButton" lang="ts">
import { useNamespace } from '@toy-design/toy-tools'
import { useSlots } from 'vue'
import { ToyIcon } from '../../icon'
import { buttonProps } from './button'
const props = defineProps(buttonProps)
const ns = useNamespace('button')
// const slots = useSlots()
</script>
