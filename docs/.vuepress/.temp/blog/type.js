export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,10,11,12,2,3,4,5,6,7,8,9,13]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[10,11,12,2,3,4,5,6,7,8,9,13,15,14,0,1]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

