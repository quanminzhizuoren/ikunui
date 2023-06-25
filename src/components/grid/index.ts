import type { App } from 'vue'
import ICol from './ICol.vue'
import IRow from './IRow.vue'

const Grid = (app: App) => {
  app.component('ICol', ICol)
  app.component('IRow', IRow)
}

export { Grid, ICol, IRow }

