<template>
  <div class="i-row" :style="{ '--i-row-span': span, '--i-row-gutter': gutter }">
    <slot />
  </div>
</template>
<script lang="ts">
export default { name: 'IRow' }
</script>
<script setup lang="ts">
import type { Split } from './config'

withDefaults(
  defineProps<{
    /**
     * 24/(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24)
     * @default 8
     */
    span?: Split

    /**ICol与ICol的间距 */
    gutter?: string
  }>(),
  { span: 8, gutter: '0' }
)
</script>

<style lang="less" scoped>
.i-row {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
}
</style>
