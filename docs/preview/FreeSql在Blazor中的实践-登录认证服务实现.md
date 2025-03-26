---
title: FreeSql在Blazor中的实践-登录认证服务实现
createTime: 2025/03/25 11:09:34
permalink: /article/przdlh4r/
---
# FreeSql在Blazor中的实践-登录认证服务实现

## 前言
本文主要介绍在Blazor项目中使用FreeSql实现一个简单的登录认证服务。通过这个示例，我们可以了解FreeSql的基本配置和使用方法，以及如何在Blazor中实现用户认证功能。

## 主要内容

### 1. FreeSql配置
在服务初始化时，我们通过FreeSqlBuilder配置了数据库连接：

```csharp
_fsql = new FreeSql.FreeSqlBuilder()
    .UseConnectionString(DataType.MySql, _configuration.GetConnectionString("DefaultConnection") + ";AllowPublicKeyRetrieval=True")
    .UseAdoConnectionPool(true)
    .UseMonitorCommand(cmd => Console.WriteLine($"Sql：{cmd.CommandText}"))
    .UseAutoSyncStructure(true)
    .Build();
```

主要配置说明：
- 使用MySQL数据库
- 启用连接池
- 配置SQL监控，方便调试
- 启用自动同步实体结构到数据库

### 2. 登录认证功能实现

#### 2.1 登录接口
```csharp
[HttpPost("@login")]
[AllowAnonymous]
public async Task<ApiResult> login(string username, string password, string TenantId = "main")
```

登录功能特点：
- 支持多租户（通过TenantId参数）
- 使用Cookie存储登录状态
- 登录成功生成加密token
- Cookie设置安全选项（SameSite和Secure）

#### 2.2 登录状态检查
```csharp
[HttpGet("@check")]
[AllowAnonymous]
public async Task<ApiResult> check()
```

检查功能特点：
- 验证token有效性
- 解密token获取用户信息
- 验证用户是否存在
- 返回用户基本信息

#### 2.3 登出功能
```csharp
[HttpGet("@logout")]
public async Task<ApiResult> logout(string TenantId = "main")
```

登出功能特点：
- 删除登录Cookie
- 支持多租户登出

### 3. 安全考虑

1. Token加密
- 使用DesEncrypt进行token加密
- token包含用户ID和登录时间信息

2. Cookie安全
- 设置SameSite=None
- 启用Secure标志
- 设置合理的过期时间

3. 错误处理
- 完善的异常捕获
- 友好的错误提示

### 4. 其他功能

#### 4.1 HTTP测试接口
```csharp
[HttpGet("@test")]
[AllowAnonymous]
public async Task<ApiResult> GetHttpTest()
```
提供了一个简单的HTTP请求测试接口，用于验证HTTP客户端功能。

## 总结

通过这个示例，我们可以看到：
1. FreeSql提供了简单易用的数据库访问方式
2. 在Blazor中实现认证服务需要注意安全性
3. 多租户支持可以通过简单的参数扩展实现
4. 完善的错误处理对提高系统稳定性很重要

## 注意事项

1. 实际生产环境中，密码应该使用更安全的加密方式
2. 可以考虑添加更多的安全措施，如：
   - 登录失败次数限制
   - IP限制
   - 双因素认证
3. 建议添加日志记录功能
4. 可以考虑使用JWT替代Cookie认证 


