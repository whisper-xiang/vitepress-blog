import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav/' },
  {
    text: 'WEB 2', items: [
      { text: 'Javascript 基础', link: '/web2/JS/index' },
    ]
  },
  {
    text: 'WEB 3',
    items: [
      { text: 'Solidity 基础', link: '/web3/index' },
    ]
  },
  {
    text: '笔记 & 想法',
    items: [
      { text: '金融学', link: '/notes&thoughts/finance/index' },
      { text: '代币经济学', link: '/notes&thoughts/tokenomics/index' },
      { text: '杂文',
        items: [
          { text: '洞穴奇案', link: '/notes&thoughts/essay/洞穴奇案', },
          { text: '哲学导论', link: '/notes&thoughts/essay/哲学导论', },
        ]
       },
    ]
  },
  // { text: '主页', link: 'https://fe-mm.com' },
  // {
  //   text: '捕蛇者说',
  //   link: 'https://notes.fe-mm.com',
  // },
  // { text: 'mmPlayer', link: 'https://netease-music.fe-mm.com' },
  // {
  //   text: '油猴脚本',
  //   link: 'https://github.com/maomao1996/tampermonkey-scripts',
  // },
]
