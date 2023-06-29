<template>
  <i-button>按钮</i-button>
  <i-button @click="count++">计数{{ count }}</i-button>
  count:{{ count }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
