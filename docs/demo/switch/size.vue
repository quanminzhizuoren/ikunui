<template>
  <i-switch v-model="value" size="100px"></i-switch>
  <i-switch v-model="value" size="40px"></i-switch>
  <i-switch v-model="value" size="20px"></i-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>
