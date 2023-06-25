import type { App } from 'vue'
import IButton from './IButton.vue'

const Button = (app: App) => {
  app.component('IButton', IButton)
}



export { Button, IButton }

