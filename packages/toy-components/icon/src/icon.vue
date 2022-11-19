<template>
  <i>
    <component :is="icon" v-if="icon"></component>
    <slot v-else></slot>
  </i>
</template>

<script setup name="ToyIcon" lang="ts">
import { props } from './icon'

const prop = defineProps(props)
</script>
