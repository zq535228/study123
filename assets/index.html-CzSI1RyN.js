import{_ as n,c as i,b as a,o as l}from"./app-CQ4DyvhI.js";const e={};function p(t,s){return l(),i("div",null,s[0]||(s[0]=[a(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>本文主要介绍在Blazor项目中使用FreeSql实现一个简单的登录认证服务。通过这个示例，我们可以了解FreeSql的基本配置和使用方法，以及如何在Blazor中实现用户认证功能。</p><h2 id="主要内容" tabindex="-1"><a class="header-anchor" href="#主要内容"><span>主要内容</span></a></h2><h3 id="_1-freesql配置" tabindex="-1"><a class="header-anchor" href="#_1-freesql配置"><span>1. FreeSql配置</span></a></h3><p>在服务初始化时，我们通过FreeSqlBuilder配置了数据库连接：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">_fsql</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> FreeSql</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">FreeSqlBuilder</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">UseConnectionString</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">DataType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">MySql</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> _configuration</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">GetConnectionString</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">DefaultConnection</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">;AllowPublicKeyRetrieval=True</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">UseAdoConnectionPool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">UseMonitorCommand</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cmd</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> =&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">WriteLine</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">$&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Sql：</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">cmd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">CommandText</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">UseAutoSyncStructure</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Build</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要配置说明：</p><ul><li>使用MySQL数据库</li><li>启用连接池</li><li>配置SQL监控，方便调试</li><li>启用自动同步实体结构到数据库</li></ul><h3 id="_2-登录认证功能实现" tabindex="-1"><a class="header-anchor" href="#_2-登录认证功能实现"><span>2. 登录认证功能实现</span></a></h3><h4 id="_2-1-登录接口" tabindex="-1"><a class="header-anchor" href="#_2-1-登录接口"><span>2.1 登录接口</span></a></h4><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">HttpPost</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@login</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">AllowAnonymous</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> async</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Task</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ApiResult</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> login</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">string</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> username</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> string</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> password</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> string</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> TenantId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">main</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录功能特点：</p><ul><li>支持多租户（通过TenantId参数）</li><li>使用Cookie存储登录状态</li><li>登录成功生成加密token</li><li>Cookie设置安全选项（SameSite和Secure）</li></ul><h4 id="_2-2-登录状态检查" tabindex="-1"><a class="header-anchor" href="#_2-2-登录状态检查"><span>2.2 登录状态检查</span></a></h4><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">HttpGet</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@check</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">AllowAnonymous</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> async</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Task</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ApiResult</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> check</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查功能特点：</p><ul><li>验证token有效性</li><li>解密token获取用户信息</li><li>验证用户是否存在</li><li>返回用户基本信息</li></ul><h4 id="_2-3-登出功能" tabindex="-1"><a class="header-anchor" href="#_2-3-登出功能"><span>2.3 登出功能</span></a></h4><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">HttpGet</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@logout</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)]</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> async</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Task</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ApiResult</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> logout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">string</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> TenantId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">main</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>登出功能特点：</p><ul><li>删除登录Cookie</li><li>支持多租户登出</li></ul><h3 id="_3-安全考虑" tabindex="-1"><a class="header-anchor" href="#_3-安全考虑"><span>3. 安全考虑</span></a></h3><ol><li>Token加密</li></ol><ul><li>使用DesEncrypt进行token加密</li><li>token包含用户ID和登录时间信息</li></ul><ol start="2"><li>Cookie安全</li></ol><ul><li>设置SameSite=None</li><li>启用Secure标志</li><li>设置合理的过期时间</li></ul><ol start="3"><li>错误处理</li></ol><ul><li>完善的异常捕获</li><li>友好的错误提示</li></ul><h3 id="_4-其他功能" tabindex="-1"><a class="header-anchor" href="#_4-其他功能"><span>4. 其他功能</span></a></h3><h4 id="_4-1-http测试接口" tabindex="-1"><a class="header-anchor" href="#_4-1-http测试接口"><span>4.1 HTTP测试接口</span></a></h4><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">HttpGet</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@test</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">AllowAnonymous</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> async</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Task</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ApiResult</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> GetHttpTest</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提供了一个简单的HTTP请求测试接口，用于验证HTTP客户端功能。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>通过这个示例，我们可以看到：</p><ol><li>FreeSql提供了简单易用的数据库访问方式</li><li>在Blazor中实现认证服务需要注意安全性</li><li>多租户支持可以通过简单的参数扩展实现</li><li>完善的错误处理对提高系统稳定性很重要</li></ol><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><ol><li>实际生产环境中，密码应该使用更安全的加密方式</li><li>可以考虑添加更多的安全措施，如： <ul><li>登录失败次数限制</li><li>IP限制</li><li>双因素认证</li></ul></li><li>建议添加日志记录功能</li><li>可以考虑使用JWT替代Cookie认证</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>using ABCLab.Helper;</span></span>
<span class="line"><span>using AdminBlazor.Infrastructure.Encrypt;</span></span>
<span class="line"><span>using FreeSql;</span></span>
<span class="line"><span>using LinCms.Entities.Blog;</span></span>
<span class="line"><span>using Microsoft.AspNetCore.Authorization;</span></span>
<span class="line"><span>using Microsoft.AspNetCore.Mvc;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace ABCLab.Services;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// [Microsoft.AspNetCore.Mvc.Route(&quot;LabSystem/TestCate&quot;)]</span></span>
<span class="line"><span>[ApiController]</span></span>
<span class="line"><span>[Route(&quot;api/[controller]&quot;)]</span></span>
<span class="line"><span>[Tags(&quot;系统01&quot;)]</span></span>
<span class="line"><span>public class TestService</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    private readonly IFreeSql _fsql;</span></span>
<span class="line"><span>    private readonly IHttpContextAccessor _httpContextAccessor;</span></span>
<span class="line"><span>    private readonly IConfiguration _configuration;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public TestService(IHttpContextAccessor httpContextAccessor, IConfiguration configuration)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        _configuration = configuration;</span></span>
<span class="line"><span>        _fsql = new FreeSql.FreeSqlBuilder()</span></span>
<span class="line"><span>            .UseConnectionString(DataType.MySql, _configuration.GetConnectionString(&quot;DefaultConnection&quot;) + &quot;;AllowPublicKeyRetrieval=True&quot;)</span></span>
<span class="line"><span>            .UseAdoConnectionPool(true)</span></span>
<span class="line"><span>            .UseMonitorCommand(cmd =&gt; Console.WriteLine($&quot;Sql：{cmd.CommandText}&quot;))</span></span>
<span class="line"><span>            .UseAutoSyncStructure(true) //自动同步实体结构到数据库，只有CRUD时才会生成表</span></span>
<span class="line"><span>            .Build();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        _httpContextAccessor = httpContextAccessor;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [HttpGet(&quot;@add&quot;)]</span></span>
<span class="line"><span>    [AllowAnonymous]</span></span>
<span class="line"><span>    public List&lt;string&gt; getNames()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return new List&lt;string&gt;()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;first&quot;,</span></span>
<span class="line"><span>            &quot;second&quot;,</span></span>
<span class="line"><span>            &quot;third&quot;</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [HttpPost(&quot;@login&quot;)]</span></span>
<span class="line"><span>    [AllowAnonymous]</span></span>
<span class="line"><span>    public async Task&lt;ApiResult&gt; login(string username, string password, string TenantId = &quot;main&quot;)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if (username == &quot;admin&quot; &amp;&amp; password == &quot;admin&quot;)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            SysUser user = _fsql.Select&lt;SysUser&gt;().OrderBy(a=&gt;a.CreatedTime)?.First();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            string token = DesEncrypt.Encrypt(user.Id.ToString() + &quot;|&quot; + user.LoginTime.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;));</span></span>
<span class="line"><span>            _httpContextAccessor.HttpContext?.Response.Cookies.Append(&quot;_login_&quot; + TenantId, token, new CookieOptions()</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                Path = &quot;/&quot;,</span></span>
<span class="line"><span>                Expires = DateTimeOffset.UtcNow.AddDays(15.0),</span></span>
<span class="line"><span>                SameSite = SameSiteMode.None,</span></span>
<span class="line"><span>                Secure = true</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>            return (ApiResult)ApiResult.Success.SetData(new</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                token = token</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return (ApiResult)ApiResult.Error.SetData(new</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            login = false</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [HttpGet(&quot;@logout&quot;)]</span></span>
<span class="line"><span>    public async Task&lt;ApiResult&gt; logout(string TenantId = &quot;main&quot;)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        _httpContextAccessor.HttpContext?.Response.Cookies.Delete(&quot;_login_&quot; + TenantId);</span></span>
<span class="line"><span>        return (ApiResult)ApiResult.Success.SetData(new</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            success = true</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [HttpGet(&quot;@check&quot;)]</span></span>
<span class="line"><span>    [AllowAnonymous]</span></span>
<span class="line"><span>    public async Task&lt;ApiResult&gt; check()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        string? token = null;</span></span>
<span class="line"><span>        // 使用 TryGetValue 安全地获取 Cookie 值</span></span>
<span class="line"><span>        var hasToken = _httpContextAccessor.HttpContext?.Request.Cookies.TryGetValue(&quot;_login_main&quot;, out token) ?? false;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        if (!hasToken || string.IsNullOrEmpty(token))</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            return (ApiResult)ApiResult.Success.SetData(new</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                login = false,</span></span>
<span class="line"><span>                message = &quot;未登录或登录已过期&quot;</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try </span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            // 尝试解密 token</span></span>
<span class="line"><span>            var decryptedToken = DesEncrypt.Decrypt(token);</span></span>
<span class="line"><span>            var parts = decryptedToken.Split(&#39;|&#39;);</span></span>
<span class="line"><span>            if (parts.Length != 2)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                return (ApiResult)ApiResult.Error.SetData(new</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    login = false,</span></span>
<span class="line"><span>                    message = &quot;登录信息格式错误&quot;</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 验证用户是否存在</span></span>
<span class="line"><span>            var userId = long.Parse(parts[0]);</span></span>
<span class="line"><span>            var user = await _fsql.Select&lt;SysUser&gt;().Where(a =&gt; a.Id == userId).FirstAsync();</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            if (user == null)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                return (ApiResult)ApiResult.Error.SetData(new</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    login = false,</span></span>
<span class="line"><span>                    message = &quot;用户不存在&quot;</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return (ApiResult)ApiResult.Success.SetData(new</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                login = true,</span></span>
<span class="line"><span>                user = new</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    user.Id,</span></span>
<span class="line"><span>                    user.Username,</span></span>
<span class="line"><span>                    user.Nickname</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        catch (Exception ex)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            return (ApiResult)ApiResult.Error.SetData(new</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                login = false,</span></span>
<span class="line"><span>                message = &quot;登录信息验证失败&quot;</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [HttpGet(&quot;@test&quot;)]</span></span>
<span class="line"><span>    [AllowAnonymous]</span></span>
<span class="line"><span>    public async Task&lt;ApiResult&gt; GetHttpTest()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        var result = await HttpHelper.GetAsync(&quot;https://www.jianyandashu.com&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return (ApiResult)ApiResult.Success.SetData(new</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            StatusCode = result.StatusCode, // HTTP 状态码</span></span>
<span class="line"><span>            IsSuccessStatusCode = result.IsSuccessStatusCode, // 是否成功状态码</span></span>
<span class="line"><span>            ReasonPhrase = result.ReasonPhrase, // 状态描述</span></span>
<span class="line"><span>            Headers = result.Headers.ToDictionary(h =&gt; h.Key, h =&gt; string.Join(&quot;, &quot;, h.Value)), // 响应头</span></span>
<span class="line"><span>            Content = await result.Content.ReadAsStringAsync() // 响应内容</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38)]))}const r=n(e,[["render",p]]),h=JSON.parse('{"path":"/article/przdlh4r/","title":"FreeSql在Blazor中的实践-登录认证服务实现","lang":"en-US","frontmatter":{"title":"FreeSql在Blazor中的实践-登录认证服务实现","createTime":"2025/03/25 11:09:34","permalink":"/article/przdlh4r/"},"headers":[],"readingTime":{"minutes":3.47,"words":1040},"git":{"updatedTime":1743033376000,"contributors":[{"name":"bookmac","username":"bookmac","email":"zq535228@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/bookmac?v=4","url":"https://github.com/bookmac"}]},"filePathRelative":"preview/FreeSql在Blazor中的实践-登录认证服务实现.md","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}]}');export{r as comp,h as data};
