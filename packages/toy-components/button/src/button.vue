<template>
  <button :class="[ns.b(), ns.m(props.type)]">my-button</button>
</template>

<script setup name="ToyButton" lang="ts">
import { useNamespace } from '@toy-design/toy-tools'
import { buttonProps } from './button'
const props = defineProps(buttonProps)

const ns = useNamespace('button')
</script>
