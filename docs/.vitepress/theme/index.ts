import { EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import { ElementPlusContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';
import ikunui from '../../../src';
import './global.less';
export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(ikunui)
    ctx.app.component('demo-preview', ElementPlusContainer)
  }
}
