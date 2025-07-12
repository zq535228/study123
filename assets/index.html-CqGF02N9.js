import{_ as n,c as e,b as a,o as i}from"./app-CQ4DyvhI.js";const l={};function t(o,s){return i(),e("div",null,s[0]||(s[0]=[a(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>public Test(IHttpContextAccessor httpContextAccessor, IConfiguration configuration)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _configuration = configuration;</span></span>
<span class="line"><span>    _fsql = new FreeSql.FreeSqlBuilder()</span></span>
<span class="line"><span>        .UseConnectionString(DataType.MySql, _configuration.GetConnectionString(&quot;DefaultConnection&quot;) + &quot;;AllowPublicKeyRetrieval=True&quot;)</span></span>
<span class="line"><span>        .UseAdoConnectionPool(true)</span></span>
<span class="line"><span>        .UseMonitorCommand(cmd =&gt; Console.WriteLine($&quot;Sql：{cmd.CommandText}&quot;))</span></span>
<span class="line"><span>        .UseAutoSyncStructure(true) //自动同步实体结构到数据库，只有CRUD时才会生成表</span></span>
<span class="line"><span>        .Build();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    _httpContextAccessor = httpContextAccessor;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>appsettings</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;Logging&quot;: {</span></span>
<span class="line"><span>    &quot;LogLevel&quot;: {</span></span>
<span class="line"><span>      &quot;Default&quot;: &quot;Information&quot;,</span></span>
<span class="line"><span>      &quot;Microsoft.AspNetCore&quot;: &quot;Warning&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;AppSettings&quot;: {</span></span>
<span class="line"><span>    &quot;InjectMiniProfiler&quot;: false</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;AllowedHosts&quot;: &quot;*&quot;,</span></span>
<span class="line"><span>  &quot;DetailedErrors&quot;: true,</span></span>
<span class="line"><span>  &quot;ConnectionStrings&quot;: {</span></span>
<span class="line"><span>    &quot;DefaultConnection&quot;: &quot;Data Source=localhost;Port=3306;User ID=root;Password=Zz123456; Initial Catalog=ABCLab;Charset=utf8mb4; SslMode=none;Min pool size=1&quot;,</span></span>
<span class="line"><span>    &quot;RemoteConnection&quot;: &quot;Data Source=38.147.184.00;Port=3306;User ID=Cartoon;Password=Zz123456; Initial Catalog=Cartoon;Charset=utf8mb4; SslMode=none;Min pool size=1&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const r=n(l,[["render",t]]),c=JSON.parse('{"path":"/article/freesql-connection-guide/","title":"FreeSql的链接数据库","lang":"en-US","frontmatter":{"title":"FreeSql的链接数据库","tags":["FreeSql","数据库","ORM","后端","连接池"],"createTime":"2024/03/24 10:00:00","permalink":"/article/freesql-connection-guide/"},"headers":[],"readingTime":{"minutes":0.48,"words":144},"git":{"updatedTime":1742857404000,"contributors":[{"name":"bookmac","username":"bookmac","email":"zq535228@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/bookmac?v=4","url":"https://github.com/bookmac"}]},"filePathRelative":"preview/Freesql的链接数据库.md","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}]}');export{r as comp,c as data};
