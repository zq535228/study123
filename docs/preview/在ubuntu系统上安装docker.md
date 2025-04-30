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
curl -sS -O https://kejilion.pro/kejilion.sh && chmod +x kejilion.sh && ./kejilion.sh

```
apt-get update
```

sudo apt update
sudo apt install curl
curl -fsSL https://test.docker.com -o test-docker.sh
sudo sh test-docker.sh

docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1

npm 代理服务器的安装

Create a docker-compose.yml file similar to this:
yml
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt


```

参考文章

https://www.runoob.com/docker/ubuntu-docker-install.html

