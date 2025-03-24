import comp from "/Users/Zhuanz/reps/study123/vuepress-starter/docs/.vuepress/.temp/pages/posts/Blazor中使用MiniExcel导入数据.html.vue"
const data = JSON.parse("{\"path\":\"/posts/Blazor%E4%B8%AD%E4%BD%BF%E7%94%A8MiniExcel%E5%AF%BC%E5%85%A5%E6%95%B0%E6%8D%AE.html\",\"title\":\"在Blazor中使用MiniExcel实现Excel数据导入\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"实现步骤\",\"slug\":\"实现步骤\",\"link\":\"#实现步骤\",\"children\":[{\"level\":3,\"title\":\"1. 添加NuGet包引用\",\"slug\":\"_1-添加nuget包引用\",\"link\":\"#_1-添加nuget包引用\",\"children\":[]},{\"level\":3,\"title\":\"2. 创建导入组件\",\"slug\":\"_2-创建导入组件\",\"link\":\"#_2-创建导入组件\",\"children\":[]},{\"level\":3,\"title\":\"3. 实现导入方法\",\"slug\":\"_3-实现导入方法\",\"link\":\"#_3-实现导入方法\",\"children\":[]}]},{\"level\":2,\"title\":\"关键点说明\",\"slug\":\"关键点说明\",\"link\":\"#关键点说明\",\"children\":[]},{\"level\":2,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/Blazor中使用MiniExcel导入数据.md\",\"excerpt\":\"\\n<h2>概述</h2>\\n<p>本文介绍如何在Blazor应用中使用MiniExcel库实现Excel数据的导入功能。MiniExcel是一个轻量级的Excel读写库,具有低内存占用、高性能等特点。我们将结合FreeSql实现数据的批量导入。</p>\\n<h2>实现步骤</h2>\\n<h3>1. 添加NuGet包引用</h3>\\n<p>在项目文件(.csproj)中添加MiniExcel包引用:</p>\\n<div class=\\\"language-xml line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"xml\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>PackageReference</span> <span class=\\\"token attr-name\\\">Include</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>MiniExcel<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">Version</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>1.39.0<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token punctuation\\\">/&gt;</span></span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
