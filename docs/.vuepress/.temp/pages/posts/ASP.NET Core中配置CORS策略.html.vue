<template><div><h1 id="在asp-net-core中配置cors策略" tabindex="-1"><a class="header-anchor" href="#在asp-net-core中配置cors策略"><span>在ASP.NET Core中配置CORS策略</span></a></h1>
<p>在现代Web应用程序中，跨域资源共享（CORS）是一个重要的安全特性。它允许或限制不同来源的Web应用程序访问服务器资源。在ASP.NET Core中，我们可以通过配置CORS策略来控制这些访问。</p>
<h2 id="配置步骤" tabindex="-1"><a class="header-anchor" href="#配置步骤"><span>配置步骤</span></a></h2>
<h3 id="_1-添加cors服务" tabindex="-1"><a class="header-anchor" href="#_1-添加cors服务"><span>1. 添加CORS服务</span></a></h3>
<p>首先，在 <code v-pre>Program.cs</code> 文件中，我们需要添加CORS服务。我们可以通过 <code v-pre>AddCors</code> 方法来定义一个CORS策略。在这个例子中，我们定义了一个名为 <code v-pre>&quot;CorsPolicy&quot;</code> 的策略：</p>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code><span class="line">builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddCors</span><span class="token punctuation">(</span>options <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    options<span class="token punctuation">.</span><span class="token function">AddPolicy</span><span class="token punctuation">(</span><span class="token string">"CorsPolicy"</span><span class="token punctuation">,</span> builder <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        builder</span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">WithOrigins</span><span class="token punctuation">(</span><span class="token string">"http://localhost:3000"</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">WithOrigins</span><span class="token punctuation">(</span><span class="token string">"https://ai.jianyandashu.com"</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">AllowAnyMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">AllowAnyHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">AllowCredentials</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">SetIsOriginAllowed</span><span class="token punctuation">(</span>_ <span class="token operator">=></span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 临时添加，用于调试</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>AllowAnyMethod</strong>: 允许任何HTTP方法（GET, POST, PUT, DELETE等）。</li>
<li><strong>AllowAnyHeader</strong>: 允许任何请求头。</li>
<li><strong>AllowCredentials</strong>: 允许请求携带凭证（如Cookies）。</li>
<li><strong>SetIsOriginAllowed</strong>: 这里使用了 <code v-pre>SetIsOriginAllowed(_ =&gt; true)</code>，这将允许所有来源的请求。这是一个临时的调试设置，建议在生产环境中使用更严格的配置。</li>
</ul>
<h3 id="_2-使用cors中间件" tabindex="-1"><a class="header-anchor" href="#_2-使用cors中间件"><span>2. 使用CORS中间件</span></a></h3>
<p>在构建应用程序后，我们需要在中间件管道中使用定义的CORS策略：</p>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code><span class="line"><span class="token class-name"><span class="token keyword">var</span></span> app <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">UseCors</span><span class="token punctuation">(</span><span class="token string">"CorsPolicy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>这行代码确保了所有的HTTP请求都会应用我们定义的CORS策略。</p>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ul>
<li><strong>安全性</strong>: 在生产环境中，建议根据实际需求限制允许的来源，而不是使用 <code v-pre>SetIsOriginAllowed(_ =&gt; true)</code>。</li>
<li><strong>策略名称</strong>: 确保在 <code v-pre>UseCors</code> 中使用的策略名称与 <code v-pre>AddCors</code> 中定义的名称一致。</li>
</ul>
<p>通过以上步骤，我们可以在ASP.NET Core应用程序中有效地配置CORS策略，确保应用程序的安全性和灵活性。</p>
<hr>
<blockquote>
<p>作者：Claude</p>
<p>日期：2024-05-14</p>
<p>标签：ASP.NET Core, CORS, 安全性, 跨域</p>
</blockquote>
</div></template>


