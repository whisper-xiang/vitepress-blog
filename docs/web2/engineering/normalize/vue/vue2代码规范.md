# vue2 代码规范

## 1 代码结构

```vue
<template>
    
  <div id="my-component">
        
    <DemoComponent />
      
  </div>
</template>

<script>
import DemoComponent from '../components/DemoComponent'

export default {
  name: 'MyComponent',
  components: {
    DemoComponent
  },
  mixins: [],
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {}
  created () {},
  mounted () {},
  destroyed () {},
  methods: {},
}
</script>

<style lang="scss" scoped>
#my-component  {
}
</style>
```

## 2 data

**组件的 data 必须是一个函数。**

```vue
// a.vue export default {   data () {     return {       foo: 'bar'     }   } }
```

## 3 prop

**Prop 定义应该尽量详细。**

```vue
export default {   props: {     status: {       type: String,       required: true,
      validator: function (value) {         return [           'syncing',            'synced',
          'version-conflict',           'error'         ].indexOf(value) !== -1       }     }   } }
```

## 4 computed

**应该把复杂计算属性分割为尽可能多的更简单的属性。** 小的、专注的计算属性减少了信息使用时的假设性限制，所以需求变更时也用不着那么多重构了。

```vue
// bad computed: {    price: function () {     
var basePrice = this.manufactureCost / (1 - this.profitMargin)     
return (  basePrice -  basePrice * (this.discountPercent || 0) )    }  } // good computed: {  
basePrice: function () {     return this.manufactureCost / (1 - this.profitMargin)   },  
discount: function () {     return this.basePrice * (this.discountPercent || 0)   },
  finalPrice: function () {     return this.basePrice - this.discount   } }
```

## 5 为 v-for 设置键值

**在组件上必须用 key 搭配 v-for**，以便维护内部组件及其子树的状态。

```vue
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id">
      {{ todo.text }}
  </li>
</ul>
```

## 6 v-if 和 v-for 互斥

**永远不要把 v-if 和 v-for 同时用在同一个元素上。**

```vue
<!-- bad：控制台报错 -->
<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id">
      {{ user.name }}
  </li>
</ul>
```

一般我们在两种常见的情况下会倾向于这样做：

- 为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。

```vue
computed: {   activeUsers: function () {     return this.users.filter((user) => {
      return user.isActive     })   } }

<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id">
      {{ user.name }}
  </li>
</ul>
```

- 为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)。

```
<!-- bad -->
<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id">
      {{ user.name }}
  </li>
</ul>

_<!-- good -->_
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id">
      {{ user.name }}
  </li>
</ul>
```

## 7 多个 attribute 的元素

多个 `attribute` 的元素应该分多行撰写，每个 `attribute` 一行。

```html
<!--  bad  -->
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo" />
<MyComponent foo="a" bar="b" baz="c" />

<!-- good -->
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo" />

<MyComponent foo="a" bar="b" baz="c" />
```

## 8 模板中简单的表达式

**组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。**
复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的**是什么**，而非**如何**计算那个值。而且计算属性和方法使得代码可以重用。

```vue
<!--  bad -->
{{
  fullName
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1)
    })
    .join(' ')
}}

<!--  better -->

<!-- 在模板中 -->
{{ normalizedFullName }}

<!-- 复杂表达式已经移入一个计算属性 -->
computed: {   normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)     }).join(' ')   } }
```

## 9 带引号的 attribute 值

**非空 HTML 特性值应该始终带双引号。**

```html
<!-- bad -->
<input type="text" />
<AppSidebar :style={width:sidebarWidth+'px'}>

<!-- good -->
<input type="text" />
<AppSidebar :style="{ width: sidebarWidth + 'px' }"></AppSidebar>
```

## 10 指令缩写

- **用 : 表示 v-bind:**
- **用 @ 表示 v-on:**
- **用 # 表示 v-slot:**

```html
<input :value="newTodoText" :placeholder="newTodoInstructions" />

<input @input="onInput" @focus="onFocus" />

<template #header>
    
  <h1>Here might be a page title</h1>
</template>

<template #footer>
    
  <p>Here's some contact info</p>
</template>
```
