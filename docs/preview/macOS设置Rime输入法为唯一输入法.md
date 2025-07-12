---
title: macOS设置Rime输入法为唯一输入法
tags:
  - macOS
  - Rime
  - 鼠须管
  - 输入法
  - 系统设置
createTime: 2024/05/15 10:00:00
permalink: /article/macos-rime-single-input-method/
---

# macOS设置Rime输入法为唯一输入法

## 背景介绍

在macOS系统中，当我们使用第三方输入法如Rime(鼠须管)时，经常会遇到一个烦人的问题：在切换应用后，输入法会自动切换为系统默认的ABC输入法，导致我们不确定当前是哪个输入法，也不知道是否处于中文输入状态。这种频繁的输入法切换不仅影响工作效率，还容易造成输入错误。

本文将介绍如何在macOS Ventura 13系统上设置Rime输入法(鼠须管)为唯一输入法，彻底解决这个问题。

## 解决方案

解决这个问题的方法是修改系统的`com.apple.HIToolbox.plist`文件，让Rime输入法成为系统中唯一的输入法。以下是具体操作步骤：

### 步骤1: 备份plist文件

首先，我们需要备份原始的plist文件，以防出现问题时可以恢复：

```bash
cp ~/Library/Preferences/com.apple.HIToolbox.plist{,_1}
```

这个命令会将`~/Library/Preferences/com.apple.HIToolbox.plist`文件复制到同目录下的`~/Library/Preferences/com.apple.HIToolbox.plist_1`。

### 步骤2: 将当前活跃输入法切换为英文输入法

在修改文件前，请确保当前活跃的输入法是英文输入法。

### 步骤3: 将plist文件转换为XML格式

plist文件有两种格式，一种是二进制的，直接用编辑器打开是乱码，所以需要用工具转为XML格式，方便编辑：

```bash
plutil -convert xml1 ~/Library/Preferences/com.apple.HIToolbox.plist
```

### 步骤4: 修改plist文件

用编辑器打开`com.apple.HIToolbox.plist`文件，删除掉`AppleEnabledInputSources`键下不需要的输入法dict。修改后的文件内容应该类似如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>AppleCurrentKeyboardLayoutInputSourceID</key>
	<string>com.apple.keylayout.ABC</string>
	<key>AppleDictationAutoEnable</key>
	<integer>0</integer>
	<key>AppleEnabledInputSources</key>
	<array>
		<dict>
			<key>Bundle ID</key>
			<string>com.apple.CharacterPaletteIM</string>
			<key>InputSourceKind</key>
			<string>Non Keyboard Input Method</string>
		</dict>
	</array>
	<key>AppleInputSourceHistory</key>
	<array>
		<dict>
			<key>Bundle ID</key>
			<string>im.rime.inputmethod.Squirrel</string>
			<key>Input Mode</key>
			<string>im.rime.inputmethod.Squirrel.Hans</string>
			<key>InputSourceKind</key>
			<string>Input Mode</string>
		</dict>
	</array>
</dict>
</plist>
```

保存文件后，不要进行其他操作。

### 步骤5: 重启系统

保存文件后，直接重启Mac系统。启动后，你会发现菜单栏只剩下一个输入法了，即Rime输入法。

## 注意事项

1. 此方法适用于macOS Ventura 13系统，其他版本的macOS可能略有不同。
2. 修改系统文件有一定风险，请确保按照步骤操作，并备份原始文件。
3. 如果操作后出现问题，可以恢复之前备份的plist文件。

## 总结

通过修改`com.apple.HIToolbox.plist`文件，我们成功地将Rime输入法设置为macOS系统中唯一的输入法，解决了输入法频繁切换的烦恼。这种方法简单有效，让我们在使用Mac时可以专注于工作，而不是频繁地切换输入法。

希望这篇教程对你有所帮助！如果你也是Rime输入法的用户，不妨试试这个方法，享受更流畅的输入体验。