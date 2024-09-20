<!--  -->
<script setup>
import {
  onMounted,
  ref,
  reactive,
  watch,
  computed,
  onUnmounted,
  onUpdated,
} from 'vue';
// import Md from './httpsblog.md?raw';
import MarkdownIt from 'markdown-it';
const markdownText = `
# Markdown Example

![Vue logo](https://vuejs.org/images/logo.png "Vue logo")

[Vue.js 官方网站](https://vuejs.org/ "Vue.js 官方网站")
`;

const markdownHTML = ref("");
onMounted(() => {
  const mark = new MarkdownIt();
  markdownHTML.value = mark.render(markdownText);
})
</script>
<template>
  <section>
    <page-header title="为什么我们需要Https" description=""> </page-header>
     <div v-html="markdownHTML"></div>
  </section>
</template>
