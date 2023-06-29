<template>
  <i-select v-model="value" border>
    <i-option value="1">唱！</i-option>
    <i-option value="2">跳 !</i-option>
    <i-option value="3">rep</i-option>
    <i-option value="4">篮球</i-option>
  </i-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('1')
</script>
