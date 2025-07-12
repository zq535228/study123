import{_ as n,c as a,b as e,o as l}from"./app-CQ4DyvhI.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<p>这篇代码展示了一个基于Blazor的文件上传组件实现，主要功能包括：</p><ol><li><p><strong>文件上传功能</strong>：</p><ul><li>使用<code>CardUpload</code>组件实现多文件上传</li><li>支持多文件选择（<code>IsMultiple=&quot;true&quot;</code>）</li><li>显示上传进度（<code>ShowProgress=&quot;true&quot;</code>）</li></ul></li><li><p><strong>图片处理功能</strong>：</p><ul><li>上传后自动请求将图片转换为base64格式</li><li>对图片进行尺寸调整（200x200像素）</li><li>转换为PNG格式</li></ul></li><li><p><strong>保存功能</strong>：</p><ul><li>通过&quot;保存&quot;按钮触发上传操作</li><li>使用注入的<code>FileService</code>服务将文件上传到服务器</li><li>上传成功后可获取文件的链接URL</li></ul></li><li><p><strong>技术实现</strong>：</p><ul><li>使用依赖注入获取<code>HttpClient</code>和<code>FileService</code></li><li>使用异步方法处理文件上传过程</li><li>维护上传文件列表（<code>uploadFiles</code>）</li></ul></li></ol><p>这个组件实现了一个完整的文件上传流程，从用户选择文件、预览图片到最终保存到服务器，提供了良好的用户体验。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;CardUpload TValue=&quot;string&quot; @ref=&quot;CardUploadInstance&quot; OnChange=&quot;OnCardUpload&quot; IsMultiple=&quot;true&quot; ShowProgress=&quot;true&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Button @onclick=&quot;OnSave&quot;&gt;保存&lt;/Button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@code {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private CardUpload&lt;string&gt; CardUploadInstance;</span></span>
<span class="line"><span>    [Inject]</span></span>
<span class="line"><span>    private FileService fileService { get; set; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private List&lt;UploadFile&gt; uploadFiles { get; set; } = new List&lt;UploadFile&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private async Task OnCardUpload(UploadFile file)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        await file.RequestBase64ImageFileAsync(&quot;png&quot;, 200, 200);</span></span>
<span class="line"><span>        uploadFiles.Add(file);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private async Task OnSave()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        foreach (var file in uploadFiles)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            await file.RequestBase64ImageFileAsync(&quot;png&quot;, 200, 200);</span></span>
<span class="line"><span>            SysFile result = await this.fileService.UploadFileAsync(file);</span></span>
<span class="line"><span>            if (result != null)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                System.Console.WriteLine(result.LinkUrl);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const c=n(i,[["render",p]]),r=JSON.parse('{"path":"/article/blazor-file-upload-component/","title":"Blazor文件上传CardUpload组件实现","lang":"en-US","frontmatter":{"title":"Blazor文件上传CardUpload组件实现","tags":["Blazor","文件上传","图片处理","Base64"],"createTime":"2024/05/4 11:00:00","permalink":"/article/blazor-file-upload-component/"},"headers":[],"readingTime":{"minutes":1.19,"words":356},"git":{"updatedTime":1746333908000,"contributors":[{"name":"bookmac","username":"bookmac","email":"zq535228@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/bookmac?v=4","url":"https://github.com/bookmac"}]},"filePathRelative":"preview/Blazor文件上传CardUpload组件实现.md","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}]}');export{c as comp,r as data};
