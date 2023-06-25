<template>
  <div
    class="i-input"
    :style="{
      '--i-input-size': `var(--i-size,${ISIZE[size] || size})`
    }"
  >
    <div class="i-input-main" :class="{ 'i-input_solid': underline, 'i-input-focus': isFocus }">
      <div class="i-input-slot" v-if="$slots.prefix || label">
        <slot name="prefix">{{ label }} <span class="i-input-label"> : </span></slot>
      </div>
      <input
        ref="inputRef"
        class="i-input-content"
        type="text"
        :value="modelValue"
        @input="input($event.target)"
        @mouseup="mouseup"
        @focus="focus"
        @blur="blur"
        v-bind="$attrs"
      />
      <div class="i-input-slot" v-if="$slots.suffix || clearable">
        <slot name="suffix">
          <close v-if="clearable && modelValue" class="i-input-close" @click="onClearable" />
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'IInput',
  inheritAttrs: false
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { ISIZE, type ISIZEType } from '../../config'
import close from '../../icon/close.vue'
type Props = {
  /**绑定input value */
  modelValue?: string
  /**下划线样式 */
  underline?: boolean
  /**显示清除按钮 */
  clearable?: boolean
  /**标签名称 */
  label?: string

  size?: ISIZEType
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  underline: false,
  clearable: false,
  size: 'default'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const input = (target: any) => {
  target && emit('update:modelValue', target?.value || '')
}

const inputRef = ref<HTMLInputElement>()
const isFocus = ref(false)

const mouseup = () => {
  console.log('选择文本:', window.getSelection()?.toString())
}
// 获取焦点时
const focus = () => {
  console.log('focus')
  isFocus.value = true
}
// 失去焦点时
const blur = () => {
  console.log('blur')
  isFocus.value = false
}
// 清除
const onClearable = () => {
  emit('update:modelValue', '')
  inputRef.value?.focus()
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
