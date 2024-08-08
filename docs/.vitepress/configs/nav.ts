import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav/' },
  {
    text: 'WEB 2',
    items: [
      { text: 'JavaScript', link: '/web2/javascript/01-数据类型' },
      { text: 'HTML', link: '/web2/html/01-语义化标签' },
      { text: 'CSS', link: '/web2/css/01-Layout' },
      { text: '浏览器原理', link: '/web2/browser/index' },
      { text: '前端工程', items: [{ text: '前端监控', link: '/web2/engineering/前端监控' }] },
    ],
  },
  {
    text: 'WEB 3',
    items: [{ text: 'Solidity 基础', link: '/web3/index' }],
  },
  {
    text: '笔记 & 想法',
    items: [
      { text: '日常笔记', link: '/daily-notes/', activeMatch: '^/daily-notes' },
      { text: '金融学', link: '/notes&thoughts/finance/01-金融的定义与演化' },
      { text: '代币经济学', link: '/notes&thoughts/tokenomics/index' },
      {
        text: '杂文',
        items: [
          { text: '洞穴奇案', link: '/notes&thoughts/essay/洞穴奇案' },
          { text: '哲学导论', link: '/notes&thoughts/essay/哲学导论' },
        ],
      },
    ],
  },
]
