# JXS 书写规范

JXS（JavaScript XML）是 React 中用于描述 UI 结构的语法扩展。为了提高代码的可读性和维护性，建议遵循以下 JXS 书写规范：

## 1. **使用小写字母命名自定义组件**

- 自定义组件的名称应以大写字母开头，以区别于 HTML 原生元素（小写字母）。

  ```jsx
  // Good
  function MyComponent() {
    return <div>Hello</div>
  }

  // Bad
  function myComponent() {
    return <div>Hello</div>
  }
  ```

## 2. **每行最大字符限制**

- 每行代码应限制在一定字符数内（如 80 或 100 个字符），以提高可读性。可以根据需要换行。

  ```jsx
  // Good
  return <Component prop1="value1" prop2="value2" prop3="value3" />

  // Bad
  return <Component prop1="value1" prop2="value2" prop3="value3" />
  ```

## 3. **使用自闭合标签**

- 对于没有子元素的标签，使用自闭合标签，以提高代码的简洁性。

  ```jsx
  // Good
  return <img src="image.jpg" alt="description" />

  // Bad
  return <img src="image.jpg" alt="description"></img>
  ```

## 4. **缩进和格式化**

- 使用一致的缩进（通常使用 2 个或 4 个空格）来提高代码的可读性。
- 对于多行组件，应确保每一行都正确对齐。

  ```jsx
  // Good
  return (
    <div>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  )

  // Bad
  return (
    <div>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  )
  ```

## 5. **属性值使用双引号**

- 在 JXS 中，使用双引号为属性赋值。

  ```jsx
  // Good
  return <input type="text" placeholder="Enter text" />;

  // Bad
  return <input type=text placeholder='Enter text' />;
  ```

## 6. **避免行内样式**

- 尽量避免使用行内样式，应该将样式抽取到 CSS 文件或使用 CSS-in-JS 解决方案。

  ```jsx
  // Good
  return <div className="container">Hello</div>

  // Bad
  return <div style={{ color: 'red' }}>Hello</div>
  ```

## 7. **条件渲染**

- 使用简洁的条件渲染语法，如三元运算符或逻辑与运算符（`&&`），避免复杂的条件渲染结构。

  ```jsx
  // Good
  return isLoggedIn ? <Dashboard /> : <Login />

  // Bad
  if (isLoggedIn) {
    return <Dashboard />
  } else {
    return <Login />
  }
  ```

## 8. **保持 JSX 简洁**

- 每个组件应尽量保持简洁，避免在一个组件中渲染过多元素。如果组件变得复杂，可以考虑拆分成更小的子组件。

  ```jsx
  // Good
  function Header() {
    return <h1>Welcome</h1>
  }

  function App() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }

  // Bad
  function App() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>Some content...</p>
        <p>More content...</p>
        {/* ... */}
      </div>
    )
  }
  ```

## 9. **使用 PropTypes 或 TypeScript**

- 为组件的 props 添加 PropTypes 或使用 TypeScript 进行类型检查，以提高代码的可维护性和可读性。

  ```jsx
  import PropTypes from 'prop-types'

  function MyComponent({ title }) {
    return <h1>{title}</h1>
  }

  MyComponent.propTypes = {
    title: PropTypes.string.isRequired,
  }
  ```

## 10. **注释和文档**

- 在需要的地方添加注释，以说明组件的功能或逻辑，使用 JSDoc 进行文档注释。

  ```jsx
  /**
   * MyComponent 组件
   * @param {Object} props - 组件属性
   * @param {string} props.title - 组件标题
   * @returns {JSX.Element}
   */
  function MyComponent({ title }) {
    return <h1>{title}</h1>
  }
  ```

## 总结

遵循这些 JXS 书写规范可以提高代码的可读性、可维护性和一致性，有助于团队协作和项目管理。
