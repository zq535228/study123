---
title: VuePress 部署 Github Pages 踩坑指南
tags:
  - vuepress
  - github-pages
  - 部署
createTime: 2025/03/24 19:52:18
permalink: /article/vuepress-github-pages/
---

第一次使用 VuePress 去部署 Github page，折腾的时间比较长，总结一下坑点。

我的场景：

采用https://<USERNAME>.github.io/<REPO>的形式
自定义二级域名
Travis CI 自动部署
访问地址：https://snippet.noxxxx.com

文档即仓库
我的仓库中只有在根目录下的项目介绍 README.md 和 VuePress 的整个工程。按照 VuePress 的文档我需要配置 .vuepress/config.js下配置 base: /snippet/, 但是如果你配置了自定义域名，这一步就不需要配置!

自定义域名
我使用了二级域名来访问 Github Page。按照 Github Page 的文档，需要在仓库下面建立 CNAME 文件，文件内写上对应的二级域名，可能是我的 CI 配置写的不对，所以 build 完的文件推送到仓库后就会删除 CNAME 文件，因此需要在 .vuepress/public/CNAME 下写你的域名，VuePress 构建后，CNAME 文件会自动回到根目录。

文件路径
VuePress 的路径都采用 /xxx/xxx/ 的方式，对应的是文件夹的名字，因此需要注意大小写，否则将访问失败，需要细心一点。