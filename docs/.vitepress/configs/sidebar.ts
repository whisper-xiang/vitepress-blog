import type { DefaultTheme } from 'vitepress'
import fs from 'fs-extra'

const sidebarDailyNotes: DefaultTheme.SidebarItem[] =
  fs.readJSONSync('./scripts/daily-notes.json', { throws: false }) || []

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/web3/': [
    {
      text: '总览',
      link: '/web3/index.md',
    },
    // {
    //   text: 'Solidity 基础知识',
    //   collapsed: false,
    //   items: [{ text: '数据类型', link: '/web3/solidity/data-types' }],
    // },
    {
      text: '区块链',
      collapsed: false,
      items: [
        { text: '概念', link: '/web3/区块链/index.md' },
        {
          text: '比特币',
          items: [
            { text: '01-数据结构', link: '/web3/区块链/BTC/01-数据结构' },
            { text: '02-密码学原理', link: '/web3/区块链/BTC/02-密码学原理' },
            { text: '03-共识协议', link: '/web3/区块链/BTC/03-共识协议' },
            { text: '04-具体实现', link: '/web3/区块链/BTC/04-具体实现' },
            { text: '05-网络', link: '/web3/区块链/BTC/05-网络' },
            { text: '06-挖矿难度', link: '/web3/区块链/BTC/06-挖矿难度' },
            { text: '07-挖矿', link: '/web3/区块链/BTC/07-挖矿' },
            { text: '08-比特币脚本', link: '/web3/区块链/BTC/08-比特币脚本' },
            { text: '09-分叉', link: '/web3/区块链/BTC/09-分叉' },
            { text: '10-匿名性', link: '/web3/区块链/BTC/10-匿名性' },
            { text: '11-思考', link: '/web3/区块链/BTC/11-思考' },
          ],
        },
        {
          text: '以太坊',
          items: [
            { text: '12-概念', link: '/web3/区块链/EVM/12-概念' },
            { text: '13-账户', link: '/web3/区块链/EVM/13-账户' },
            { text: '14-数据结构', link: '/web3/区块链/EVM/14-数据结构' },
            { text: '15-GHOST', link: '/web3/区块链/EVM/15-GHOST' },
            { text: '16-挖矿算法', link: '/web3/区块链/EVM/16-挖矿算法' },
            { text: '17-难度调整', link: '/web3/区块链/EVM/17-难度调整' },
            { text: '18-权益证明', link: '/web3/区块链/EVM/18-权益证明' },
            { text: '19-智能合约', link: '/web3/区块链/EVM/19-智能合约' },
          ],
        },
        // { text: '区块链技术与应用', link: '/web3/区块链/区块链技术与应用' },
      ],
    },
  ],
  '/web3/智能合约/': [
    {
      text: 'Foundry',
      collapsed: false,
      items: [{ text: '概述', link: '/web3/智能合约/Foundry/01-概述' }],
    },
    {
      text: 'Solidity',
      collapsed: false,
      items: [{ text: '概述', link: '/web3/智能合约/Solidity/01-概述' }],
    },
    {
      text: 'OpenZeppelin',
      collapsed: false,
      items: [{ text: '概述', link: '/web3/智能合约/OpenZeppelin/01-概述' }],
    },
    {
      text: 'Remix',
      collapsed: false,
      items: [{ text: '概述', link: '/web3/智能合约/Remix/01-概述' }],
    },
    {
      text: 'Hardhat',
      collapsed: false,
      items: [{ text: '概述', link: '/web3/智能合约/Hardhat/01-概述' }],
    },
  ],
  '/web2/': [
    {
      text: 'JavaScript 基础',
      collapsed: false,
      items: [
        { text: '简介', link: '/web2/javascript/00-简介' },
        { text: '数据类型', link: '/web2/javascript/01-数据类型' },
        { text: '面向对象', link: '/web2/javascript/02-面向对象' },
        { text: '迭代方法', link: '/web2/javascript/03-迭代方法' },
        { text: '编程范式', link: '/web2/javascript/04-编程范式' },
        { text: '异步流程控制', link: '/web2/javascript/05-异步流程控制' },
        { text: '设计模式', link: '/web2/javascript/06-设计模式' },
      ],
    },
    {
      text: 'Chrome V8',
      collapsed: false,
      items: [
        { text: '从V8的角度看JS', link: '/web2/javascript/07-从V8的角度看JS' },
        { text: 'V8如何执行JS代码', link: '/web2/javascript/08-V8如何执行JS代码' },
        {
          text: '从执行上下文到变量提升',
          link: '/web2/javascript/09-从执行上下文到变量提升',
        },
        { text: '作用域', link: '/web2/javascript/10-作用域' },
        { text: '闭包', link: '/web2/javascript/11-闭包' },
        { text: '执行上下文中的this', link: '/web2/javascript/12-执行上下文中的this' },
        {
          text: '从调用栈溢出到尾递归优化',
          link: '/web2/javascript/13-从调用栈溢出到尾递归优化',
        },
        {
          text: '从Chrome架构到新tab的进程协作',
          link: '/web2/javascript/14-从Chrome架构到新tab的进程协作',
        },
        { text: '从进程协作到事件循环', link: '/web2/javascript/15-从进程协作到事件循环' },
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
      text: '浏览器',
      collapsed: false,
      items: [
        { text: '01-从用户搜索开始', link: '/web2/browser/01-从用户搜索开始' },
        { text: '02-浏览器缓存', link: '/web2/browser/02-浏览器缓存' },
        {
          text: '03-数据请求：计算机网络基础',
          link: '/web2/browser/03-数据请求：计算机网络基础',
        },
        { text: '04-数据请求：TCP', link: '/web2/browser/04-数据请求：TCP' },
        { text: '05-数据请求：HTTP请求流程', link: '/web2/browser/05-数据请求：HTTP请求流程' },
        { text: '06-数据请求：HTTP与HTTPS', link: '/web2/browser/06-数据请求：HTTP与HTTPS' },
        { text: '07-页面渲染：从文件到页面', link: '/web2/browser/07-页面渲染：从文件到页面' },
        { text: '08-垃圾回收', link: '/web2/browser/08-垃圾回收' },
      ],
    },
    {
      text: 'Utils',
      collapsed: false,
      items: [
        { text: '树表转换', link: '/web2/Utils/树表转换' },
        { text: '逻辑判断', link: '/web2/Utils/逻辑判断' },
      ],
    },
    // { text: '性能优化', link: '/web2/others/性能优化' },
  ],
  '/web2/framework/': [
    {
      text: 'Angular基础',
      collapsed: false,
      items: [
        { text: '01-AngularCLI', link: '/web2/framework/Angular基础/01-AngularCLI' },
        { text: '02-组件', link: '/web2/framework/Angular基础/02-组件' },
        { text: '03-表单', link: '/web2/framework/Angular基础/03-表单' },
        { text: '04-HTTP', link: '/web2/framework/Angular基础/04-HTTP' },
        { text: '05-Router', link: '/web2/framework/Angular基础/05-Router' },
        { text: '06-导航守卫', link: '/web2/framework/Angular基础/06-导航守卫' },
        { text: '07-模块', link: '/web2/framework/Angular基础/07-模块' },
      ],
    },
    { text: 'Vue2基础', link: '/web2/framework/Vue2基础' },
  ],

  '/web2/engineering/normalize': [
    {
      text: '统一开发环境和工具',
      items: [
        {
          text: '环境和工具',
          link: '/web2/engineering/normalize/environment/环境和工具',
        },
        {
          text: 'ESLint',
          link: '/web2/engineering/normalize/environment/eslint',
        },
        {
          text: 'TSConfig',
          link: '/web2/engineering/normalize/environment/tsConfig',
        },
        {
          text: 'Prettier',
          link: '/web2/engineering/normalize/environment/prettier',
        },
        {
          text: 'Stylelint',
          link: '/web2/engineering/normalize/environment/stylelint',
        },
      ],
    },
    {
      text: '统一代码规范',
      collapsed: false,
      items: [
        {
          text: 'HTML 规范',
          collapsed: false,
          items: [
            { text: '命名规范', link: '/web2/engineering/normalize/html/命名规范' },
            { text: '代码规范', link: '/web2/engineering/normalize/html/代码规范' },
            { text: '注释规范', link: '/web2/engineering/normalize/html/注释规范' },
          ],
        },
        {
          text: 'CSS 规范',
          collapsed: false,
          items: [
            {
              text: '代码规范',
              link: '/web2/engineering/normalize/css/代码规范',
            },
            {
              text: '命名规范',
              link: '/web2/engineering/normalize/css/命名规范',
            },
          ],
        },
        {
          text: 'JS 规范',
          collapsed: false,
          items: [
            {
              text: '代码规范',
              link: '/web2/engineering/normalize/js/代码规范',
            },
            {
              text: '注释规范',
              link: '/web2/engineering/normalize/js/注释规范',
            },
            {
              text: 'JSX 书写规范',
              link: '/web2/engineering/normalize/js/JSX书写规范',
            },
          ],
        },
        {
          text: 'Vue 规范',
          collapsed: false,
          items: [
            {
              text: 'vue 2命名规范',
              link: '/web2/engineering/normalize/vue/vue2命名规范',
            },
            {
              text: 'vue 2代码规范',
              link: '/web2/engineering/normalize/vue/vue2代码规范',
            },
            // {
            //   text: 'vue 3命名规范',
            //   link: '/web2/engineering/normalize/vue/vue3命名规范',
            // },
            {
              text: 'vue 3代码规范',
              link: '/web2/engineering/normalize/vue/vue3代码规范',
            },
          ],
        },
        {
          text: '图片规范',
          collapsed: false,
          items: [
            { text: '命名规范', link: '/web2/engineering/normalize/image/命名规范' },
            { text: '图片格式', link: '/web2/engineering/normalize/image/图片格式' },
            { text: '图片尺寸', link: '/web2/engineering/normalize/image/图片大小' },
            { text: '图片引入', link: '/web2/engineering/normalize/image/图片引入' },
          ],
        },
      ],
    },
    {
      text: '统一分支管理',
      items: [
        {
          text: 'Git提交规范',
          link: '/web2/engineering/normalize/git/git提交规范',
        },
        {
          text: 'GitFlow',
          link: '/web2/engineering/normalize/git/gitFlow.md',
        },
      ],
    },
    // { text: '前端监控', link: '/web2/engineering/前端监控' },
  ],

  '/web2/架构/': [
    {
      text: '前端架构',
      collapsed: false,
      items: [
        { text: '微前端', link: '/web2/架构/微前端/index' },
        { text: '软件工程的难题', link: '/web2/架构/微前端/软件工程的难题/index' },
      ],
    },
  ],

  '/web2/DevOps/': [
    { text: '概览', link: '/web2/DevOps/index.md' },
    { text: 'Git', link: '/web2/DevOps/Git/index.md' },
    { text: 'Shell', link: '/web2/DevOps/Shell/index.md' },
    { text: 'Git Hooks', link: '/web2/DevOps/Git/GitHooks.md' },
    { text: 'Docker', link: '/web2/DevOps/Docker/index.md' },
    { text: 'Nginx', link: '/web2/DevOps/Nginx/index.md' },
  ],

  '/web2/engineering/监控': [
    { text: '01-概览', link: '/web2/engineering/监控/01-概览' },
    { text: '02-错误搜集', link: '/web2/engineering/监控/02-错误搜集' },
    { text: '03-性能', link: '/web2/engineering/监控/03-性能' },
    { text: '04-用户行为', link: '/web2/engineering/监控/04-用户行为' },
    { text: '05-上报', link: '/web2/engineering/监控/05-上报' },
    { text: '06-架构设计', link: '/web2/engineering/监控/06-架构设计' },
  ],

  '/notes/finance/': [
    {
      text: '北大金融课',
      collapsed: false,
      items: [
        { text: '01-金融的定义与演化', link: '/notes/finance/课程/01-金融的定义与演化' },
        { text: '02-金融机构的作用', link: '/notes/finance/课程/02-金融机构的作用' },
        {
          text: '03-个人资产配置的生命周期',
          link: '/notes/finance/课程/03-个人资产配置的生命周期',
        },
        { text: '04-货币与信用', link: '/notes/finance/课程/04-货币与信用' },
        { text: '05-银行与理财', link: '/notes/finance/课程/05-银行与理财' },
        { text: '06-生活中的银行', link: '/notes/finance/课程/06-生活中的银行' },
        { text: '07-发行承销', link: '/notes/finance/课程/07-发行承销' },
        { text: '08-兼并收购', link: '/notes/finance/课程/08-兼并收购' },
        {
          text: '09-金融创新-投行创新业务',
          link: '/notes/finance/课程/09-金融创新-投行创新业务',
        },
        { text: '10资产证券化', link: '/notes/finance/课程/10资产证券化' },
        { text: '11-基金', link: '/notes/finance/课程/11-基金' },
        { text: '12-另类投资', link: '/notes/finance/课程/12-另类投资' },
        { text: '13-基金业绩', link: '/notes/finance/课程/13-基金业绩' },
      ],
    },
    {
      text: '杂文',
      items: [
        {
          text: '美联储降息',
          link: '/notes/finance/杂文/美联储降息',
        },
        {
          text: '什么是市场经济',
          link: '/notes/finance/杂文/市场经济',
        },
      ],
    },
    {
      text: '股票',
      items: [
        { text: '术语', link: '/notes/finance/股票/00-术语' },
        { text: '基础', link: '/notes/finance/股票/01-基础' },
      ],
    },
  ],
  '/notes/essay/': [
    {
      text: '读书笔记',
      collapsed: false,
      items: [
        { text: '洞穴奇案', link: '/notes/essay/洞穴奇案' },
        { text: '哲学导论', link: '/notes/essay/哲学导论' },
        { text: '一本书读懂Web 3.0', link: '/notes/essay/一本书读懂Web3.0' },
        { text: '独立开发手册', link: '/notes/essay/独立开发手册' },
        { text: '了解和实现微前端 AWS', link: '/notes/essay/了解和实现微前端/index' },
      ],
    },
  ],
  '/notes/philosophy/': [
    {
      text: '哲学',
      items: [
        { text: '概述', link: '/notes/philosophy/概述' },
        { text: '上帝', link: '/notes/philosophy/上帝' },
        { text: '生活的意义', link: '/notes/philosophy/生活的意义' },
        // { text: '自由', link: '/notes/philosophy/自由' },
        // { text: '哲学、性、种族和文化', link: '/notes/philosophy/哲学、性、种族和文化' },
      ],
    },
  ],
  '/AI': [
    {
      text: '基础知识',
      items: [
        { text: '01-绪论', link: '/AI/基础/01-绪论' },
        { text: '02-图灵测试', link: '/AI/基础/02-图灵测试' },
        { text: '03-算法和算力', link: '/AI/基础/03-算法和算力' },
        { text: '04-大数据', link: '/AI/基础/04-大数据' },
      ],
    },
    {
      text: '机器学习',
      items: [{ text: '原理', link: '/AI/机器学习/机器学习' }],
    },
    {
      text: '深度学习',
      items: [{ text: '原理', link: '/AI/深度学习/深度学习' }],
    },
    {
      text: '自然语言处理',
      items: [{ text: '原理', link: '/AI/自然语言处理/自然语言处理' }],
    },
    {
      text: '认知',
      items: [
        { text: '现阶段价值和盈利方向', link: '/AI/认知/现阶段的价值和盈利方向' },
        { text: '发展历史及当前定位', link: '/AI/认知/发展历史及当前定位' },
      ],
    },
    {
      text: '工具',
      items: [{ text: 'Cursor', link: '/AI/工具/cursor' }],
    },
    {
      text: '提示词',
      items: [
        { text: '前端规范', link: '/AI/提示词/前端规范' },
        { text: '行文拟人', link: '/AI/提示词/行文拟人' },
      ],
    },
  ],
  '/daily-notes': sidebarDailyNotes,
}
