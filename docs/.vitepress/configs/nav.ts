import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav/' },
  {
    text: 'WEB 2',
    items: [
      { text: 'JavaScript', link: '/web2/javascript/00-简介', activeMatch: '^/web2/javascript/' },
      { text: 'HTML', link: '/web2/html/01-语义化标签' },
      { text: 'CSS', link: '/web2/css/01-Layout' },
      { text: '浏览器原理', link: '/web2/browser/index' },
      { text: '前端工程', items: [{ text: '前端监控', link: '/web2/engineering/前端监控' }] },
    ],
  },
  {
    text: 'WEB 3',
    items: [
      { text: '区块链', link: '/web3/区块链/区块链技术与应用' },
      { text: 'Solidity 基础', link: '/web3/index' },
    ],
  },
  {
    text: '笔记 & 想法',
    items: [
      { text: '日常笔记', link: '/daily-notes/', activeMatch: '^/daily-notes' },
      {
        text: '读书笔记',
        link: '/notes&thoughts/essay/洞穴奇案',
        activeMatch: '^/notes&thoughts/essay/',
      },

      { text: '金融课', link: '/notes&thoughts/finance/01-金融的定义与演化' },
      { text: '哲学', link: '/notes&thoughts/philosophy/01-我是谁' },
      { text: 'Indie Hacker', link: '/notes&thoughts/indieHacker/01-简介' },
    ],
  },
  {
    text: '轻语',
    link: '/self/index.md',
  },
]
