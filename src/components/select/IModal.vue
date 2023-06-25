<template>
  <div class="i-suspension" :style="{ '--i-modal-height': isModal ? '100vh' : '0' }">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: 'IModal'
}
</script>
<script setup lang="ts">
import { isModal } from './use-select'
</script>

<style>
body {
  position: relative;
}
.i-suspension_ {
  position: fixed;
  width: 100vw;
  bottom: 0;
}
.i-suspension {
  position: absolute;
  width: 100vw;
  background: #0000005f;
  height: var(--i-modal-height);
  top: -100vh;
}
</style>
