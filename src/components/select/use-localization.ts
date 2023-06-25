import { nextTick, onMounted, onUnmounted, ref, type Ref } from 'vue'
import { isTab } from './use-select'

type ViewRect = {
  bottom: number
  height: number
  left: number
  right: number
  top: number
  width: number
  x: number
  y: number
}

/**点击弹出option */
export default (show: Ref<boolean>) => {
  /**select 节点实例 */
  const inputref = ref<HTMLElement>()
  /**option弹出框 节点实例 */
  const optionref = ref<HTMLElement>()
  /**初始坐标位置 */
  const optuonSty = ref<ViewRect>({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0
  })
  /**最终坐标位置 */
  const optioncontentSty = ref<ViewRect>({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0
  })
  const focus = (e: Event) => {
    if (show.value) return
    if (e.type === 'focus' && !isTab.value) return
    show.value = true
    setCoord()
    if (e.type === 'focus') {
      isTab.value = false
    }
  }
  //获取宽高、坐标
  const setCoord = () => {
    if (!inputref.value) return
    // show.value = true
    const { bottom, height, left, right, top, width, x, y } = inputref.value.getBoundingClientRect()
    // 初始坐标位置
    optuonSty.value = {
      bottom,
      height,
      left,
      right,
      top,
      width,
      x,
      y
    }

    nextTick(() => {
      if (!optionref.value) return
      const { width: bw, height: bh } = document.body.getBoundingClientRect()
      let { bottom, height, left, right, top, width, x, y } =
        optionref.value.getBoundingClientRect()
      // 计算弹出的最终坐标位置
      x = Math.min(
        bw - width - 10,
        Math.max(10, optuonSty.value.x - (width / 2 - optuonSty.value.width / 2))
      )
      y = Math.min(
        bh - height - 10,
        Math.max(10, optuonSty.value.y - (height / 2 - optuonSty.value.height / 2))
      )
      optioncontentSty.value = {
        bottom,
        height,
        left,
        right,
        top,
        width,
        x,
        y
      }
    })
  }

  onMounted(() => {
    addEventListener('resize', setCoord)
  })
  onUnmounted(() => {
    removeEventListener('resize', setCoord)
  })

  return {
    /**select 节点实例 */
    inputref,
    /**option弹出框 节点实例 */
    optionref,
    optuonSty,
    optioncontentSty,
    /**选择事件 */
    focus,
    /**设置坐标 */
    setCoord
  }
}
