
import { createApp, ref } from 'vue';
import IModal from './IModal.vue';


/**在body末尾添加节点用于挂载 option选项 */
export const createSuspension = () => {
  let suspension = document.getElementsByClassName('i-suspension_')[0];
  if (!suspension) {
    suspension = document.createElement('div');
    suspension.classList.add('i-suspension_');
    createApp(IModal).mount(suspension)
    document.body.appendChild(suspension);
  }
}

/**控制显示模态框遮罩 */
export const isModal = ref(false)


/**键盘tab建触发时设置true 允许focus事件 */
export const isTab = ref(false)

/**依赖注入ID */
export const injectId = Symbol(123)