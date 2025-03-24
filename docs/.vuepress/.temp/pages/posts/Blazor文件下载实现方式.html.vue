<template><div><h1 id="blazor-文件下载的几种实现方式" tabindex="-1"><a class="header-anchor" href="#blazor-文件下载的几种实现方式"><span>Blazor 文件下载的几种实现方式</span></a></h1>
<p>在 Blazor 应用程序中，实现文件下载功能是一个常见需求。本文将介绍几种不同的实现方式，并分析它们的优缺点。</p>
<h2 id="_1-使用-javascript-interop" tabindex="-1"><a class="header-anchor" href="#_1-使用-javascript-interop"><span>1. 使用 JavaScript Interop</span></a></h2>
<p>这是最简单的实现方式，但需要依赖 JavaScript。</p>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">DownloadFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> memoryStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MemoryStream</span><span class="token punctuation">(</span>_processedFile<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name"><span class="token keyword">var</span></span> streamRef <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DotNetStreamReference</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">stream</span><span class="token punctuation">:</span> memoryStream<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">await</span> JS<span class="token punctuation">.</span><span class="token function">InvokeVoidAsync</span><span class="token punctuation">(</span><span class="token string">"downloadFileFromStream"</span><span class="token punctuation">,</span> streamRef<span class="token punctuation">,</span> newFileName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要在 JavaScript 中实现对应的方法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">downloadFileFromStream</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">streamRef<span class="token punctuation">,</span> fileName</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> arrayBuffer <span class="token operator">=</span> <span class="token keyword">await</span> streamRef<span class="token punctuation">.</span><span class="token function">arrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>arrayBuffer<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    a<span class="token punctuation">.</span>href <span class="token operator">=</span> url<span class="token punctuation">;</span></span>
<span class="line">    a<span class="token punctuation">.</span>download <span class="token operator">=</span> fileName<span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用控制器-推荐方式" tabindex="-1"><a class="header-anchor" href="#_2-使用控制器-推荐方式"><span>2. 使用控制器（推荐方式）</span></a></h2>
<p>这种方式完全不依赖 JavaScript，更加灵活和可控。</p>
<p>首先创建一个下载控制器：</p>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code><span class="line"><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiController</span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">"api/[controller]"</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DownloadController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ControllerBase</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">ITempFileStorage</span> _tempFileStorage<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token function">DownloadController</span><span class="token punctuation">(</span><span class="token class-name">ITempFileStorage</span> tempFileStorage<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        _tempFileStorage <span class="token operator">=</span> tempFileStorage<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">"{fileId}"</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>IActionResult<span class="token punctuation">></span></span> <span class="token function">Download</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> fileId<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> <span class="token punctuation">(</span>fileContent<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">await</span> _tempFileStorage<span class="token punctuation">.</span><span class="token function">GetFileAsync</span><span class="token punctuation">(</span>fileId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>fileContent <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">NotFound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">File</span><span class="token punctuation">(</span>fileContent<span class="token punctuation">,</span> <span class="token string">"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"</span><span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Blazor 页面中使用：</p>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span><span class="token class-name">a</span> href<span class="token operator">=</span><span class="token string">"@_downloadUrl"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn btn-primary"</span> download<span class="token operator">=</span><span class="token string">"@_downloadFileName"</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fas fa-download"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span> 下载文件</span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span></span>
<span class="line"></span>
<span class="line">@code <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">string</span></span> _downloadUrl <span class="token operator">=</span> <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">string</span></span> _downloadFileName <span class="token operator">=</span> <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">ProcessFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 生成文件ID和下载URL</span></span>
<span class="line">        <span class="token class-name"><span class="token keyword">var</span></span> fileId <span class="token operator">=</span> Guid<span class="token punctuation">.</span><span class="token function">NewGuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token string">"N"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        _downloadUrl <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$"/api/download/</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">fileId</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">;</span></span>
<span class="line">        _downloadFileName <span class="token operator">=</span> <span class="token string">"processed_file.xlsx"</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 保存文件到临时存储</span></span>
<span class="line">        <span class="token keyword">await</span> <span class="token function">SaveToTempStorage</span><span class="token punctuation">(</span>fileId<span class="token punctuation">,</span> fileContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优缺点分析" tabindex="-1"><a class="header-anchor" href="#优缺点分析"><span>优缺点分析</span></a></h2>
<h3 id="javascript-interop-方式" tabindex="-1"><a class="header-anchor" href="#javascript-interop-方式"><span>JavaScript Interop 方式</span></a></h3>
<p>优点：</p>
<ul>
<li>实现简单</li>
<li>适合小文件下载</li>
<li>不需要额外的服务器存储</li>
</ul>
<p>缺点：</p>
<ul>
<li>依赖 JavaScript</li>
<li>不适合大文件</li>
<li>难以实现进度显示</li>
<li>无法实现复杂的权限控制</li>
</ul>
<h3 id="控制器方式" tabindex="-1"><a class="header-anchor" href="#控制器方式"><span>控制器方式</span></a></h3>
<p>优点：</p>
<ul>
<li>完全不依赖 JavaScript</li>
<li>支持大文件下载</li>
<li>可以实现下载进度显示</li>
<li>可以实现复杂的权限控制</li>
<li>更好的错误处理</li>
<li>可以实现断点续传</li>
</ul>
<p>缺点：</p>
<ul>
<li>需要实现临时文件存储</li>
<li>实现相对复杂</li>
<li>需要考虑临时文件的清理</li>
</ul>
<h2 id="最佳实践建议" tabindex="-1"><a class="header-anchor" href="#最佳实践建议"><span>最佳实践建议</span></a></h2>
<ol>
<li>对于简单的小文件下载（&lt;10MB），可以使用 JavaScript Interop 方式</li>
<li>对于大文件或需要更多控制的场景，建议使用控制器方式</li>
<li>实现临时文件存储时，考虑使用 Redis 或文件系统</li>
<li>注意实现定时清理临时文件的机制</li>
<li>在控制器中实现适当的权限验证</li>
<li>考虑添加下载进度显示功能</li>
<li>实现错误处理和重试机制</li>
</ol>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2>
<p>可以在 GitHub 上找到完整的示例代码：<a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">Blazor File Download Demo</a></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>选择合适的文件下载实现方式取决于具体的需求。对于简单场景，JavaScript Interop 方式足够使用；对于复杂场景，建议使用控制器方式以获得更好的可控性和扩展性。无论选择哪种方式，都要注意安全性、性能和用户体验。</p>
<hr>
<blockquote>
<p>作者：Claude</p>
<p>日期：2024-05-14</p>
<p>标签：Blazor, 文件下载, JavaScript, 控制器</p>
</blockquote>
</div></template>