```

using ABCLab.Helper;
using AdminBlazor.Infrastructure.Encrypt;
using FreeSql;
using LinCms.Entities.Blog;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ABCLab.Services;

// [Microsoft.AspNetCore.Mvc.Route("LabSystem/TestCate")]
[ApiController]
[Route("api/[controller]")]
[Tags("系统01")]
public class TestService
{
    private readonly IFreeSql _fsql;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IConfiguration _configuration;

    public TestService(IHttpContextAccessor httpContextAccessor, IConfiguration configuration)
    {
        _configuration = configuration;
        _fsql = new FreeSql.FreeSqlBuilder()
            .UseConnectionString(DataType.MySql, _configuration.GetConnectionString("DefaultConnection") + ";AllowPublicKeyRetrieval=True")
            .UseAdoConnectionPool(true)
            .UseMonitorCommand(cmd => Console.WriteLine($"Sql：{cmd.CommandText}"))
            .UseAutoSyncStructure(true) //自动同步实体结构到数据库，只有CRUD时才会生成表
            .Build();

        _httpContextAccessor = httpContextAccessor;
    }


    [HttpGet("@add")]
    [AllowAnonymous]
    public List<string> getNames()
    {
        return new List<string>()
        {
            "first",
            "second",
            "third"
        };
    }

    [HttpPost("@login")]
    [AllowAnonymous]
    public async Task<ApiResult> login(string username, string password, string TenantId = "main")
    {
        if (username == "admin" && password == "admin")
        {
            SysUser user = _fsql.Select<SysUser>().OrderBy(a=>a.CreatedTime)?.First();

            string token = DesEncrypt.Encrypt(user.Id.ToString() + "|" + user.LoginTime.ToString("yyyy-MM-dd HH:mm:ss"));
            _httpContextAccessor.HttpContext?.Response.Cookies.Append("_login_" + TenantId, token, new CookieOptions()
            {
                Path = "/",
                Expires = DateTimeOffset.UtcNow.AddDays(15.0),
                SameSite = SameSiteMode.None,
                Secure = true
            });
            return (ApiResult)ApiResult.Success.SetData(new
            {
                token = token
            });
        }


        return (ApiResult)ApiResult.Error.SetData(new
        {
            login = false
        });
    }

    [HttpGet("@logout")]
    public async Task<ApiResult> logout(string TenantId = "main")
    {
        
        _httpContextAccessor.HttpContext?.Response.Cookies.Delete("_login_" + TenantId);
        return (ApiResult)ApiResult.Success.SetData(new
        {
            success = true
        });
    }

    [HttpGet("@check")]
    [AllowAnonymous]
    public async Task<ApiResult> check()
    {
        string? token = null;
        // 使用 TryGetValue 安全地获取 Cookie 值
        var hasToken = _httpContextAccessor.HttpContext?.Request.Cookies.TryGetValue("_login_main", out token) ?? false;
        
        if (!hasToken || string.IsNullOrEmpty(token))
        {
            return (ApiResult)ApiResult.Success.SetData(new
            {
                login = false,
                message = "未登录或登录已过期"
            });
        }

        try 
        {
            // 尝试解密 token
            var decryptedToken = DesEncrypt.Decrypt(token);
            var parts = decryptedToken.Split('|');
            if (parts.Length != 2)
            {
                return (ApiResult)ApiResult.Error.SetData(new
                {
                    login = false,
                    message = "登录信息格式错误"
                });
            }

            // 验证用户是否存在
            var userId = long.Parse(parts[0]);
            var user = await _fsql.Select<SysUser>().Where(a => a.Id == userId).FirstAsync();
            
            if (user == null)
            {
                return (ApiResult)ApiResult.Error.SetData(new
                {
                    login = false,
                    message = "用户不存在"
                });
            }

            return (ApiResult)ApiResult.Success.SetData(new
            {
                login = true,
                user = new
                {
                    user.Id,
                    user.Username,
                    user.Nickname
                }
            });
        }
        catch (Exception ex)
        {
            return (ApiResult)ApiResult.Error.SetData(new
            {
                login = false,
                message = "登录信息验证失败"
            });
        }
    }

    [HttpGet("@test")]
    [AllowAnonymous]
    public async Task<ApiResult> GetHttpTest()
    {
        var result = await HttpHelper.GetAsync("https://www.jianyandashu.com");

        return (ApiResult)ApiResult.Success.SetData(new
        {
            StatusCode = result.StatusCode, // HTTP 状态码
            IsSuccessStatusCode = result.IsSuccessStatusCode, // 是否成功状态码
            ReasonPhrase = result.ReasonPhrase, // 状态描述
            Headers = result.Headers.ToDictionary(h => h.Key, h => string.Join(", ", h.Value)), // 响应头
            Content = await result.Content.ReadAsStringAsync() // 响应内容
        });
    }
}

```