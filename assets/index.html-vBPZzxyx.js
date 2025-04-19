import{_ as i,c as a,b as h,o as n}from"./app-CLQ1Ag4Z.js";const k={};function l(t,s){return n(),a("div",null,s[0]||(s[0]=[h(`<h2 id="数据库连接" tabindex="-1"><a class="header-anchor" href="#数据库连接"><span>数据库连接</span></a></h2><p>在使用 FreeSql 时，连接数据库是一个重要的步骤。以下是两种常用的数据库连接类型：</p><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h3><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">DataType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">MySql</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">    Data</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Source</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">127.0.0.1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Port</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">3306</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">User</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ID</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">root</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Password</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">root</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Initial</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Catalog</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">cccddd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Charset</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">utf8mb4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> SslMode</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">none</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Min</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> pool</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite"><span>SQLite</span></a></h3><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">DataType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Sqlite</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">    Data</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Source</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">DataDirectory</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">\\</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">document</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">db</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Attachs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">xxxtb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">db</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Pooling</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Min</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Pool</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="导航属性" tabindex="-1"><a class="header-anchor" href="#导航属性"><span>导航属性</span></a></h2><p>导航属性用于在实体之间建立关系。以下是三种常见的导航属性类型：</p><h3 id="manytoone" tabindex="-1"><a class="header-anchor" href="#manytoone"><span>ManyToOne</span></a></h3><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> User</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    [</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Column</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">IsPrimary</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> IsIdentity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)]</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> set</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> GroupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> set</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 在 本实体 查找 GroupId 属性，与 Group.主键 关联</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    [</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Navigate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">nameof</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">GroupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))]</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Group</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Group</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> set</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onetomany" tabindex="-1"><a class="header-anchor" href="#onetomany"><span>OneToMany</span></a></h3><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Group</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    [</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Column</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">IsPrimary</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> IsIdentity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)]</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> set</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> string</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> GroupName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> set</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 在 User 查找 GroupId 属性，与 本实体.主键 关联</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    [</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Navigate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">nameof</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">User</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">GroupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))]</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> List</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">User</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Users</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> set</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="manytomany" tabindex="-1"><a class="header-anchor" href="#manytomany"><span>ManyToMany</span></a></h3><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Navigate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ManyToMany</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> typeof</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">TagSong</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))]</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> List</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Tag</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> set</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓储操作" tabindex="-1"><a class="header-anchor" href="#仓储操作"><span>仓储操作</span></a></h2><p>FreeSql 提供了强大的仓储操作功能，以下是一些常用的操作：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">var</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> fsql</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">GetRepository</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">object</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">AsType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">实体类型</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Insert</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">..</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Update</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">..</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Delete</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">..</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">InsertOrUpdate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">..</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="withsql-方法" tabindex="-1"><a class="header-anchor" href="#withsql-方法"><span>WithSql 方法</span></a></h2><p>在 FreeSql 中，<code>WithSql</code> 方法允许我们直接使用 SQL 查询来获取数据。以下是一个使用示例：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">fsql</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Select</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Topic</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">WithSql</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">select * from Topic where clicks &gt; @val</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> val</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Page</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ToList</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>WithSql</code> 方法，我们可以灵活地执行自定义 SQL 查询，并结合 FreeSql 的其他功能，如分页等。</p><h2 id="查询子集合表的部分字段" tabindex="-1"><a class="header-anchor" href="#查询子集合表的部分字段"><span>查询子集合表的部分字段</span></a></h2><p>在使用 FreeSql 时，我们可以通过选择子集合表的部分字段来避免字段过多的问题。以下是一个使用示例：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">fsql</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Select</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Tag</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">IncludeMany</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">a</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> =&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Goods</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Select</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">b</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> =&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Goods</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>通过这种方式，我们可以仅选择需要的字段，从而提高查询效率并减少不必要的数据传输。</p><h2 id="审计-curd-操作" tabindex="-1"><a class="header-anchor" href="#审计-curd-操作"><span>审计 CURD 操作</span></a></h2><p>在使用 FreeSql 时，我们可以通过 AOP（面向切面编程）来实现对 CURD 操作的审计功能。以下是一个使用示例：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">fsql</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Aop</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">CurdAfter</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ElapsedMilliseconds</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &gt;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 200</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 记录日志</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 发送短信给负责人</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种方式，我们可以监控 SQL 操作的执行时间，并在超过设定的阈值时采取相应的措施，如记录日志或通知相关负责人。</p><p>通过以上的总结，我们可以更好地理解和使用 FreeSql 进行数据库操作和实体关系的管理。</p>`,30)]))}const p=i(k,[["render",l]]),d=JSON.parse('{"path":"/article/freesql-database-connection/","title":"FreeSql数据库连接和导航属性详解","lang":"en-US","frontmatter":{"title":"FreeSql数据库连接和导航属性详解","tags":["FreeSql","数据库","ORM","C#","导航属性"],"createTime":"2024/03/24 10:00:00","permalink":"/article/freesql-database-connection/"},"headers":[],"readingTime":{"minutes":2.13,"words":638},"git":{"updatedTime":1742821375000,"contributors":[{"name":"bookmac","username":"bookmac","email":"zq535228@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/bookmac?v=4","url":"https://github.com/bookmac"}]},"filePathRelative":"preview/FreeSql数据库连接和导航属性.md","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}]}');export{p as comp,d as data};
