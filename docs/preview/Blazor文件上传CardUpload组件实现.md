---
title: Blazor文件上传CardUpload组件实现
tags:
  - Blazor
  - 文件上传
  - 图片处理
  - Base64
createTime: 2024/05/4 11:00:00
permalink: /article/blazor-file-upload-component/
---

          
# 文件上传组件功能总结

这篇代码展示了一个基于Blazor的文件上传组件实现，主要功能包括：

1. **文件上传功能**：
   - 使用`CardUpload`组件实现多文件上传
   - 支持多文件选择（`IsMultiple="true"`）
   - 显示上传进度（`ShowProgress="true"`）

2. **图片处理功能**：
   - 上传后自动请求将图片转换为base64格式
   - 对图片进行尺寸调整（200x200像素）
   - 转换为PNG格式

3. **保存功能**：
   - 通过"保存"按钮触发上传操作
   - 使用注入的`FileService`服务将文件上传到服务器
   - 上传成功后可获取文件的链接URL

4. **技术实现**：
   - 使用依赖注入获取`HttpClient`和`FileService`
   - 使用异步方法处理文件上传过程
   - 维护上传文件列表（`uploadFiles`）

这个组件实现了一个完整的文件上传流程，从用户选择文件、预览图片到最终保存到服务器，提供了良好的用户体验。

 
```
<CardUpload TValue="string" @ref="CardUploadInstance" OnChange="OnCardUpload" IsMultiple="true" ShowProgress="true" />

<Button @onclick="OnSave">保存</Button>

@code {

    private CardUpload<string> CardUploadInstance;
    [Inject]
    private FileService fileService { get; set; }


    private List<UploadFile> uploadFiles { get; set; } = new List<UploadFile>();


    private async Task OnCardUpload(UploadFile file)
    {
        await file.RequestBase64ImageFileAsync("png", 200, 200);
        uploadFiles.Add(file);
    }

    private async Task OnSave()
    {
        foreach (var file in uploadFiles)
        {
            await file.RequestBase64ImageFileAsync("png", 200, 200);
            SysFile result = await this.fileService.UploadFileAsync(file);
            if (result != null)
            {
                System.Console.WriteLine(result.LinkUrl);
            }
        }
    }

}
```