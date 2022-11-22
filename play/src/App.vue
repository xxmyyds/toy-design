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
  <div style="margin: 10px 0">
    <toy-button text>default</toy-button>
    <toy-button text type="primary">primary</toy-button>
    <toy-button text type="success">success</toy-button>
    <toy-button text type="danger">danger</toy-button>
    <toy-button text type="info">info</toy-button>
    <toy-button text type="warning">warning</toy-button>
  </div>
  <div style="margin: 10px 0">
    <toy-button disabled text>default</toy-button>
    <toy-button disabled text type="primary">primary</toy-button>
    <toy-button disabled text type="success">success</toy-button>
    <toy-button disabled text type="danger">danger</toy-button>
    <toy-button disabled text type="info">info</toy-button>
    <toy-button disabled text type="warning">warning</toy-button>
  </div>
  <div style="margin: 10px 0">
    size
    <toy-button disabled size="small">ds</toy-button>
    <toy-button disabled type="primary">ps</toy-button>
    <toy-button disabled size="large" type="success">su</toy-button>
    <toy-button size="small" type="danger">danger</toy-button>
    <toy-button size="small" type="info">info</toy-button>
    <toy-button size="small" type="warning">warning</toy-button>
  </div>
  <toy-icon>
    <toy-icon-add></toy-icon-add>
  </toy-icon>
  <toy-icon :icon="ToyIconAdd"> </toy-icon>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { ToyIconAdd } from '../../dist-icon'

const btn = ref(null)
onMounted(() => {
  console.log(btn.value)
})
</script>
