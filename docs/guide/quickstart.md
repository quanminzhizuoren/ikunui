# 安装

```
npm i ikunui-vue
```

# 使用

```ts
// main.ts
import ikun from 'ikunui-vue'
import { createApp } from 'vue'
import 'ikunui-vue/style.css'
import App from './App.vue'

createApp(App).use(ikun).mount('#app')
```

或

```ts
// main.ts
import { Button, Input } from 'ikunui-vue'
import { createApp } from 'vue'
import 'ikunui-vue/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(Button)
app.use(Input)
app.mount('#app')
```

# TS 类型提示

```json
// tsconfig.json
  "compilerOptions": {
    "types": [
      "ikunui-vue/global"
    ]
  }
```
