---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 轻语
  text: 日积跬步以至千里
  tagline: 希望每个滔滔不绝都能 言之有物
  image:
    src: /avatar.png
    alt: 轻语
  actions:
    # - text: 茂茂物语
    #   link: https://notes.fe-mm.com
    - text: 前端导航
      link: /web2/javascript/00-简介
      # link: /nav/
      # theme: alt
    # - text: mmPlayer
    #   link: https://netease-music.fe-mm.com
    # - text: 测试页
    #   link: /test
    #   theme: alt
features:
  - icon: 📖
    title: 前端
    details: 整理前端常用知识点<br />如有异议，你说的对
    link: /web2/javascript/00-简介
    linkText: 前端常用知识

  - icon: 📘
    title: 笔记
    details: 日常笔记和读书感悟<small></small><br />还有一些对世界的看法
    link: /notes/finance/
    linkText: 悟已往之不谏，知来者之可追
  # - icon: 📖
  #   title: 前端
  #   details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
  #   link: https://notes.fe-mm.com/fe/javascript/types
  #   linkText: 前端常用知识
  # - icon: 📘
  #   title: 源码阅读
  #   details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
  #   link: https://notes.fe-mm.com/analysis/utils/only-allow
  #   linkText: 源码阅读
  # - icon: 💡
  #   title: Workflow
  #   details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
  #   link: https://notes.fe-mm.com/workflow/utils/library
  #   linkText: 常用工具库
  # - icon: 🧰
  #   title: 提效工具
  #   details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
  #   link: https://notes.fe-mm.com/efficiency/online-tools
  #   linkText: 提效工具
  # - icon: 🐞
  #   title: 踩坑记录
  #   details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
  #   link: https://notes.fe-mm.com/pit/npm
  #   linkText: 踩坑记录
  # - icon: 💯
  #   title: 吾志所向，一往无前。
  #   details: '<small class="bottom-small">一个想躺平的小开发</small>'
  #   link: https://notes.fe-mm.com/mao
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(360deg);
  transition: transform 2s 0.2s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
