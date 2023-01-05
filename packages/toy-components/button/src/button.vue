<template>
  <button
    :class="[
      ns.b(),
      ns.m(_type),
      ns.m(_size),
      ns.is('disabled', disabled),
      ns.is('loading', loading),
      ns.is('plain', plain),
      ns.is('round', round),
      ns.is('circle', circle),
      ns.is('text', text),
    ]"
    :disabled="disabled"
    :aria-disabled="disabled"
  >
    <template v-if="loading">
      <toy-icon :class="ns.is('loading')" :icon="ToyIconLoading" />
    </template>
    <toy-icon v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </toy-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from '@toy-design/toy-tools'
import { ToyIconLoading } from '@xxm7/toy-icon'
import { useButton } from '../hooks/use-button'
import ToyIcon from '../../icon/src/icon.vue'
import { buttonProps } from './button'

defineOptions({
  name: 'ToyButton',
})
const props = defineProps(buttonProps)
const ns = useNamespace('button')
const { _size, _type } = useButton(props)
</script>
