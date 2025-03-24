---
title: FreeSql数据库连接和导航属性详解
tags:
  - FreeSql
  - 数据库
  - ORM
  - C#
  - 导航属性
createTime: 2024/03/24 10:00:00
permalink: /article/freesql-database-connection/
---

# FreeSql 数据库连接和导航属性

## 数据库连接

在使用 FreeSql 时，连接数据库是一个重要的步骤。以下是两种常用的数据库连接类型：

### MySQL

```csharp
DataType.MySql    Data Source=127.0.0.1;Port=3306;User ID=root;Password=root; Initial Catalog=cccddd;Charset=utf8mb4; SslMode=none;Min pool size=1
```

### SQLite

```csharp
DataType.Sqlite    Data Source=|DataDirectory|\document.db; Attachs=xxxtb.db; Pooling=true;Min Pool Size=1
```

## 导航属性

导航属性用于在实体之间建立关系。以下是三种常见的导航属性类型：

### ManyToOne

```csharp
public class User
{
    [Column(IsPrimary = true, IsIdentity = true)]
    public int Id { get; set; }
    public int GroupId { get; set; }

    // 在 本实体 查找 GroupId 属性，与 Group.主键 关联
    [Navigate(nameof(GroupId))]
    public Group Group { get; set; }
}
```

### OneToMany

```csharp
public class Group
{
    [Column(IsPrimary = true, IsIdentity = true)]
    public int Id { get; set; }
    public string GroupName { get; set; }

    // 在 User 查找 GroupId 属性，与 本实体.主键 关联
    [Navigate(nameof(User.GroupId))]
    public List<User> Users { get; set; }
}
```

### ManyToMany

```csharp
[Navigate(ManyToMany = typeof(TagSong))]
public List<Tag> Items { get; set; }
```

## 仓储操作

FreeSql 提供了强大的仓储操作功能，以下是一些常用的操作：

```csharp
var repo = fsql.GetRepository<object>();
repo.AsType(实体类型);

repo.Insert(..);
repo.Update(..);
repo.Delete(..);
repo.InsertOrUpdate(..);
```

## WithSql 方法

在 FreeSql 中，`WithSql` 方法允许我们直接使用 SQL 查询来获取数据。以下是一个使用示例：

```csharp
fsql.Select<Topic>()
  .WithSql("select * from Topic where clicks > @val", new { val = 10 })
  .Page(1, 10)
  .ToList();
```

通过 `WithSql` 方法，我们可以灵活地执行自定义 SQL 查询，并结合 FreeSql 的其他功能，如分页等。

## 查询子集合表的部分字段

在使用 FreeSql 时，我们可以通过选择子集合表的部分字段来避免字段过多的问题。以下是一个使用示例：

```csharp
fsql.Select<Tag>().IncludeMany(a => a.Goods.Select(b => new Goods { Id = b.Id, Title = b.Title }));
```

通过这种方式，我们可以仅选择需要的字段，从而提高查询效率并减少不必要的数据传输。

## 审计 CURD 操作

在使用 FreeSql 时，我们可以通过 AOP（面向切面编程）来实现对 CURD 操作的审计功能。以下是一个使用示例：

```csharp
fsql.Aop.CurdAfter += (s, e) => {
    if (e.ElapsedMilliseconds > 200) {
        // 记录日志
        // 发送短信给负责人
    }
};
```

通过这种方式，我们可以监控 SQL 操作的执行时间，并在超过设定的阈值时采取相应的措施，如记录日志或通知相关负责人。

通过以上的总结，我们可以更好地理解和使用 FreeSql 进行数据库操作和实体关系的管理。 