import{_ as s,c as a,d as p,o as t}from"./app-B90K-Dsy.js";const e={};function c(l,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="在blazor中实现条码加密服务" tabindex="-1"><a class="header-anchor" href="#在blazor中实现条码加密服务"><span>在Blazor中实现条码加密服务</span></a></h1><p>在实验室信息管理系统(LIS)中，条码是一个非常重要的标识符，它用于追踪样本、记录检测结果等。为了保护数据安全，我们需要对条码进行加密处理。本文将介绍如何在Blazor应用中实现一个简单但安全的条码加密服务，并结合 MiniExcel 实现 Excel 文件的批量处理。</p><h2 id="_1-设计接口" tabindex="-1"><a class="header-anchor" href="#_1-设计接口"><span>1. 设计接口</span></a></h2><p>首先，我们定义了一个条码加密服务的接口：</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IBarcodeEncryption</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token function">EncryptAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> barcode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token function">DecryptAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> encryptedBarcode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个接口定义了两个主要方法：</p><ul><li><code>EncryptAsync</code>: 用于加密原始条码</li><li><code>DecryptAsync</code>: 用于解密加密后的条码</li></ul><h2 id="_2-实现加密服务" tabindex="-1"><a class="header-anchor" href="#_2-实现加密服务"><span>2. 实现加密服务</span></a></h2><p>我们使用XOR(异或)加密算法实现了条码加密服务：</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BarcodeEncryptionService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IBarcodeEncryption</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name"><span class="token keyword">string</span></span> SecretKey <span class="token operator">=</span> <span class="token string">&quot;BARCODE2024&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token function">EncryptAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> barcode<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">IsNullOrEmpty</span><span class="token punctuation">(</span>barcode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> Task<span class="token punctuation">.</span><span class="token function">FromResult</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token class-name"><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> barcodeBytes <span class="token operator">=</span> Encoding<span class="token punctuation">.</span>UTF8<span class="token punctuation">.</span><span class="token function">GetBytes</span><span class="token punctuation">(</span>barcode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name"><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> keyBytes <span class="token operator">=</span> Encoding<span class="token punctuation">.</span>UTF8<span class="token punctuation">.</span><span class="token function">GetBytes</span><span class="token punctuation">(</span>SecretKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token class-name"><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">byte</span></span><span class="token punctuation">[</span>barcodeBytes<span class="token punctuation">.</span>Length<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> barcodeBytes<span class="token punctuation">.</span>Length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>barcodeBytes<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> keyBytes<span class="token punctuation">[</span>i <span class="token operator">%</span> keyBytes<span class="token punctuation">.</span>Length<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">return</span> Task<span class="token punctuation">.</span><span class="token function">FromResult</span><span class="token punctuation">(</span>Convert<span class="token punctuation">.</span><span class="token function">ToBase64String</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token function">DecryptAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> encryptedBarcode<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">IsNullOrEmpty</span><span class="token punctuation">(</span>encryptedBarcode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> Task<span class="token punctuation">.</span><span class="token function">FromResult</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">try</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name"><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> encryptedBytes <span class="token operator">=</span> Convert<span class="token punctuation">.</span><span class="token function">FromBase64String</span><span class="token punctuation">(</span>encryptedBarcode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name"><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> keyBytes <span class="token operator">=</span> Encoding<span class="token punctuation">.</span>UTF8<span class="token punctuation">.</span><span class="token function">GetBytes</span><span class="token punctuation">(</span>SecretKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            </span>
<span class="line">            <span class="token class-name"><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">byte</span></span><span class="token punctuation">[</span>encryptedBytes<span class="token punctuation">.</span>Length<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> encryptedBytes<span class="token punctuation">.</span>Length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>encryptedBytes<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> keyBytes<span class="token punctuation">[</span>i <span class="token operator">%</span> keyBytes<span class="token punctuation">.</span>Length<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">return</span> Task<span class="token punctuation">.</span><span class="token function">FromResult</span><span class="token punctuation">(</span>Encoding<span class="token punctuation">.</span>UTF8<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">catch</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> Task<span class="token punctuation">.</span><span class="token function">FromResult</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-注册服务" tabindex="-1"><a class="header-anchor" href="#_3-注册服务"><span>3. 注册服务</span></a></h2><p>在<code>Program.cs</code>中注册服务：</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre><code><span class="line">builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddScoped</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IBarcodeEncryption<span class="token punctuation">,</span> BarcodeEncryptionService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_4-使用-miniexcel-实现批量处理" tabindex="-1"><a class="header-anchor" href="#_4-使用-miniexcel-实现批量处理"><span>4. 使用 MiniExcel 实现批量处理</span></a></h2><p>MiniExcel 是一个轻量级的 Excel 处理库，相比 EPPlus 具有以下优点：</p><ol><li>更小的内存占用</li><li>更快的处理速度</li><li>更简单的 API</li></ol><p>首先安装 NuGet 包：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">dotnet <span class="token function">add</span> package MiniExcel</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后在 Blazor 组件中实现批量处理：</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre><code><span class="line">@page <span class="token string">&quot;/qc/convertid&quot;</span></span>
<span class="line">@<span class="token keyword">using</span> MiniExcelLibs</span>
<span class="line">@inject IBarcodeEncryption <span class="token return-type class-name">BarcodeEncryption</span></span>
<span class="line"></span>
<span class="line">@code <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">LoadFile</span><span class="token punctuation">(</span><span class="token class-name">InputFileChangeEventArgs</span> e<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name"><span class="token keyword">var</span></span> stream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MemoryStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">await</span> file<span class="token punctuation">.</span><span class="token function">OpenReadStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">CopyToAsync</span><span class="token punctuation">(</span>stream<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        stream<span class="token punctuation">.</span>Position <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 读取Excel数据</span></span>
<span class="line">        <span class="token class-name"><span class="token keyword">var</span></span> rows <span class="token operator">=</span> <span class="token keyword">await</span> stream<span class="token punctuation">.</span><span class="token function">QueryAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name"><span class="token keyword">var</span></span> dataList <span class="token operator">=</span> rows<span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 获取表头</span></span>
<span class="line">        <span class="token class-name"><span class="token keyword">var</span></span> headers <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>IDictionary<span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">object</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>dataList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Keys<span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 查找条码列</span></span>
<span class="line">        <span class="token class-name"><span class="token keyword">var</span></span> barcodeColName <span class="token operator">=</span> headers<span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>h <span class="token operator">=&gt;</span> </span>
<span class="line">            h<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span><span class="token string">&quot;条码号&quot;</span><span class="token punctuation">,</span> StringComparison<span class="token punctuation">.</span>OrdinalIgnoreCase<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            </span>
<span class="line">        <span class="token comment">// 处理每一行的条码</span></span>
<span class="line">        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name">IDictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> row <span class="token keyword">in</span> dataList<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name"><span class="token keyword">var</span></span> barcode <span class="token operator">=</span> row<span class="token punctuation">[</span>barcodeColName<span class="token punctuation">]</span><span class="token punctuation">?.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">IsNullOrEmpty</span><span class="token punctuation">(</span>barcode<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token class-name"><span class="token keyword">var</span></span> encryptedBarcode <span class="token operator">=</span> <span class="token keyword">await</span> BarcodeEncryption<span class="token punctuation">.</span><span class="token function">EncryptAsync</span><span class="token punctuation">(</span>barcode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                row<span class="token punctuation">[</span>barcodeColName<span class="token punctuation">]</span> <span class="token operator">=</span> encryptedBarcode<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 保存处理后的文件</span></span>
<span class="line">        <span class="token keyword">await</span> outputStream<span class="token punctuation">.</span><span class="token function">SaveAsAsync</span><span class="token punctuation">(</span>dataList<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 MiniExcel 的主要步骤：</p><ol><li>使用 <code>QueryAsync()</code> 读取 Excel 数据</li><li>数据以字典列表的形式返回，方便处理</li><li>使用 <code>SaveAsAsync()</code> 保存修改后的数据</li></ol><h2 id="_5-安全性考虑" tabindex="-1"><a class="header-anchor" href="#_5-安全性考虑"><span>5. 安全性考虑</span></a></h2><ol><li><p>密钥管理</p><ul><li>在生产环境中，建议将密钥存储在配置文件或安全的密钥管理系统中</li><li>定期更换密钥</li></ul></li><li><p>传输安全</p><ul><li>确保加密后的数据通过HTTPS传输</li><li>避免在日志中记录加密后的数据</li></ul></li><li><p>错误处理</p><ul><li>对解密失败的情况进行适当处理</li><li>不要在错误消息中暴露敏感信息</li></ul></li><li><p>Excel 文件处理</p><ul><li>验证文件大小和格式</li><li>使用流式处理避免内存溢出</li><li>处理完成后及时释放资源</li></ul></li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>通过结合条码加密服务和 MiniExcel，我们实现了：</p><ol><li>安全的条码加密/解密功能</li><li>高效的 Excel 批量处理</li><li>用户友好的 Web 界面</li></ol><p>这个解决方案适用于需要批量处理敏感数据的场景，如实验室信息系统中的样本条码加密。通过使用 MiniExcel，我们还获得了更好的性能和更低的资源消耗。</p>`,28)]))}const i=s(e,[["render",c]]),u=JSON.parse('{"path":"/posts/%E6%9D%A1%E7%A0%81%E5%8A%A0%E5%AF%86%E6%9C%8D%E5%8A%A1%E7%9A%84%E5%AE%9E%E7%8E%B0.html","title":"在Blazor中实现条码加密服务","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1. 设计接口","slug":"_1-设计接口","link":"#_1-设计接口","children":[]},{"level":2,"title":"2. 实现加密服务","slug":"_2-实现加密服务","link":"#_2-实现加密服务","children":[]},{"level":2,"title":"3. 注册服务","slug":"_3-注册服务","link":"#_3-注册服务","children":[]},{"level":2,"title":"4. 使用 MiniExcel 实现批量处理","slug":"_4-使用-miniexcel-实现批量处理","link":"#_4-使用-miniexcel-实现批量处理","children":[]},{"level":2,"title":"5. 安全性考虑","slug":"_5-安全性考虑","link":"#_5-安全性考虑","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"filePathRelative":"posts/条码加密服务的实现.md","excerpt":"\\n<p>在实验室信息管理系统(LIS)中，条码是一个非常重要的标识符，它用于追踪样本、记录检测结果等。为了保护数据安全，我们需要对条码进行加密处理。本文将介绍如何在Blazor应用中实现一个简单但安全的条码加密服务，并结合 MiniExcel 实现 Excel 文件的批量处理。</p>\\n<h2>1. 设计接口</h2>\\n<p>首先，我们定义了一个条码加密服务的接口：</p>\\n<div class=\\"language-csharp line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"cs\\"><pre><code><span class=\\"line\\"><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">IBarcodeEncryption</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token return-type class-name\\">Task<span class=\\"token punctuation\\">&lt;</span><span class=\\"token keyword\\">string</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">EncryptAsync</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\"><span class=\\"token keyword\\">string</span></span> barcode<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">    <span class=\\"token return-type class-name\\">Task<span class=\\"token punctuation\\">&lt;</span><span class=\\"token keyword\\">string</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">DecryptAsync</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\"><span class=\\"token keyword\\">string</span></span> encryptedBarcode<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{i as comp,u as data};
