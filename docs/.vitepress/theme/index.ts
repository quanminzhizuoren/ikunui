import { EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import ikunui from '../../../src';

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(ikunui)
  }
}
