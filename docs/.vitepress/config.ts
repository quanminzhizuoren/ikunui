import markdown from 'vite-plugin-markdown-preview';
import { DefaultTheme, defineConfig } from 'vitepress';
import { components } from '../list';

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
  title: 'iUI',
  description: 'iUI',
  lang: 'cn-ZH',
  base: '/',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
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
    // config(md) {
    //   md.use(componentPreview)
    //   md.use(containerPreview)
    // }
  },
  vite: {
    plugins: [
      markdown()
    ]
  }
})
