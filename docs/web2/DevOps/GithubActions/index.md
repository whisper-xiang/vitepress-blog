# Github Actions

GitHub Actions 是 GitHub 提供的一种自动化软件开发工作流的持续集成/持续交付（CI/CD）工具。类似的工具还有微软的 DevOps、GitLab CI、Circle CI、Travis CI 等。

持续集成过程由多个操作组成，例如代码获取、测试运行、远程服务器登录和第三方服务发布等。GitHub 将这些操作称为 actions。

如果需要某个 action，无需编写复杂的脚本，可以直接引用他人编写的 action，整个持续集成过程因此变成了一个 actions 的组合。

GitHub Actions 的最大特点是可以直接在 GitHub 仓库中配置和运行，支持与 GitHub 仓库的深度集成。

## 概念

- Workflow（工作流）： 是一个自动化流程，定义了需要执行的一系列任务。它可以在特定事件触发时运行，例如推送代码或创建拉取请求。
- Job（任务）： 一个工作流可以包含多个 job，每个 job 代表一组任务。不同的 job 可以并行运行，也可以指定执行顺序。
- Step（步骤）： 每个 job 由多个步骤组成，每个步骤执行一个命令或操作。
- Runner（执行器）： 是运行 job 的环境。GitHub 提供托管的 runner，也可以使用自托管的 runner。
