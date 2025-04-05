---
title: git如何清除一杯缓存的忽略中的列表
tags:
  - git
  - 缓存
  - 忽略
  - 列表
createTime: 2025-04-05 17:12:00
permalink: /article/git_clear_cache_ignore_list/
---


```

git rm -r --cached .
git add .
git commit -m "更新 .gitignore，移除 bin 目录"

```
