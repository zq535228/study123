# GitHub Pages 自定义域名配置问题及解决方案

## 问题描述

在使用 GitHub Pages 部署网站时，经常会遇到一个问题：每次部署后，自定义域名（Custom Domain）的配置都会丢失，需要重新设置。这个问题困扰着很多开发者，本文将解释其原因并提供解决方案。

## 问题原因

GitHub Pages 的自定义域名是通过在 `gh-pages` 分支中创建一个名为 `CNAME` 的文件来实现的。这个文件包含了你的自定义域名。然而，每次部署时，GitHub Actions 都会重新构建并覆盖 `gh-pages` 分支的内容，导致 `CNAME` 文件被删除。

## 解决方案

### 1. 在部署工作流中添加 CNAME 文件

我们可以在 GitHub Actions 的工作流配置中添加一个步骤，确保每次部署后都重新创建 `CNAME` 文件。以下是配置示例：

```yaml
# 在部署步骤后添加
- name: Create CNAME file
  run: |
    echo "your-domain.com" > docs/.vuepress/dist/CNAME
  if: success()
```

### 2. 配置说明

- 这个步骤会在部署完成后执行
- `if: success()` 确保只有在部署成功后才创建 CNAME 文件
- 将 `your-domain.com` 替换为你的实际域名

## 注意事项

1. 确保在 GitHub 仓库设置中已经正确配置了自定义域名
2. 在 DNS 提供商处正确配置了域名解析
3. 如果使用了 HTTPS，确保 SSL 证书已经正确配置

## 总结

通过在工作流中添加创建 CNAME 文件的步骤，我们可以确保每次部署后自定义域名配置都能保持不变。这是一个简单但有效的解决方案，可以避免重复配置的麻烦。

## 参考资料

- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions) 