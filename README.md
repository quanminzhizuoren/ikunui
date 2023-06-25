# ikun-ui

## 安装

```
npm install ikunui-vue
```

## 使用

```js
import ikun from 'ikunui-vue'
import { createApp } from 'vue'
import 'ikunui-vue/style.css'
import App from './App.vue'

createApp(App).use(ikun).mount('#app')
```

或

```js
import { Button, Input } from 'ikunui-vue'
import { createApp } from 'vue'
import 'ikunui-vue/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(Button)
app.use(Input)
app.mount('#app')
```
