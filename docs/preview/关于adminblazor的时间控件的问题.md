---
title: 关于adminblazor的时间控件的问题 - DateTimePicker
createTime: 2025/07/10 07:37:05
permalink: /article/3rcjqwqk/
---

DateTimePicker 在 adminblazor 中是一个时间选择器组件，用于从用户那里获取日期和时间的输入。它通常用于表单中，允许用户选择特定的日期和时间，以便将其提交给后端服务器或进行其他操作。

在 Blazor 中使用 DateTimePicker 组件非常简单。您可以通过以下步骤在您的组件中使用它：

DateTimePicker 是有bug的,具体原因也不想仔细去探究了.

```
@* <DateTimePicker TValue="DateTime" @bind-Value=item.LoginTime /> *@
<input @bind=item.LoginTime type="datetime-local" class="form-control">
```