import type { App } from 'vue'
import IInput from './IInput.vue'

const Input = (app: App) => {
  app.component('IInput', IInput)
}

export { IInput, Input }

