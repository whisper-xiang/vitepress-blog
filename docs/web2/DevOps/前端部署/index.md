# 前端部署

npm run build 打包输出 dist 文件夹， 利用 nginx 起一个 web 服务器，将 dist 文件夹放到指定的路径下，配置下 nginx 访问路径，对于请求接口使用 proxy_pass 进行转发，解决跨域的问题。
更加高端一点的操作，是利用 CI/CD + Docker 进行自动化部署。

## 参考

- [一江东流水](https://juejin.cn/post/7316202725330796571)
- [前端部署第一篇](https://juejin.cn/post/7090745808428990472)
- [前端部署第二篇](https://juejin.cn/post/7250083673189253176)
