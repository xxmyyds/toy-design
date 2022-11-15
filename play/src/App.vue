<template>
  <div class="">
    按钮
    <toy-button ref="btn">default</toy-button>
    <toy-button type="primary">primary</toy-button>
    <toy-button type="success">success</toy-button>
    <toy-button type="danger">danger</toy-button>
    <toy-button type="info">info</toy-button>
    <toy-button type="warning">warning</toy-button>
  </div>
  <div style="margin: 10px 0">
    禁止
    <toy-button disabled>default</toy-button>
    <toy-button disabled type="primary">primary</toy-button>
    <toy-button disabled type="success">success</toy-button>
    <toy-button disabled type="danger">danger</toy-button>
    <toy-button disabled type="info">info</toy-button>
    <toy-button disabled type="warning">warning</toy-button>
  </div>
  <div style="margin: 10px 0">
    plain
    <toy-button plain>default</toy-button>
    <toy-button type="primary" :plain="true">primary</toy-button>
    <toy-button plain type="success">success</toy-button>
    <toy-button plain type="danger">danger</toy-button>
    <toy-button plain type="info">info</toy-button>
    <toy-button plain type="warning">warning</toy-button>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'

const btn = ref(null)
onMounted(() => {
  console.log(btn.value)
})
</script>
