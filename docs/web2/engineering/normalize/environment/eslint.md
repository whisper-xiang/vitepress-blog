# ESLint

## .eslintrc.js

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

## `eslint.config.js`

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
