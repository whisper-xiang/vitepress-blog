import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar, algolia } from './configs'

export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '/',

  lang: 'zh-CN',
  title: '轻语',
  description: '世界之于轻语',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    search: {
      provider: 'local',
    },

    i18nRouting: false,

    logo: '/avatar.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/whisper-xiang/vitepress-whisper-blog' },
    ],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2024-present 轻语',
    },

    // editLink: {
    //   pattern: 'https://github.com/whisper-xiang/vitepress-whisper-blog/blob/main/docs/:path',
    //   text: 'Edit this page on GitHub',
    // },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    /* Algolia DocSearch 配置 */
    // algolia,

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    // visitor: {
    //   badgeId: 'maomao1996.vitepress-nav-template',
    // },

    // comment: {
    //   repo: 'maomao1996/vitepress-nav-template',
    //   repoId: 'R_kgDOJC09Jg',
    //   category: 'Announcements',
    //   categoryId: 'DIC_kwDOJC09Js4Cekn0',
    // },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
