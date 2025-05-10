---
title: 如何使用cursor进行C#调试
createTime: 2025/05/10 09:35:59
permalink: /article/khnpffjg/
---


https://www.youtube.com/watch?v=AV5fYL0GYkk&t=223s

我的mac是m2芯片，需要使用这个版本的netcoredbg
https://github.com/Cliffback/netcoredbg-macOS-arm64.nvim

.vscode/launch.json 的代码

```
{
    "name": "netcoredbg",
    "type": "coreclr",
    "request": "launch",
    "preLaunchTask": "build",
    "program": "${workspaceFolder}/bin/Debug/net9.0/DebugWithCursor.dll",
    "args": [],
    "cwd": "${workspaceFolder}",
    "console": "internalConsole",
    "pipeTransport": {
        "pipeCwd": "${workspaceFolder}",
        "pipeProgram": "bash",
        "pipeArgs": ["-c"],
        "debuggerPath": "/Users/Zhuanz/Documents/netcoredbg/netcoredbg",
        "debuggerArgs": ["--interpreter=vscode"],
        "quoteArgs": true
    },
    "env": {
        "DOTNET_ENVIRONMENT": "Development"
    },

```