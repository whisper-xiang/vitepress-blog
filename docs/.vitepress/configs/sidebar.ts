import type { DefaultTheme } from 'vitepress'
import fs from 'fs-extra'

const sidebarDailyNotes: DefaultTheme.SidebarItem[] =
  fs.readJSONSync('./scripts/daily-notes.json', { throws: false }) || []

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/web3/': [
    {
      text: 'Solidity 基础知识',
      collapsed: false,
      items: [{ text: '数据类型', link: '/web3/solidity/data-types' }],
    },
  ],
  '/web2/': [
    {
      text: 'JavaScript 基础',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/web2/javascript/01-数据类型' },
        { text: '面向对象', link: '/web2/javascript/02-面向对象' },
        { text: '迭代方法', link: '/web2/javascript/03-迭代方法' },
        { text: '函数式编程', link: '/web2/javascript/04-函数式编程' },
        { text: '异步流程控制', link: '/web2/javascript/05-异步流程控制' },
        { text: '设计模式', link: '/web2/javascript/06-设计模式' },
      ],
    },
    {
      text: 'HTML',
      collapsed: false,
      items: [
        { text: '语义化标签', link: '/web2/html/01-语义化标签.md' },
        { text: 'Meta标签', link: '/web2/html/02-Meta标签' },
        { text: 'DOCTYPE和浏览器渲染模式', link: '/web2/html/03-DOCTYPE和浏览器渲染模式' },
        { text: 'HTML5新增内容', link: '/web2/html/04-HTML5新增内容' },
      ],
    },
    {
      text: 'CSS',
      collapsed: false,
      items: [
        { text: 'Layout', link: '/web2/css/01-Layout' },
        { text: '1像素问题', link: '/web2/css/02-1像素问题' },
      ],
    },
    {
      text: '工程化',
      collapsed: false,
      items: [{ text: '前端监控', link: '/web2/engineering/前端监控' }],
    },
  ],
  '/notes&thoughts/finance/': [
    {
      text: '金融基础知识',
      collapsed: false,
      items: [
        { text: '定义', link: '/notes&thoughts/finance/定义' },
        { text: '演化', link: '/notes&thoughts/finance/演化' },
      ],
    },
  ],
  '/notes&thoughts/essay/': [
    {
      text: '杂文',
      collapsed: false,
      items: [
        { text: '洞穴奇案', link: '/notes&thoughts/essay/洞穴奇案' },
        { text: '哲学导论', link: '/notes&thoughts/essay/哲学导论' },
      ],
    },
  ],
  '/daily-notes': sidebarDailyNotes,
}
