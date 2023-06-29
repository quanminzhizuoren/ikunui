<template>
  <i-switch v-model="value"></i-switch>
  <span>value:{{ value }}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>
