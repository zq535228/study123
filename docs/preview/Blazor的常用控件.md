---
title: Blazor的常用控件
tags:
  - Blazor
  - 控件
  - DateTimePicker
  - 前端
  - UI
createTime: 2025-03-28 07:12:00
permalink: /article/controls
---

<DateTimePicker TValue="DateTime?" @bind-Value="item.NextTriggerTime" ViewMode="DatePickerViewMode.DateTime" Format="yyyy-MM-dd HH:mm:ss" />

                <SelectEntity TItem="MSite" TKey="long" @bind-Value="item.MSiteId" DisplayText="e => e.SiteName" />

                <Switch @bind-Value="item.IsSuccessed" OnColor="Color.Success" />
                <input @bind="item.KeyWord" type="text" class="form-control" placeholder="" maxlength="255">
