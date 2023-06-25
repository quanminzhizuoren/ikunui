<template>
  <div
    class="i-select"
    @click.stop="focus"
    :style="{
      '--select-size': `var(--i-size,${ISIZE[size] || size})`,
      '--select-radius': `var(--i-radius,0.3em)`,
      '--select-border-size': border ? `var(--i-border-size,1.3px)` : 0,
      opacity: show ? 0 : 1
    }"
  >
    <button
      class="i-select-input"
      readonly
      :style="{ background: border ? '' : 'none' }"
      :value="label"
      @focus="focus"
      @blur="blur"
      @keydown.tab="onTab"
      ref="inputref"
    >
      <slot name="label" :data="{ value: modelValue, label: label }">
        {{ label }}
      </slot>
    </button>
    <IPopper>
      <Transition type="animation" name="animation-option">
        <div
          class="i-option-content"
          :class="{
            'i-border': border
          }"
          :style="{
            '--select-size': `var(--size,${ISIZE[size] || size})`,
            '--select-radius': `var(--radius,0.3em)`,
            '--select-width': optuonSty.width + 'px',
            '--select-height': optuonSty.height + 'px',
            '--select-x': optuonSty.x + 'px',
            '--select-y': optuonSty.y + 'px',
            '--select-option-x': optioncontentSty.x + 'px',
            '--select-option-y': optioncontentSty.y + 'px',
            '--select-option-width': optioncontentSty.width + 'px',
            '--select-option-height': optioncontentSty.height + 'px',
            '--select-border-size': border ? `var(--i-border-size,1.3px)` : 0
          }"
          v-show="show"
        >
          <div ref="optionref" class="i-option-body">
            <div class="i-option-list" @mouseenter="ismouse = true" @mouseleave="ismouse = false">
              <div v-for="(item, index) in slots" :key="index">
                <component :is="item" />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </IPopper>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots, watch, type VNode, type VNodeTypes } from 'vue'
import { ISIZE, type ISIZEType } from '../../config'
import IPopper from '././IPopper.vue'
import localization from './use-localization'
import useProvide from './use-provide'
import { createSuspension, isModal, isTab } from './use-select'
export type Props = {
  modelValue: string | number
  /**大小 */
  size?: ISIZEType
  /**展开时显示遮罩 */
  modal?: boolean
  /**去掉边框线 */
  border?: boolean
}
export interface Emit {
  (e: 'update:modelValue', value: string | number): void
  (e: 'click', value: string | number): void
}

const emit = defineEmits<Emit>()
const props = withDefaults(defineProps<Props>(), { size: 'default', modal: false, border: false })
const slot = useSlots()
const ismouse = ref(false) //鼠标是否在option
const show = ref(false) //控制option组件显示

const { list } = useProvide(props, emit, show)

const { inputref, optionref, optuonSty, optioncontentSty, focus } = localization(show)

const label = computed(
  () => list.value.find(({ value }) => value == props.modelValue)?.label || props.modelValue
)

// 设置显示遮罩
watch(
  () => show.value,
  (value) => {
    if (value) {
      isModal.value = props.modal
    } else {
      isModal.value = false
    }
  }
)

// tab键盘切换
const onTab = () => {
  show.value = false
  isTab.value = true
}
// 失去焦点时关闭
const blur = () => {
  if (!ismouse.value) {
    show.value = false
  } else {
    !isTab.value && inputref.value && inputref.value.focus()
  }
}

interface OptionVNode extends VNode {
  type: VNodeTypes & { name?: string }
}
// 插槽里的IOption组件
const slots = computed<OptionVNode[]>(() => {
  let arrs: OptionVNode[] = []
  const nmar = (slot.default?.() || []) as OptionVNode[]
  const gtearr = (arr: any[]) => {
    for (const vn of arr) {
      if (vn.type === 'template') {
        gtearr(vn.children)
      } else if (vn.type?.name === 'IOption') {
        arrs.push(vn)
      }
    }
  }
  gtearr(nmar)
  return arrs
})
createSuspension() //挂载option组件到body
</script>

<style lang="less" scoped>
@import url('./style.less');
</style>
<style lang="less">
.animation-option-enter-active {
  animation: open_option 0.3s forwards ease-in-out;
}
.animation-option-leave-active {
  animation: open_option 0.3s forwards reverse ease-in-out;
}
@keyframes open_option {
  from {
    width: var(--select-width);
    height: var(--select-height);
    border-radius: var(--select-radius);
    top: var(--select-y);
    left: var(--select-x);
  }

  to {
    top: var(--select-option-y);
    left: var(--select-option-x);
    width: var(--select-option-width);
    height: var(--select-option-height);
    border-radius: calc(var(--select-radius) * 1);
  }
}
</style>
