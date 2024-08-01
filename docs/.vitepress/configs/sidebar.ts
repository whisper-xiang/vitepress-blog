import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/web3/': [
    {
      text: 'Solidity 基础知识',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/web3/solidity/data-types' },
      ]
    },
  ],
  '/web2/': [
    {
      text: 'JavaScript 基础知识',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/web2/JS/data-types' },
      ]
    },
  ],
  '/notes&thoughts/finance/': [
    {
      text: '金融基础知识',
      collapsed: false,
      items: [
        { text: '定义', link: '/notes&thoughts/finance/定义' },
        { text: '演化', link: '/notes&thoughts/finance/演化' },
      ]
    },
  ],
  '/notes&thoughts/essay/': [
    {
      text: '杂文',
      collapsed: false,
      items: [
        { text: '洞穴奇案', link: '/notes&thoughts/essay/洞穴奇案' },
        { text: '哲学导论', link: '/notes&thoughts/essay/哲学导论' },
      ]
    },
  ],
}
