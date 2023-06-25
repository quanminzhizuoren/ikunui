<template>
  <div
    class="i-switch"
    :style="{
      '--i-switch-size': `var(--i-size,${ISIZE[size] || size})`
    }"
  >
    <div class="i-switch-main" @click="click">
      <!-- 边框 -->
      <div class="i-switch-content" :class="{ switch: props.modelValue }">
        <!-- 圆点 -->
        <div class="i-switch-content-dot">
          <div class="i-switch-content-dot-_">
            <div class="i-switch-content-dot-content">
              <Transition name="i-switch" mode="out-in">
                <!-- 第一第二个选项插槽 -->
                <div class="i-switch-content-dot-content-slot">
                  <div class="switch-slot">
                    <slot name="off"></slot>
                  </div>
                  <div class="switch-slot">
                    <slot name="no"></slot>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ISwitch'
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { ISIZE, type ISIZEType } from '../../config'
type Item = number | boolean | string

const props = withDefaults(
  defineProps<{
    /**
     * 默认初始选择false
     * @default false
     */
    modelValue?: boolean | Item
    /**
     * 开关大小（宽度） 像素值 @default 'small'
     */
    size?: ISIZEType
    /**
     * 关闭时颜色
     */
    offColor?: string
    /**
     * 打开时颜色
     */
    onColor?: string
  }>(),
  { modelValue: false, size: 'default' }
)
const emit = defineEmits(['click', 'update:modelValue'])

// 点击选切换状态
const click = () => {
  const value = !props.modelValue
  // 发送点击事件
  emit('click', value)
  //  双向绑定事件
  emit('update:modelValue', value)
}

const offColor = computed(() => props.offColor || '') //关闭时颜色
const onColor = computed(() => props.onColor || '') //打开时颜色
</script>
<style lang="less" scoped>
@import url('../../style/theme.less');
// 默认样式
.i-switch {
  width: 1em;
  height: 1em;
  font-size: var(--i-switch-size);
  display: flex;
  align-items: center;
  --i-weaken: v-bind(offColor);
  --i-theme: v-bind(onColor);
  &-main {
    width: 100%;
    padding-bottom: 50%;
    position: relative;
    border-radius: 1em;
  }
  &-content {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 0.04em @i-weaken;
    border-radius: 1em;
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    transition: box-shadow 0.5s ease, background-color 0.5s ease;
    background-color: @i-weaken;

    // 圆点
    &-dot {
      height: 0;
      padding-bottom: 50%;
      padding-left: 50%;
      border-radius: 1em;
      position: absolute;
      top: 0%;
      transition: transform 0.3s ease, padding-left 0.5s ease;
      &:hover {
        transform: translateX(0.02em);
      }
      &-_ {
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 0.02em;
        transition: all 0.3s ease;
      }
      &-content {
        box-shadow: 0 0 24px #000000c5;
        width: 100%;
        height: 100%;
        border-radius: 1em;
        overflow: hidden;
        background-color: @i-bg;
        &-slot {
          width: 200%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          border-radius: 1em;
          .switch-slot {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.3em;
          }
        }
      }
    }
  }
  // 第二个选项样式
  .switch {
    box-shadow: inset 0 0 0 0.08em @i-theme;
    background-color: @i-theme;
    .i-switch-content-dot {
      transform: translateX(100%);
      &:hover {
        transform: translateX(calc(100% - 0.03em));
      }
      .i-switch-content-dot-content-slot {
        transform: translateX(-50%);
      }
    }
  }

  .all-icon {
    font-size: 2em;
  }
}

.i-switch-enter-active,
.i-switch-leave-active {
  transition: all 0.25s ease-out;
}

.i-switch-enter-from {
  opacity: 0;
  transform: scale(0.5);
}
.i-switch-leave-to {
  opacity: 0;
  transform: scale(2);
}
</style>
