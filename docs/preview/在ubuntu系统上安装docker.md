---
title: 在ubuntu系统上安装docker
tags:
  - Docker
  - Ubuntu
  - Linux
  - 容器化
createTime: 2024/03/27 9:00:00
permalink: /article/install-docker-on-ubuntu/
---

# 安装docker

```
sudo apt update
sudo apt install curl
curl -fsSL https://test.docker.com -o test-docker.sh
sudo sh test-docker.sh

docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1

npm 代理服务器的安装


```

参考文章

https://www.runoob.com/docker/ubuntu-docker-install.html

