<template>
  <div class="">123</div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'

type O = { name: string }

const a = ref<O>({
  name: 'xxm',
})
console.log(a.value.name)
</script>
