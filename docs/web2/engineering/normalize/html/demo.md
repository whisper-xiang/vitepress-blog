# 语义化标签 demo

<body>
<header>
<h1>我的博客</h1>
</header>

<nav>
<ul>
<li><a href="#">首页</a></li>
<li><a href="#">关于我</a></li>
<li><a href="#">博客</a></li>
<li><a href="#">联系我</a></li>
</ul>
</nav>

<main>
<article>
<header>
<h2>HTML5 语义化标签简介</h2>
<p>
发表于
<time datetime="2024-09-09">2024年9月9日</time>
| 分类：
<a href="#">前端开发</a>
</p>
</header>

<p>
在这篇文章中，我们将学习如何使用HTML5的语义化标签来构建更加结构化和可访问的网页。HTML5引入了许多新标签，目的是让文档结构更加清晰。
</p>

<section>
<h3>常见语义化标签</h3>
<p>HTML5 提供了以下常见的语义化标签：</p>
<ul>
<li>
  <strong>&lt;header&gt;</strong>
  ：头部区域，通常用于显示标题和导航。
</li>
<li>
  <strong>&lt;nav&gt;</strong>
  ：导航区域。
</li>
<li>
  <strong>&lt;section&gt;</strong>
  ：文档中的独立部分。
</li>
<li>
  <strong>&lt;article&gt;</strong>
  ：表示独立的文章内容。
</li>
<li>
  <strong>&lt;aside&gt;</strong>
  ：侧边栏或附加信息。
</li>
<li>
  <strong>&lt;footer&gt;</strong>
  ：底部区域，通常包含版权或联系信息。
</li>
</ul>
</section>

<section>
<h3>HTML 表格示例</h3>
<table>
<caption>前端开发课程</caption>
<thead>
  <tr>
    <th>课程名称</th>
    <th>时长</th>
    <th>难度</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>HTML 基础</td>
    <td>5小时</td>
    <td>初级</td>
  </tr>
  <tr>
    <td>CSS 入门</td>
    <td>8小时</td>
    <td>初级</td>
  </tr>
  <tr>
    <td>JavaScript 高级</td>
    <td>15小时</td>
    <td>高级</td>
  </tr>
</tbody>
</table>
</section>

<section>
<h3>嵌入媒体</h3>
<figure>
<img src="https://via.placeholder.com/600x300" alt="示例图片" />
<figcaption>这是一张示例图片。</figcaption>
</figure>

<audio controls>
<source src="" type="audio/mp3" />
您的浏览器不支持音频播放。
</audio>

<video controls width="100%">
<source src="" type="video/mp4" />
您的浏览器不支持视频播放。
</video>
</section>

<footer>
<p>作者：张三</p>
</footer>
</article>

<aside>
<h3>关于我</h3>
<p>我是一个前端开发工程师，喜欢分享技术文章和编程技巧。</p>

<h3>联系我们</h3>
<form>
<label for="name">姓名：</label>
<input type="text" id="name" name="name" />
<br />
<br />

<label for="email">邮箱：</label>
<input type="email" id="email" name="email" />
<br />
<br />

<label for="message">消息：</label>
<br />
<textarea id="message" name="message" rows="4"></textarea>
<br />
<br />

<button type="submit">提交</button>

</form>
</aside>
</main>

<footer>
<p>&copy; 2024 我的博客 | 版权所有</p>
</footer>
</body>

## 源码

```html
<body>
  <header>
    <h1>我的博客</h1>
  </header>

  <nav>
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">关于我</a></li>
      <li><a href="#">博客</a></li>
      <li><a href="#">联系我</a></li>
    </ul>
  </nav>

  <main>
    <article>
      <header>
        <h2>HTML5 语义化标签简介</h2>
        <p>
          发表于
          <time datetime="2024-09-09">2024年9月9日</time>
          | 分类：
          <a href="#">前端开发</a>
        </p>
      </header>

      <p>
        在这篇文章中，我们将学习如何使用HTML5的语义化标签来构建更加结构化和可访问的网页。HTML5引入了许多新标签，目的是让文档结构更加清晰。
      </p>

      <section>
        <h3>常见语义化标签</h3>
        <p>HTML5 提供了以下常见的语义化标签：</p>
        <ul>
          <li>
            <strong>&lt;header&gt;</strong>
            ：头部区域，通常用于显示标题和导航。
          </li>
          <li>
            <strong>&lt;nav&gt;</strong>
            ：导航区域。
          </li>
          <li>
            <strong>&lt;section&gt;</strong>
            ：文档中的独立部分。
          </li>
          <li>
            <strong>&lt;article&gt;</strong>
            ：表示独立的文章内容。
          </li>
          <li>
            <strong>&lt;aside&gt;</strong>
            ：侧边栏或附加信息。
          </li>
          <li>
            <strong>&lt;footer&gt;</strong>
            ：底部区域，通常包含版权或联系信息。
          </li>
        </ul>
      </section>

      <section>
        <h3>HTML 表格示例</h3>
        <table>
          <caption>前端开发课程</caption>
          <thead>
            <tr>
              <th>课程名称</th>
              <th>时长</th>
              <th>难度</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML 基础</td>
              <td>5小时</td>
              <td>初级</td>
            </tr>
            <tr>
              <td>CSS 入门</td>
              <td>8小时</td>
              <td>初级</td>
            </tr>
            <tr>
              <td>JavaScript 高级</td>
              <td>15小时</td>
              <td>高级</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>嵌入媒体</h3>
        <figure>
          <img src="https://via.placeholder.com/600x300" alt="示例图片" />
          <figcaption>这是一张示例图片。</figcaption>
        </figure>

        <audio controls>
          <source src="" type="audio/mp3" />
          您的浏览器不支持音频播放。
        </audio>

        <video controls width="100%">
          <source src="" type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
      </section>

      <footer>
        <p>作者：张三</p>
      </footer>
    </article>

    <aside>
      <h3>关于我</h3>
      <p>我是一个前端开发工程师，喜欢分享技术文章和编程技巧。</p>

      <h3>联系我们</h3>
      <form>
        <label for="name">姓名：</label>
        <input type="text" id="name" name="name" />
        <br />
        <br />

        <label for="email">邮箱：</label>
        <input type="email" id="email" name="email" />
        <br />
        <br />

        <label for="message">消息：</label>
        <br />
        <textarea id="message" name="message" rows="4"></textarea>
        <br />
        <br />

        <button type="submit">提交</button>
      </form>
    </aside>
  </main>

  <footer>
    <p>&copy; 2024 我的博客 | 版权所有</p>
  </footer>
</body>
```
