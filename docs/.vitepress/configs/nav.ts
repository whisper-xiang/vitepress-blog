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
      {
        text: '前端工程',
        items: [
          { text: '规范', link: '/web2/engineering/normalize/environment/环境和工具' },
          { text: '框架', link: '/web2/framework/Vue2基础' },
          { text: '架构', link: '/web2/architect/概述' },
          { text: '性能', link: '/web2/others/性能优化' },
          // { text: 'DevOps', link: '/web2/engineering/DevOps/index' },
          // { text: '前端监控', link: '/web2/engineering/前端监控' },
        ],
      },
    ],
  },
  {
    text: 'WEB 3',
    items: [
      { text: '总览', link: '/web3/index' },
      { text: '区块链', link: '/web3/区块链/index' },
      // { text: 'Solidity 基础', link: '/web3/index' },
    ],
  },
  {
    text: 'AI',
    items: [
      { text: '基础', link: '/AI/基础/01-绪论' },
      { text: '机器学习', link: '/AI/机器学习/机器学习' },
      { text: '深度学习', link: '/AI/深度学习/深度学习' },
      { text: '认知', link: '/AI/认知/现阶段的价值和盈利方向' },
      { text: '工具', link: '/AI/工具/cursor' },
      // { text: 'coze', link: '/AI/coze' },
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

      { text: '金融', link: '/notes&thoughts/finance/课程/01-金融的定义与演化' },
      { text: '哲学', link: '/notes&thoughts/philosophy/01-我是谁' },
    ],
  },
  {
    text: '轻语',
    link: '/self/index.md',
  },
]
