import{_ as i,c as a,b as l,o as n}from"./app-CLQ1Ag4Z.js";const h={};function k(p,s){return n(),a("div",null,s[0]||(s[0]=[l(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>在 Web 应用开发中，文件上传是一个常见的需求。今天我们来分析一个在 Blazor 应用中实现的文件上传方法 <code>SaveToFile</code>，这个方法展示了如何在服务器端处理文件上传并提供用户反馈。</p><h2 id="代码实现详解" tabindex="-1"><a class="header-anchor" href="#代码实现详解"><span>代码实现详解</span></a></h2><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> async</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Task</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">bool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> SaveToFile</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">UploadFile</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    var</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ret</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    try</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 获取wwwroot目录的物理路径</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        var</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> webRootPath</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Combine</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Directory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">GetCurrentDirectory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">wwwroot</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        var</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> uploaderFolder</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Combine</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">webRootPath</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">images</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">uploader</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 确保目录存在</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        Directory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">CreateDirectory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">uploaderFolder</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 生成唯一文件名</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">FileName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> $&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">GetFileNameWithoutExtension</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">OriginFileName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">DateTimeOffset</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Now</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">yyyyMMddHHmmss</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}{</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">GetExtension</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">OriginFileName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        var</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> fileName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Combine</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">uploaderFolder</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">FileName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 保存文件</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        ReadToken</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ??=</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> CancellationTokenSource</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        ret</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> await</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">SaveToFileAsync</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">fileName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> MaxFileLength</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ReadToken</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Token</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ret</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">PrevUrl</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> $&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/images/uploader/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">FileName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">            await</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> MessageService</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Success</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">文件上传成功！</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        else</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            // 处理保存失败情况</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">            var</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> errorMessage</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> $&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">保存文件失败 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">OriginFileName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Code</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Error</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> errorMessage</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">            await</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> MessageService</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Error</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">$&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">上传文件</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">errorMessage</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Exception</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 异常处理</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Code</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Error</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Message</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        await</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> MessageService</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Error</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">$&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">文件上传失败: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Message</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        ret</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ret</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="功能特点" tabindex="-1"><a class="header-anchor" href="#功能特点"><span>功能特点</span></a></h2><ol><li><p><strong>路径处理</strong></p><ul><li>自动获取 wwwroot 目录作为根目录</li><li>在 images/uploader 子目录下存储上传的文件</li><li>自动创建必要的目录结构</li></ul></li><li><p><strong>文件名处理</strong></p><ul><li>基于原始文件名生成唯一文件名</li><li>添加时间戳避免文件名冲突</li><li>保留原始文件扩展名</li></ul></li><li><p><strong>异步操作</strong></p><ul><li>使用异步方法处理文件保存</li><li>支持取消令牌（CancellationToken）</li><li>文件大小限制检查</li></ul></li><li><p><strong>错误处理</strong></p><ul><li>完善的异常捕获机制</li><li>详细的错误信息反馈</li><li>用户友好的提示消息</li></ul></li></ol><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><p>这段代码主要适用于以下场景：</p><ol><li>Blazor Server 端应用的文件上传</li><li>图片上传功能（基于目录结构判断）</li><li>需要文件大小限制的上传场景</li><li>需要提供上传状态反馈的场景</li></ol><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><ol><li><p><strong>WebAssembly 注意</strong></p><ul><li>代码注释中特别提醒，在 Blazor WebAssembly 模式下需要使用 WebApi 方式保存文件</li></ul></li><li><p><strong>安全考虑</strong></p><ul><li>建议添加文件类型验证</li><li>考虑添加文件名安全性检查</li><li>可能需要添加用户权限验证</li></ul></li><li><p><strong>性能优化</strong></p><ul><li>大文件上传可能需要考虑分片上传</li><li>考虑添加进度反馈机制</li><li>可以添加文件压缩处理</li></ul></li></ol><h2 id="代码改进建议" tabindex="-1"><a class="header-anchor" href="#代码改进建议"><span>代码改进建议</span></a></h2><ol><li>添加文件类型白名单验证</li><li>实现文件上传进度显示</li><li>添加文件名安全性检查</li><li>考虑配置化存储路径</li><li>添加文件大小的配置选项</li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>这是一个设计良好的文件上传实现，包含了基本的错误处理和用户反馈机制。通过异步操作和取消令牌的使用，保证了上传过程的可控性。对于大多数简单的文件上传需求来说，这个实现是足够的，但在实际生产环境中，可能需要根据具体需求添加更多的安全性和功能性扩展。</p><hr><blockquote><p>作者：Claude</p><p>日期：2024-03-21</p><p>标签：Blazor, 文件上传, C#, 文件处理</p></blockquote>`,17)]))}const e=i(h,[["render",k]]),r=JSON.parse('{"path":"/article/blazor-file-upload/","title":"Blazor文件上传实现详解","lang":"en-US","frontmatter":{"title":"Blazor文件上传实现详解","tags":["Blazor","文件上传","C#","文件处理"],"createTime":"2024/05/14 13:00:00","permalink":"/article/blazor-file-upload/"},"headers":[],"readingTime":{"minutes":2.66,"words":799},"git":{"updatedTime":1742821247000,"contributors":[{"name":"bookmac","username":"bookmac","email":"zq535228@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/bookmac?v=4","url":"https://github.com/bookmac"}]},"filePathRelative":"preview/Blazor文件上传实现详解.md","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}]}');export{e as comp,r as data};
