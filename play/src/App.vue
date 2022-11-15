<template>
  <div class="">
    按钮
    <toy-button>default</toy-button>
    <toy-button type="primary">primary</toy-button>
    <toy-button type="success">success</toy-button>
    <toy-button type="danger">danger</toy-button>
    <toy-button type="info">info</toy-button>
    <toy-button type="warning">warning</toy-button>
  </div>
  <div style="margin: 10px 0">
    禁止
    <toy-button :disabled="disabled">default</toy-button>
    <toy-button disabled type="primary">primary</toy-button>
    <toy-button disabled type="success">success</toy-button>
    <toy-button disabled type="danger">danger</toy-button>
    <toy-button disabled type="info">info</toy-button>
    <toy-button disabled type="warning">warning</toy-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>
