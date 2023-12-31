// import markdown from 'vite-plugin-markdown-preview';
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';
import { DefaultTheme, defineConfig } from 'vitepress';
import { components } from '../list';
// import demo from 'vuepress-plugin-demo-code';
const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/button' }
]

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      text: '指南',
      items: [
        { text: '组件库介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickstart' },
      ]
    }
  ],
  '/components': [{
    items: [
      ...components
    ]
  }]
}

export default defineConfig({
  base: '/ikunui',
  title: 'iUI',
  description: 'iUI',
  lang: 'cn-ZH',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/ikunui/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'ikun ui',//logo标题
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/quanminzhizuoren/ikunui' }
    ],
    nav,
    sidebar
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})
