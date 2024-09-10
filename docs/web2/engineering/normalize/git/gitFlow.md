# Git

- 现状：
  - 分支混乱，且发布分支太过随意，功能 B 分支未拉取已发布的功能 A 分支代码， 导致线上的分支 A 的功能丢失。
  - 未建立合理 PR 流程，导致功能分支越来越多。
  - 未有合理的 Tag，导致在代码层面没有版本概念。

方案：

- gitFlow
  - **开始新功能**：
    - 从  `develop`  分支创建一个  `feature/awesome-feature`  分支。
    - 在  `feature/awesome-feature`  分支上开发新功能。
    - 功能完成后，将  `feature/awesome-feature`  分支合并回  `develop`  分支，并删除  `feature/awesome-feature`  分支。
  - **准备发布**：
    - 从  `develop`  分支创建一个  `release/1.0.0`  分支。
    - 在  `release/1.0.0`  分支上进行最后的 bug 修复和发布准备。
    - 发布准备完成后，将  `release/1.0.0`  分支合并到  `master`  分支，并打上  `1.0.0`  的版本标签，同时将其合并回  `develop`  分支以保持同步。
  - **修复紧急问题**：
    - 从  `master`  分支创建一个  `hotfix/urgent-bug`  分支。
    - 在  `hotfix/urgent-bug`  分支上修复紧急问题。
    - 修复完成后，将  `hotfix/urgent-bug`  分支合并回  `master`  分支，并打上新版本标签，然后合并回  `develop`  分支。

基于 gitflow 修改：

- master、feature、release
  - master： 主分支，线上代码。
  - feature：功能分支。 基于 master 创建。
  - release: 发布分支，发布后合并至 master，且删除
  - hotfix: bug 修复
- 多个功能分支并行的 case：
  - feature/A && feature/b
  - 基于各自分支开发，dev 随便部署， test 以及 prod 需要基于如上分支创建 release 分支，合并 master 分支代码，打 tag 发布。
  - 并在 release 中手动填写本次版本的主要内容。
  - 测试完成后，发布并合并到 master。
- 分支权限：
  - master、develop 都只有拉取权限， 合并代码必须经过 PR 流程。 好处在于，方便他人进行代码 review，以及之后自动删除该功能分支，避免分支无限累积。
