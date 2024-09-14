# ESLint 规范

## .eslintrc.js

.eslintrc.js 是 ESLint 的传统配置文件格式之一，它可以是多种格式（如 .eslintrc.json, .eslintrc.yaml），但 .js 文件允许在配置中使用 JavaScript 语法。

```
// @see: http://eslint.cn
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // 指定如何解析语法
  parser: 'vue-eslint-parser',
  // 优先级低于 parse 的语法解析配置
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  // 继承某些已有的规则
  extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  /**
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
    'prefer-const': 'off', // 使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    'no-use-before-define': 'off', // 禁止在 函数/类/变量 定义之前使用它们

    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/ban-ts-comment': 'error', // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
    '@typescript-eslint/no-inferrable-types': 'off', // 可以轻松推断的显式类型可能会增加不必要的冗长
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
    '@typescript-eslint/no-var-requires': 'off', // 允许使用 require() 函数导入模块
    '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
    '@typescript-eslint/no-non-null-assertion': 'off', // 不允许使用后缀运算符的非空断言(!)

    // vue (https://eslint.vuejs.org/rules)
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该no-unused-vars规则时有效
    'vue/v-slot-style': 'error', // 强制执行 v-slot 指令样式
    'vue/no-mutating-props': 'error', // 不允许改变组件 prop
    'vue/custom-event-name-casing': 'error', // 为自定义事件名称强制使用特定大小写
    'vue/html-closing-bracket-newline': 'error', // 在标签的右括号之前要求或禁止换行
    'vue/attribute-hyphenation': 'error', // 对模板中的自定义组件强制执行属性命名样式：my-prop="prop"
    'vue/attributes-order': 'off', // vue api使用顺序，强制执行属性顺序
    'vue/no-v-html': 'off', // 禁止使用 v-html
    'vue/require-default-prop': 'off', // 此规则要求为每个 prop 为必填时，必须提供默认值
    'vue/multi-word-component-names': 'off' // 要求组件名称始终为 “-” 链接的单词
  }
}

```

## eslint.config.js

eslint.config.js 是 ESLint 未来的配置标准（自 ESLint v8.21.0 引入），其目标是简化配置并改善性能。这种配置方式目前是可选的，但将来可能会取代 .eslintrc.js。

```js
// eslint.config.js
import vue from 'eslint-plugin-vue'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import vueParser from 'vue-eslint-parser'
import typescriptParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['node_modules/**', 'dist/**'], // 忽略的文件或目录
  },
  {
    files: ['**/*.ts', '**/*.vue', '**/*.js'], // 指定 ESLint 处理的文件类型
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 2020,
        sourceType: 'module',
        jsxPragma: 'React',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // 添加全局变量，如在 Node.js 环境中
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': typescriptEslint,
      prettier,
    },
    rules: {
      // eslint 规则
      'no-var': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'prefer-const': 'off',
      'no-use-before-define': 'off',

      // typescript-eslint 规则
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',

      // vue 规则
      'vue/script-setup-uses-vars': 'error',
      'vue/v-slot-style': 'error',
      'vue/no-mutating-props': 'error',
      'vue/custom-event-name-casing': 'error',
      'vue/html-closing-bracket-newline': 'error',
      'vue/attribute-hyphenation': 'error',
      'vue/attributes-order': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
]
```

## 相较

| 特性           | .eslintrc.js                            | eslint.config.js                        |
| -------------- | --------------------------------------- | --------------------------------------- |
| 引入版本       | 已使用多年的传统配置格式                | 自 ESLint v8.21.0 引入的新的配置格式    |
| 支持的语法     | CommonJS 语法(module.exports)           | ES Module 语法(import/export)           |
| 可读性和模块化 | 复杂项目中可能出现冗长的配置            | 支持更模块化、结构化的配置方式          |
| 未来支持       | 可能会被逐渐取代                        | 未来的标准配置格式                      |
| 灵活性         | 支持 JavaScript 动态语法,但结构较为固定 | 更灵活的配置方式,可以动态加载和组合配置 |

## .eslintignore

```
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
/src/mock/*
stats.html

```
