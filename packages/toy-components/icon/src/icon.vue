<template>
  <i :class="ns.b()">
    <component :is="icon" v-if="icon"></component>
    <slot v-else></slot>
  </i>
</template>

<script setup name="ToyIcon" lang="ts">
import { useNamespace } from '@toy-design/toy-tools'
import { props } from './icon'
const ns = useNamespace('icon')
defineProps(props)
</script>
