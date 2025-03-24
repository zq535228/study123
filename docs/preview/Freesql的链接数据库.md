---
title: FreeSql的链接数据库
tags:
  - FreeSql
  - 数据库
  - ORM
  - 后端
  - 连接池
createTime: 2024/03/24 10:00:00
permalink: /article/freesql-connection-guide/
---
# Freesql的链接数据库

```
public Test(IHttpContextAccessor httpContextAccessor, IConfiguration configuration)
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
```

appsettings

```
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AppSettings": {
    "InjectMiniProfiler": false
  },
  "AllowedHosts": "*",
  "DetailedErrors": true,
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=localhost;Port=3306;User ID=root;Password=Zz123456; Initial Catalog=ABCLab;Charset=utf8mb4; SslMode=none;Min pool size=1",
    "RemoteConnection": "Data Source=38.147.184.00;Port=3306;User ID=Cartoon;Password=Zz123456; Initial Catalog=Cartoon;Charset=utf8mb4; SslMode=none;Min pool size=1"
  }
}
```
