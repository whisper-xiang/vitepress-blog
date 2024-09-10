# TypeScript 配置

`npm init vue@latest` 命令会创建一个基于 `Vue.js` 的 `TypeScript` 项目模板，其中包含了三个 `TypeScript` 配置文件：`tsconfig.json`、`tsconfig.node.json` 和 `tsconfig.app.json`。

其中，`tsconfig.json` 是项目的主要 `TypeScript` 配置文件，它引用了其他两个配置文件：

```json
{
  "extends": "./tsconfig.app.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue", "tests/**/*.ts", "tests/**/*.tsx"]
}
```

`tsconfig.node.json` 和 `tsconfig.app.json` 分别是用于 `Node.js`（用于 Vite 本身） 和应用程序的 `TypeScript` 配置文件。它们的作用是为不同的构建目标提供不同的 `TypeScript` 编译选项。

在这三个配置文件中，`tsconfig.app.json` 是用于应用程序的配置文件，其中包含了一些 `Angular` 相关的选项，例如 resolveJsonModule。这个选项用于启用 `TypeScript` 的 JSON 模块解析功能，它允许您在 `TypeScript` 代码中导入 JSON 文件。但是，由于这个选项是 `Angular` 特有的，因此在 Vue.js 项目中可能会导致编辑器报错。

如果您不打算使用 `Angular`，可以将 `tsconfig.app.json` 文件删除，或者将其中的 `Angular` 相关选项删除。这样做不会影响您的 `Vue.js` 项目，因为它们并不依赖于 `Angular`。

总之，这些配置文件的作用是为 `TypeScript` 提供编译选项，以便您可以在 `Vue.js` 项目中使用 `TypeScript`。如果您不打算使用 `TypeScript`，可以将这些文件删除。

## tsconfig.app.json

```json
{
  "compilerOptions": {
    "allowJs": true,
    "target": "ESNext",
    "useDefineForClassFields": true,
    "allowImportingTsExtensions": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "types": ["vite/client"],

    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    "jsx": "preserve",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["ESNext", "DOM"],
    "skipLibCheck": true,
    "noEmit": true,
    "baseUrl": "./",
    "paths": {
      "@": ["src"],
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "build/**/*.ts",
    "build/**/*.d.ts",
    "vite.config.ts",
    "vite/client",
    "vite-plugin-svg-icons/client",
    "node"
  ],
  "exclude": ["node_modules", "dist", "**/*.js"]
}
```

## tsconfig.node.json

```json
{
  "compilerOptions": {
    "module": "CommonJS", // Node.js 默认使用的模块系统
    "target": "ES2020", // ECMAScript 目标版本
    "outDir": "./dist", // 输出目录
    "moduleResolution": "node", // 指定模块解析策略为 node 风格
    "lib": ["ES2020"], // 使用的库，包含 ECMAScript 2020 特性
    "esModuleInterop": true, // 允许与 CommonJS 模块进行互操作
    "skipLibCheck": true, // 跳过库的类型检查以提高性能
    "forceConsistentCasingInFileNames": true // 确保文件名区分大小写
  },
  "include": ["server/**/*.ts"], // 包含 Node.js 代码所在的目录
  "exclude": ["node_modules"] // 排除不需要编译的目录
}
```
