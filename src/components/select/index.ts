import type { App } from 'vue'
import IOption from './IOption.vue'
import ISelect from './ISelect.vue'

const Select = (app: App) => {
  app.component('ISelect', ISelect)
  app.component('IOption', IOption)
}

export { IOption, ISelect, Select }

