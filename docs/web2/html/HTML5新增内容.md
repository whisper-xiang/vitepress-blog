# HTML5 新增内容

> HTML5 是对 HTML 标准的第五次修订。其主要的目标是将互联网语义化，以便更好地被人类和机器阅读，并同时提供更好地支持各种媒体的嵌入。HTML5 的语法是向后兼容的。

## 与 HTML 4 的不同之处

- 文件类型声明（<!DOCTYPE>）仅有一型：`<!DOCTYPE HTML>`。
- 新的解析顺序：不再基于 SGML。
- 新的元素：section, video, progress, nav, meter, time, aside, canvas, command, datalist, details, embed, figcaption, figure, footer, header, hgroup, keygen, mark, output, rp, rt, ruby, source, summary, wbr。
- input 元素的新类型：date, email, url 等等。
- 新的属性：ping（用于 a 与 area）, charset（用于 meta）, async（用于 script）。
- 全域属性：id, tabindex, repeat。
- 新的全域属性：contenteditable, contextmenu, draggable, dropzone, hidden, spellcheck。
- 移除元素：acronym, applet, basefont, big, center, dir, font, frame, frameset, isindex, noframes, strike, tt。

## 新增标签

HTML 5 提供了一些新的元素和属性，反映典型的现代用法网站。其中有些是技术上类似`<div>`和`<span>`标签，但有一定含义，例如`<nav>`（网站导航块）和`<footer>` `<audio>`和`<video>`标记。

## 移除的标签

一些过时的 HTML 4 标记将取消，其中包括纯粹用作显示效果的标记，如`<font>`和`<center>`，因为它们已经被 CSS 取代。还有一些通过 DOM 的网络行为。

## 修改的标签

尽管和 SGML 在标记上的相似性，HTML5 的句法并不再基于它了，而是被设计成向后兼容对老版本的 HTML 的解析。它有一个新的开始列看起来就像 SGML 的文档类型声明，`<!DOCTYPE HTML>`，这会触发和标准兼容的渲染模式。在 2009 年 1 月 5 号，HTML5 添加了 Web Form 2.0 的内容，html5 开始发展起来。

## 无障碍（Accessibility）

为了使 HTML5 的新元素或新属性获取最大化的兼容性，开发人员需要附加一点额外补助，或者有些特性根本没有被任何浏览器实现，或者浏览器根本不支持补助技术。因此有些特殊的 HTML5 特性根本不能使用。更多细节可参见 HTML5 Accessibility（无障碍）

## 新应用程序接口（API）

除了原先的 DOM 接口，HTML5 增加了更多样化的 API:

- HTML Geolocation
- HTML Drag and Drop
- HTML Local Storage
- HTML Application Cache
- HTML Web Workers
- HTML SSE
- HTML Canvas/WebGL
- HTML Audio/Video

...
