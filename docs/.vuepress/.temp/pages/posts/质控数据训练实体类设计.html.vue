<template><div><h1 id="质控数据训练实体类设计与实现" tabindex="-1"><a class="header-anchor" href="#质控数据训练实体类设计与实现"><span>质控数据训练实体类设计与实现</span></a></h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>在实验室质量控制(QC)系统中，训练数据是评估分析性能和建立统计控制限的基础。本文介绍了TrainData实体类的设计与实现，该类用于存储和管理质控数据的统计参数和控制限。</p>
<h2 id="实体类设计" tabindex="-1"><a class="header-anchor" href="#实体类设计"><span>实体类设计</span></a></h2>
<p>TrainData实体类继承自EntityCreated基类，包含了质控数据分析所需的各种统计参数。以下是该实体类的完整实现：</p>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code><span class="line"><span class="token keyword">namespace</span> <span class="token namespace">ABCLab<span class="token punctuation">.</span>Entities<span class="token punctuation">.</span>QC</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">using</span> <span class="token namespace">FreeSql<span class="token punctuation">.</span>DataAnnotations</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TrainData</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">EntityCreated</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// 数据个数</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> DataCount <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// 均值</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> Mean <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// 标准差</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> StandardDeviation <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// α值（2.5%）</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> AlphaValue <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// β值（7.5%）</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> BetaValue <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// 下限</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> LowerLimit <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// 上限</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> UpperLimit <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// 是否截断</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> IsTruncated <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// 统计方法</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token function">Column</span><span class="token punctuation">(</span>StringLength <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> StatisticalMethod <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// 权重</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> Weight <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// Mean（均值）</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> MeanValue <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// SD（标准差）</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> SD <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// MAX（最大值）</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> MAX <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// MIN（最小值）</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> MIN <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// 报警线2SD</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> AlarmLine2SD <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// 报警线3SD</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> AlarmLine3SD <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// TEA（总允许误差）</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">double</span></span> TEA <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token doc-comment comment">/// 第N个数报警</span></span>
<span class="line">    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span></span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> AlarmAtNthNumber <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性说明" tabindex="-1"><a class="header-anchor" href="#属性说明"><span>属性说明</span></a></h2>
<h3 id="基本统计参数" tabindex="-1"><a class="header-anchor" href="#基本统计参数"><span>基本统计参数</span></a></h3>
<ul>
<li><strong>DataCount</strong>: 数据集中的样本数量</li>
<li><strong>Mean</strong> 和 <strong>MeanValue</strong>: 数据的平均值</li>
<li><strong>StandardDeviation</strong> 和 <strong>SD</strong>: 数据的标准差，衡量数据分散程度</li>
<li><strong>MAX</strong> 和 <strong>MIN</strong>: 数据集中的最大值和最小值</li>
</ul>
<h3 id="控制限相关参数" tabindex="-1"><a class="header-anchor" href="#控制限相关参数"><span>控制限相关参数</span></a></h3>
<ul>
<li><strong>AlphaValue</strong>: 2.5%处的α值，用于计算控制限</li>
<li><strong>BetaValue</strong>: 7.5%处的β值，用于计算控制限</li>
<li><strong>LowerLimit</strong> 和 <strong>UpperLimit</strong>: 控制图的下限和上限</li>
<li><strong>AlarmLine2SD</strong>: 2个标准差的报警线</li>
<li><strong>AlarmLine3SD</strong>: 3个标准差的报警线</li>
<li><strong>TEA</strong>: 总允许误差，通常基于临床或分析性能要求</li>
</ul>
<h3 id="其他控制参数" tabindex="-1"><a class="header-anchor" href="#其他控制参数"><span>其他控制参数</span></a></h3>
<ul>
<li><strong>IsTruncated</strong>: 指示数据是否被截断处理</li>
<li><strong>StatisticalMethod</strong>: 使用的统计方法，如&quot;Westgard规则&quot;</li>
<li><strong>Weight</strong>: 用于加权计算的权重值</li>
<li><strong>AlarmAtNthNumber</strong>: 指定第N个数据点出现时触发报警</li>
</ul>
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2>
<p>TrainData实体类主要应用于以下场景：</p>
<ol>
<li><strong>质控数据训练</strong>: 使用历史数据计算统计参数，建立控制限</li>
<li><strong>Westgard规则应用</strong>: 实现Westgard多规则质控策略</li>
<li><strong>质控图生成</strong>: 为控制图提供所需的统计参数</li>
<li><strong>报警规则配置</strong>: 设置和存储各种报警阈值和规则</li>
</ol>
<h2 id="freesql特性应用" tabindex="-1"><a class="header-anchor" href="#freesql特性应用"><span>FreeSql特性应用</span></a></h2>
<p>实体类中使用了FreeSql的<code v-pre>[Column]</code>特性来指定数据库列的属性：</p>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code><span class="line"><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>StringLength <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> StatisticalMethod <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样可以确保在数据库中该字段的长度限制为100个字符。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>TrainData实体类的设计充分考虑了实验室质控数据的特点和需求，提供了完整的统计参数和控制限存储能力。通过这个实体类，系统可以有效地管理质控数据的训练结果，为质量控制提供可靠的基础数据。</p>
<hr>
<blockquote>
<p>作者：Claude</p>
<p>日期：2024-05-14</p>
<p>标签：质控, 实体类设计, FreeSql, 数据分析</p>
</blockquote>
</div></template>


