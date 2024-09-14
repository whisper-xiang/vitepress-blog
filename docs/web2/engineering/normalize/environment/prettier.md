# Prettier

## .prettierrc.js

.prettierrc.js 使用 JavaScript 语法配置 Prettier，因此可以在配置中使用条件逻辑、变量等动态内容。它的优势在于灵活性更高，适合需要动态配置的场景。

```js
// @see: https://www.prettier.cn

module.exports = {
  // 指定最大换行长度
  printWidth: 130,
  // 缩进制表符宽度 | 空格数
  tabWidth: 2,
  // 使用制表符而不是空格缩进行 (true：制表符，false：空格)
  useTabs: false,
  // 结尾不用分号 (true：有，false：没有)
  semi: false,
  // 使用单引号 (true：单引号，false：双引号)
  singleQuote: true,
  // 在对象字面量中决定是否将属性名用引号括起来 可选值 "<as-needed|consistent|preserve>"
  quoteProps: 'as-needed',
  // 在JSX中使用单引号而不是双引号 (true：单引号，false：双引号)
  jsxSingleQuote: false,
  // 多行时尽可能打印尾随逗号 可选值"<none|es5|all>"
  trailingComma: 'none',
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }" (true：有，false：没有)
  bracketSpacing: true,
  // 将 > 多行元素放在最后一行的末尾，而不是单独放在下一行 (true：放末尾，false：单独一行)
  bracketSameLine: false,
  // (x) => {} 箭头函数参数只有一个时是否要有小括号 (avoid：省略括号，always：不省略括号)
  arrowParens: 'avoid',
  // 指定要使用的解析器，不需要写文件开头的 @prettier
  requirePragma: false,
  // 可以在文件顶部插入一个特殊标记，指定该文件已使用 Prettier 格式化
  insertPragma: false,
  // 用于控制文本是否应该被换行以及如何进行换行
  proseWrap: 'preserve',
  // 在html中空格是否是敏感的 "css" - 遵守 CSS 显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的
  htmlWhitespaceSensitivity: 'css',
  // 控制在 Vue 单文件组件中 <script> 和 <style> 标签内的代码缩进方式
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf 结尾是 可选值 "<auto|lf|crlf|cr>"
  endOfLine: 'auto',
  // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码 (rangeStart：开始，rangeEnd：结束)
  rangeStart: 0,
  rangeEnd: Infinity,
  plugins: ['prettier-plugin-tailwindcss'],
}
```

## .prettierrc.json

.prettierrc.json 是 Prettier 的常见配置文件格式，使用 JSON 格式来定义规则。它更简单、更直接，但不支持任何动态逻辑，只能用于静态配置。

```
{
  "printWidth": 130,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "none",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "avoid",
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css",
  "vueIndentScriptAndStyle": false,
  "endOfLine": "auto",
  "rangeStart": 0,
  "rangeEnd": Infinity,
  "plugins": ["prettier-plugin-tailwindcss"]
}

```

## 相较

| 特性     | .prettierrc.js                        | .prettierrc.json            |
| -------- | ------------------------------------- | --------------------------- |
| 文件格式 | JavaScript                            | JSON                        |
| 灵活性   | 支持动态配置,可以使用变量、条件逻辑等 | 只支持静态配置,无法动态生成 |
| 可读性   | 语法上略复杂,尤其是复杂的配置逻辑     | 简单、易读,适合静态配置     |
| 使用场景 | 需要根据环境或条件生成配置的场景      | 适合绝大多数简单配置的场景  |

## .prettierignore

```
/dist/*
.local
/node_modules/**

**/*.svg
**/*.sh

/public/*
stats.html

```

## 与 ESLint 的冲突

`ESLint` 是一个用于检查和强制执行代码风格和错误的工具，而 `Prettier` 是一个代码格式化工具，自动格式化代码。两者之间有时会在代码风格规则上发生冲突，特别是当 `ESLint` 配置了和 `Prettier` 不同的代码风格规则时。

### 常见的冲突场景

1. 格式化规则：Prettier 会自动处理代码格式（例如缩进、行宽、引号等），而 `ESLint` 也可以通过某些规则（例如 indent、quotes 等）来检查和强制执行相似的规则。这会导致 `ESLint` 和 `Prettier` 对同一代码提出不同的建议。
2. 代码风格规则：有些 `ESLint` 规则（如 max-len、arrow-parens）与 `Prettier` 的默认行为可能不一致，导致 `ESLint` 报错，但 `Prettier` 格式化后又重新更改代码，产生循环问题。

### 解决 ESLint 和 Prettier 冲突的方式

1. 安装 `eslint-config-prettier`

eslint-config-prettier 是一个专门为解决 `ESLint` 和 `Prettier` 冲突的配置。它通过禁用所有与 `Prettier` 冲突的 `ESLint` 规则，确保 `Prettier` 接管格式化工作。

```
npm install --save-dev eslint-config-prettier

// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // 确保放在最后，用于禁用与 Prettier 冲突的规则
  ],
  rules: {
    // 自定义规则可以在这里添加
  },
};
```

2. 使用 `eslint-plugin-prettier`  
   eslint-plugin-prettier 可以将 Prettier 的格式化规则直接作为 ESLint 规则运行。这样，ESLint 不仅负责代码风格检查，还会基于 Prettier 的规则检查代码格式，统一检查和格式化行为。

```
npm install --save-dev eslint-plugin-prettier

// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Prettier 集成
  ],
  rules: {
    'prettier/prettier': 'error', // 确保 Prettier 的格式化错误会被 ESLint 捕获
  },
};
```
