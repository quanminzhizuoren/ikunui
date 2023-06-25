import { onMounted, provide, ref, toRef, watch, type Ref } from 'vue'
import type { Emit, Props } from './ISelect.vue'
import { injectId } from './use-select'

/**依赖注入 */
export default (props: Props, emit: Emit, show: Ref<boolean>) => {
  const listFn = ref<Function[]>([])
  /**option值列表 */
  const list = ref<{ value: string | number; label: string | number }[]>([])

  provide(injectId, {
    // modelValue值传到option组件
    optionValue: toRef(props, 'modelValue'),
    // 点击option组件时执行 更新value
    cahnge(data: { value: string | number; label: string | number; notclose: boolean }) {
      const { value, notclose } = data
      emit('click', value)
      emit('update:modelValue', value)
      console.log('%c [ notclose ]-20', 'font-size:13px; background:pink; color:#bf2c9f;', notclose)
      if (!notclose) {
        show.value = false
      }
    },
    // 获取label和value
    getValue(fn: Function) {
      listFn.value.push(fn)
    }
  })

  const getlabel = () => {
    list.value = []
    for (const fn of listFn.value) {
      if (typeof fn === 'function') {
        list.value.push(fn())
      }
    }
  }
  watch(() => props.modelValue, getlabel)
  onMounted(getlabel)

  return {
    /**option值列表 */
    list
  }
}
