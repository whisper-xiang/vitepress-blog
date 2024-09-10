# stylelint

Stylelint 是一个强大的 CSS、Sass、Less 等样式语言的代码质量检查工具。它通过静态代码分析的方式来确保样式符合团队的代码风格规范，帮助开发者发现并修复样式中的错误或不规范的写法。

.stylelintrc 文件用于定义 Stylelint 的配置选项，包括规则集、插件、忽略规则等。这个文件可以有多种格式，包括 JSON、YAML、JS 文件等，常见的文件名是 .stylelintrc，或者 .stylelintrc.json、.stylelintrc.yml、stylelint.config.js。

## .stylelintrc.js

```js
// @see: https://stylelint.io

module.exports = {
  root: true,
  // 继承某些已有的规则
  extends: [
    'stylelint-config-standard', // 配置 stylelint 拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-standard-scss', // 配置 stylelint scss 插件
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
    'stylelint-config-recess-order', // 配置 stylelint css 属性书写顺序插件,
  ],
  overrides: [
    // 扫描 .vue/html 文件中的 <style> 标签内的样式
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'function-url-quotes': 'always', // URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'color-hex-length': 'long', // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
    'rule-empty-line-before': 'never', // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行)"
    'font-family-no-missing-generic-family-keyword': null, // 禁止在字体族名称列表中缺少通用字体族关键字
    'scss/at-import-partial-extension': null, // 解决不能使用 @import 引入 scss 文件
    'property-no-unknown': null, // 禁止未知的属性
    'no-empty-source': null, // 禁止空源码
    'selector-class-pattern': null, // 强制选择器类名的格式
    'value-no-vendor-prefix': null, // 关闭 vendor-prefix (为了解决多行省略 -webkit-box)
    'no-descending-specificity': null, // 不允许较低特异性的选择器出现在覆盖较高特异性的选择器
    'value-keyword-case': null, // 解决在 scss 中使用 v-bind 大写单词报错
    'media-query-no-invalid': null, // 媒体查询中不允许无效的媒体功能名称
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'],
      },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}
```

## .stylelintignore

```
/dist/*
/public/*
public/*
stats.html

```

## Stylelint 与 Prettier 的冲突

Stylelint 和 Prettier 在某些方面可能存在冲突（如格式化风格），通常可以通过引入 stylelint-config-prettier 来禁用那些和 Prettier 格式化风格相冲突的规则，使得它们能够一起工作。
