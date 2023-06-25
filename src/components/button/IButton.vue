<template>
  <button
    class="i-button"
    :title="title"
    :style="{
      '--i-buttom-size': `var(--i-size,${ISIZE[size] || size})`
    }"
    :disabled="isDisabled"
    @click="click"
  >
    <div class="i-button-content">
      <slot />
    </div>
    <div class="i-button-dot"></div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ISIZE, type ISIZEType } from '../../config'
const props = withDefaults(
  defineProps<{
    title?: string
    /**
     * 按钮大小
     * @default large
     */
    size?: ISIZEType
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean
    /**按钮防抖 毫秒 `true=500ms`*/
    debounce?: boolean | number
  }>(),
  { size: 'default', disabled: false }
)
const emit = defineEmits<{ (e: 'click'): void }>()

let isClick = true
const click = () => {
  if (props.debounce) {
    if (!isClick) return
    isClick = false
    emit('click')
    const time = typeof props.debounce === 'boolean' ? 500 : Number(props.debounce)
    setTimeout(() => {
      isClick = true
    }, time)
    return
  }
  emit('click')
}

const isDisabled = computed(() => props.disabled)
</script>

<style lang="less" scoped>
@import url('../../style/theme.less');
.i-button {
  --i-button-bg: @i-theme;
  cursor: pointer;
  outline: none;
  background: none;
  border: 0;
  color: red;
  font-size: calc(var(--i-buttom-size) / 2);
  height: 2em;
  padding: 0.2em;
  box-sizing: border-box;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  min-width: 1em;
  background: none;

  &-content {
    background-color: var(--i-button-bg);
    border-radius: 3px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.67em;
    font-weight: 10;
    padding: 0 1em;
    color: #fff;
    white-space: nowrap;
  }
  &-dot {
    position: absolute;
  }
}

.i-button[disabled] {
  --i-button-bg: @i-disabled;
  cursor: not-allowed;
}
</style>
