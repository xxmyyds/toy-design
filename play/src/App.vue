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
    text
    <toy-button text>default</toy-button>
    <toy-button text type="primary">primary</toy-button>
    <toy-button text type="success">success</toy-button>
    <toy-button text type="danger">danger</toy-button>
    <toy-button text type="info">info</toy-button>
    <toy-button text type="warning">warning</toy-button>
  </div>
  <div style="margin: 10px 0">
    text
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
  Icon
  <toy-button type="primary" :icon="ToyIconAdd" circle />
  <toy-button type="success" size="small" :icon="ToyIconIosRemove" circle />
  <toy-button type="danger" size="large" :icon="ToyIconFavorite" circle />
  <toy-button :icon="ToyIconLoading"> xxmyyds </toy-button>

  <toy-button type="primary" loading>loading</toy-button>

  <br />
  按钮组
  <toy-button-group size="mini" type="primary">
    <toy-button :icon="ToyIconAdd">xxmyyds</toy-button>
    <toy-button :icon="ToyIconIosRemove" />
    <toy-button type="danger" :icon="ToyIconAlbums" />
  </toy-button-group>

  输入框
  <toy-input style="width: 200px" placeholder="please input"></toy-input>
  <toy-input
    style="width: 200px"
    disabled
    placeholder="please input"
  ></toy-input>

  <toy-input
    v-model="value"
    style="width: 200px"
    placeholder="please input"
  ></toy-input>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import {
  ToyIconAdd,
  ToyIconAlbums,
  ToyIconFavorite,
  ToyIconIosRemove,
  ToyIconLoading,
} from '@xxm7/toy-icon'

const btn = ref(null)

const value = ref('')

onMounted(() => {
  console.log(btn.value)
})
</script>
