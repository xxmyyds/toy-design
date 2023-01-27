<template>
  <div :class="ns.b()">
    <input type="text" />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@toy-design/toy-tools'

defineOptions({
  name: 'ToyInput',
})

const ns = useNamespace('input')

// import {} from 'vue'
</script>
