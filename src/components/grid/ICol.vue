<template>
  <div class="i-col">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: 'ICol'
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
import type { Split } from './config'

export type Props = {
  /** 24/(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24)*/
  span?: Split
  /**间距 */
  gutter?: string
}
const props = defineProps<Props>()
const sapn = computed(() => props.span || 'var( --i-row-span, 8)')
const gutter = computed(() => props.gutter || 'var( --i-row-gutter, 0)')
</script>

<style lang="less" scoped>
.i-col {
  width: calc(100% / 24 * v-bind(sapn));
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 calc(v-bind(gutter) / 2);
}
</style>
