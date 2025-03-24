import comp from "/Users/Zhuanz/reps/study123/vuepress-starter/docs/.vuepress/.temp/pages/posts/article10.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article10.html\",\"title\":\"Article 10\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-10T00:00:00.000Z\",\"category\":[\"CategoryA\",\"CategoryB\"],\"tag\":[\"tag C\",\"tag D\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1742796828000,\"contributors\":[{\"name\":\"bookmac\",\"username\":\"bookmac\",\"email\":\"zq535228@qq.com\",\"commits\":1,\"url\":\"https://github.com/bookmac\"}],\"changelog\":[{\"hash\":\"78d3943fad905c55c8bf04346c3fd7b14927f5f1\",\"time\":1742796828000,\"email\":\"zq535228@qq.com\",\"author\":\"bookmac\",\"message\":\"初始代码\"}]},\"filePathRelative\":\"posts/article10.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
