# Monorepo 单一存储库（又称整体存储库）

利用单一仓库来管理多个 packages 的一种策略或手段，与其相对的是我们接触最多的 Multirepo。

- Monorepo 目录中除了会有公共的 package.json 依赖以外，在每个 sub-package 子包下面，也会有其特有的 package.json 依赖。
- Multirepo 更倾向与在项目制中，将一个个项目使用不同的仓库进行隔离，每一个项目下使用独有的 package.json 来管理依赖。

monorepo 最引人注目的好处之一是它能够简化版本控制。

在传统的多存储库设置中，每个项目或组件都有自己的存储库，这通常会导致版本控制冲突，并使跟踪项目之间的更改变得困难。使用 monorepo，您 ​​ 的所有代码都位于一个位置，从而可以更轻松地管理版本并维护一致的历史记录。

## 是什么

## 为什么

## 怎么做

## 优缺点

## 使用场景

身为前端工程师，或许你很常听到别人说用 monorepo 的好处很多。以前端来说，Lerna、Nx，以及 Turborepo，都是社群许多人会用的选择。多数大公司的前端基础建设团队(frontend infra team) 都会有专职在负责 monorepo。但是什么是 monorepo? 为什么要用 monorepo? 好处是什么? 在这一期我们将与大家聊这个主题。

所谓的 monorepo，是由 mono 跟 repo 组成的，mono 在英文的字首有单一的意思，而 repo 就是 repository 也就是程式码库，所以组合起来 monorepo，就是指用单一程式码库，来存放不同项目的程式码管理模式。相对来说，假如把不同项目，放在不同的程式码库，会被称为 polyrepo。

在了解完 monorepo 的基本定义，下个问题要问的是，它解决了 polyrepo 的什么问题? Turborepo 官方文件的说明范例，非常浅显易懂，这边摘要给大家

在 polyrepo 的模式下
你有三个不同的程式码库：一个是应用程式(app)，一个是文件(docs)，还有一个是共用的工具(shared-utils)。因为想要共用 shared-utils，我们需要把它发布到 npm 上，让 app 和 docs 安装并都依赖 shared-utils。假设 shared-utils 有个 bug，这个 bug 对 app 和 docs 都造成问题。当你修完这个 bug 之后，需要这样做：

在 shared-utils 提交一个修复 bug 的更改
在 shared-utils 内执行发布任务，将新版本发布到 npm
在 app 更新 shared-utils 的版本
在 docs 中也做同样的版本更新
然后 app 和 docs 才能准备部署
如果有越来越多的应用程式依赖 shared-utils，这个流程就会变得更长更繁琐。

假如用 monorepo
shared-utils 与 app 和 docs 在同一个程式码库中。这使得过程变得非常简单：

在 shared-utils 中提交一个修复 bug 的更新
app 和 docs 就准备好可以部署
用 monorepo 代表不需要进行版本控制，因为 app 和 docs 不依赖 npm 中的 shared-utils 版本，而是依赖 monorepo 中的版本。

从上面得例子，可以看到 monorepo 显而易见的好处是，共享程式码变很简单，同时能做到原子化更改，在更改共用的程式码时，同时可以在同一个更新中，修改依赖该程式码的应用程式，这样做可以避免在多个程式码库之间协调更新的麻烦。

此外，因为都在同一个程式码库、依赖单一的版本，可以减少应用程式之间的不一致性。即使是不经常更新的应用程式，也能跟最新版本。这对开发人员的负担，会明显小很多。

为什么不把所有程式码都放在一个程式码库
读到这边你可能会问，那为什么我们不把所有程式码都放在一个程式码库，只有一个超大的项目，不用分项目，这样也可以做到共享，为什么还要 monorepo 这种种架构呢?

单纯把程式码放在一起(code collocation) 确实可以轻易共享，且做到依赖单一版本并，但也有显而易见的问题，包含执行不必要的测试，在单纯的程式码并置中，即使更改和某些项目无关，整个程式码库的所有测试都会被执行。这就好像为了一个小变动，让所有不相关的专案也受到影响。

此外，这也会让程式码相对没边界，如果一个团队的开发者修改了另一个团队的程式码，可能会引入错误或不一致。因此，我们需要一个架构，让我们享有程式码并置(code collocation) 好处，同时避免其坏处，monorepo 即是能做到这样的解决方案。

以上是针对 monorepo 的介绍，以及聊了为什么要 monerepo。基本上现在多数的科技大厂都是走 monorepo 的模式，假如你还没用过，推荐可以试试上面有提到的 Lerna、Nx 或 Monorepo。

https://www.aviator.co/blog/what-is-a-monorepo-and-why-use-one/#
