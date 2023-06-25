<template>
  <div class="i-option" @click.stop="click" :class="{ 'i-option-pitchon': isPitchon }">
    <slot name="default">{{ label || value }}</slot>
  </div>
</template>
<script lang="ts">
export default { name: 'IOption' }
</script>
<script setup lang="ts">
import { computed, inject, onMounted, useSlots } from 'vue'
import { injectId } from './use-select'

const props = withDefaults(
  defineProps<{
    value: string | number
    label?: string
    /**选择后是否自动关闭 默认false */
    notclose?: boolean
  }>(),
  { notclose: false }
)

const slot = useSlots()
// 获取插槽上的文字作为label
const slotLabel = computed(() => {
  const sl = slot.default?.() || []
  const getSlot = (asl: any[]): string => {
    if (!asl) return ''
    const ch = asl.filter((v) => v.type.toString() !== 'Symbol(v-cmt)')[0]
    if (!ch) return ''
    if (Array.isArray(ch.children)) {
      return getSlot(ch.children)
    }
    if (typeof ch.children === 'string') {
      return ch.children
    }
    return ''
  }
  return getSlot(sl)
})
const {
  cahnge, //发送选择事件
  optionValue, //当前sleect的value值
  getValue //value和当前option的props.value相等时返回label值给select组件
} = inject(injectId, {}) as any

// label值
const isPitchon = computed(() => {
  if (props.value === optionValue?.value) {
    return true
  }
  return false
})
onMounted(() => {
  getValue &&
    getValue(() => {
      return { value: props.value, label: slotLabel.value || props.label }
    })
})

const click = () => {
  typeof cahnge === 'function' &&
    cahnge({
      value: props.value,
      label: slotLabel.value || props.label,
      notclose: props.notclose
    })
}
</script>
<style lang="less" scoped>
@import url('../../style/index.less');

.i-option {
  min-height: 2em;
  min-width: 2em;
  padding: 0.5em;
  box-sizing: border-box;
  background-color: @i-bg;
  font-size: 0.4em;
  transition: all 0.2s;
  display: block;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
  &:hover {
    background-color: @i-hover;
    .i-text-shadow(@i-bg-invert);
  }
}
.i-option-pitchon {
  color: @i-theme;
  text-shadow: 1px 1px 30px @i-theme;
}
</style>
