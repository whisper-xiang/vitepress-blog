# 执行上下文中的 this

this 是 javascript 中的一个关键字，其使用方法类似于一个变量，是执行上下文中一个重要组成部分，代表了调用了当前执行山下文的对象的引用。 其作用是可以在函数体内部获取当前的运行环境。

## this 基本规则

每个函数的 this 是在调用的时候基于函数的执行环境绑定的，this 的指向完全取决于函数的调用位置。

- **在全局环境下，this 始终指向全局对象（window）, 无论是否严格模式；**
- **普通函数内部的 this 分两种情况，严格模式和非严格模式。**
  - 非严格模式下，this 默认指向全局对象 window
  - 严格模式下， this 为 undefined
- **对象内部方法的 this 指向调用这些方法的对象**
  - 函数的定义位置不影响其 this 指向，this 指向只和调用函数的对象有关；
  - **多层嵌套的对象，内部方法的 this 指向离被调用函数最近的对象（window 也是对象，其内部对象调用方法的 this 指向内部对象， 而非 window）。**

```javascript
const obj = {
  a: 10,
  b: 20,
  add: function () {
    return this.a + this.b
  },
}

console.log(obj.add()) // 30
const add = obj.add
console.log(add()) // NaN
```

- **原型链中的方法的 this 仍然指向调用它的对象**

```javascript
const obj = {
  a: 10,
  b: 20,
}
const prototypeObj = {
  add: function () {
    return this.a + this.b
  },
}
Object.setPrototypeOf(obj, prototypeObj)
console.log(obj.add()) // 30
```

- **构造函数中的 this 与被创建的新对象绑定。**

```javascript
function Fun() {
  this.a = 10
}

const fun = new Fun()
console.log(fun.a) // 10
```

- **当函数通过 Function 对象的原型中继承的方法 call() 和 apply() 方法调用时， 其函数内部的 this 值可绑定到 call() & apply() 方法指定的第一个对象上， 如果第一个参数不是对象，JavaScript 内部会尝试将其转换成对象然后指向它。(见后续代码)**
- ** 通过 bind 方法绑定后， 函数将被永远绑定在其第一个参数对象上， 而无论其在什么情况下被调用。（见后续代码） **
- **当函数被当做监听事件处理函数时， 其 this 指向触发该事件的元素（针对于 addEventListener 事件） **

```javascript
const btn = document.getElementById('testId')
btn.addEventListener('click', function () {
  console.log(this) // 按钮
})
```

- **内联事件中的 this 指向分两种情况：**
  - 当代码被内联处理函数调用时，它的 this 指向监听器所在的 DOM 元素

```javascript
<button onclick="console.log(this)">按钮</button> // 输出该DOM节点
```

- 当代码被包括在函数内部执行时，其 this 指向等同于 函数直接调用的情况，即在非严格模式指向全局对象 window， 在严格模式指向 undefined

```javascript
;<button onclick="clickFun()">按钮</button>

function clickFun() {
  console.log(this) // window
}
```

- **对于延时函数内部的回调函数的 this 指向全局对象 window（当然可以通过 bind 方法改变其内部函数的 this 指向）**

```javascript
function Fun() {
  this.a = 10
  this.method = function () {
    setTimeout(function () {
      console.log(this) // window
    }, 1000)
  }
}

const fun = new Fun()
fun.method()
```

- **由于箭头函数不绑定 this， 它会捕获其所在（即定义的位置）上下文的 this 值， 作为自己的 this 值，所以 call() / apply() / bind() 方法对于箭头函数来说只是传入参数，对它的 this 毫无影响。**

```javascript
function Fun() {
  this.a = 10
  this.method = function () {
    setTimeout(() => {
      console.log(this) // Fun {a: 10, method: ƒ}
    }, 1000)
  }
}

const fun = new Fun()
fun.method()
```

## **改变 this 指向**

除了隐式绑定 this 的方式，还能够通过显示绑定的方式，通过 call、apply、bind 方式改变 this 指向。

### 1. call()

call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

```javascript
function method(val1, val2) {
  return this.a + this.b + val1 + val2
}

const obj = {
  a: 1,
  b: 2,
}

console.log(method.call(obj, 3, 4)) // 10
```

### 2. apply()

apply() 方法调用一个具有给定 this 值的函数，以及以一个数组（或类数组对象）的形式提供的参数。

```javascript
function method(val1, val2) {
  return this.a + this.b + val1 + val2
}

const obj = {
  a: 1,
  b: 2,
}

console.log(method.apply(obj, [3, 4])) // 10
```

### 3. bind()

bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```javascript
function method(val1, val2) {
  return this.a + this.b + val1 + val2
}

const obj = {
  a: 1,
  b: 2,
}

const bindMethod = method.bind(obj, 3, 4)
console.log(bindMethod) // [Function: bound method]
console.log(bindMethod()) // 10
```

### 扩展

1.  call() 和 apply()的区别是 call()方法接受的是参数列表，而 apply()方法接受的是一个参数数组；
2.  bind 返回的是一个绑定函数，而 call 和 apply 返回的是运行结果；
3.  多次 bind() 是无效的，只会绑定到第一次调用的对象上；
4.  call() / apply() / bind() 方法对于箭头函数来说只是传入参数，对它的 this 毫无影响。
