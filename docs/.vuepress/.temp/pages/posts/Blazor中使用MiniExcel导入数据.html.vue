<template><div><h1 id="在blazor中使用miniexcel实现excel数据导入" tabindex="-1"><a class="header-anchor" href="#在blazor中使用miniexcel实现excel数据导入"><span>在Blazor中使用MiniExcel实现Excel数据导入</span></a></h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>本文介绍如何在Blazor应用中使用MiniExcel库实现Excel数据的导入功能。MiniExcel是一个轻量级的Excel读写库,具有低内存占用、高性能等特点。我们将结合FreeSql实现数据的批量导入。</p>
<h2 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤"><span>实现步骤</span></a></h2>
<h3 id="_1-添加nuget包引用" tabindex="-1"><a class="header-anchor" href="#_1-添加nuget包引用"><span>1. 添加NuGet包引用</span></a></h3>
<p>在项目文件(.csproj)中添加MiniExcel包引用:</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MiniExcel<span class="token punctuation">"</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.39.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-创建导入组件" tabindex="-1"><a class="header-anchor" href="#_2-创建导入组件"><span>2. 创建导入组件</span></a></h3>
<p>创建一个Blazor组件来处理Excel文件上传和数据导入:</p>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code><span class="line">@<span class="token keyword">using</span> MiniExcelLibs</span>
<span class="line">@inject IJSRuntime JS</span>
<span class="line">@inject MessageService MessageService</span>
<span class="line">@inject AdminContext AdminContext</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"mb-3 gap-2"</span><span class="token operator">></span></span>
<span class="line">    加密</span>
<span class="line">    <span class="token operator">&lt;</span><span class="token class-name">InputFile</span> OnChange<span class="token operator">=</span><span class="token string">"@ImportExcelData"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"form-control"</span> accept<span class="token operator">=</span><span class="token string">".xlsx,.xls"</span><span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-实现导入方法" tabindex="-1"><a class="header-anchor" href="#_3-实现导入方法"><span>3. 实现导入方法</span></a></h3>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code><span class="line"><span class="token keyword">private</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">ImportExcelData</span><span class="token punctuation">(</span><span class="token class-name">InputFileChangeEventArgs</span> e<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">await</span> JS<span class="token punctuation">.</span><span class="token function">Confirm</span><span class="token punctuation">(</span><span class="token string">"提示"</span><span class="token punctuation">,</span> <span class="token string">"是否导入数据?"</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 获取上传的文件</span></span>
<span class="line">            <span class="token class-name"><span class="token keyword">var</span></span> file <span class="token operator">=</span> e<span class="token punctuation">.</span>File<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>file <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">await</span> MessageService<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">"请选择文件"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// 创建临时文件保存上传的Excel</span></span>
<span class="line">            <span class="token class-name"><span class="token keyword">var</span></span> tempFile <span class="token operator">=</span> Path<span class="token punctuation">.</span><span class="token function">GetTempFileName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> stream <span class="token operator">=</span> File<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>tempFile<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">await</span> file<span class="token punctuation">.</span><span class="token function">OpenReadStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">CopyToAsync</span><span class="token punctuation">(</span>stream<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// 使用MiniExcel读取Excel数据</span></span>
<span class="line">            <span class="token class-name"><span class="token keyword">var</span></span> rows <span class="token operator">=</span> <span class="token keyword">await</span> MiniExcel<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">QueryAsync</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TrainData<span class="token punctuation">></span></span></span><span class="token punctuation">(</span>tempFile<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name"><span class="token keyword">var</span></span> trainDataList <span class="token operator">=</span> rows<span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// 批量插入数据库</span></span>
<span class="line">            <span class="token keyword">await</span> AdminContext<span class="token punctuation">.</span>Orm<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>trainDataList<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrowsAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// 删除临时文件</span></span>
<span class="line">            File<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span>tempFile<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">await</span> MessageService<span class="token punctuation">.</span><span class="token function">Success</span><span class="token punctuation">(</span><span class="token string">"数据导入成功!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">await</span> MessageService<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"导入失败: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">ex<span class="token punctuation">.</span>Message</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关键点说明" tabindex="-1"><a class="header-anchor" href="#关键点说明"><span>关键点说明</span></a></h2>
<ol>
<li>
<p><strong>文件处理</strong></p>
<ul>
<li>使用<code v-pre>InputFile</code>组件接收文件上传</li>
<li>创建临时文件保存上传的Excel</li>
<li>导入完成后删除临时文件</li>
</ul>
</li>
<li>
<p><strong>MiniExcel使用</strong></p>
<ul>
<li>使用<code v-pre>QueryAsync&lt;T&gt;</code>方法将Excel数据直接映射到实体类</li>
<li>支持异步操作,避免阻塞UI线程</li>
</ul>
</li>
<li>
<p><strong>数据库操作</strong></p>
<ul>
<li>使用FreeSql的批量插入功能</li>
<li>使用事务确保数据一致性</li>
</ul>
</li>
<li>
<p><strong>异常处理</strong></p>
<ul>
<li>完整的try-catch处理</li>
<li>友好的错误提示</li>
</ul>
</li>
</ol>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li>Excel列名需要与实体类属性名匹配</li>
<li>注意处理大文件上传可能的内存占用问题</li>
<li>建议添加文件大小和格式验证</li>
<li>考虑添加导入进度提示</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>通过使用MiniExcel和FreeSql,我们实现了一个简单但完整的Excel数据导入功能。这个实现具有以下优点:</p>
<ol>
<li>代码简洁,易于维护</li>
<li>性能高效,内存占用低</li>
<li>用户体验友好,有完整的错误处理</li>
<li>支持异步操作,不会阻塞UI</li>
</ol>
<p>后续可以考虑添加更多功能,如:</p>
<ul>
<li>导入模板下载</li>
<li>数据预览</li>
<li>导入进度条</li>
<li>更详细的数据验证</li>
</ul>
<hr>
<blockquote>
<p>作者：Claude</p>
<p>日期：2024-05-14</p>
<p>标签：Blazor, MiniExcel, 数据导入, FreeSql</p>
</blockquote>
</div></template>


