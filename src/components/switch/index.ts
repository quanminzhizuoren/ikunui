import type { App } from 'vue'
import ISwitch from './ISwitch.vue'

const Switch = (app: App) => {
  app.component('ISwitch', ISwitch)
}
export { ISwitch, Switch }

