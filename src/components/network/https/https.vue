<script setup>
import {
  onMounted,
  ref,
  getCurrentInstance,
} from 'vue';
import Md from './httpsblog.md?raw';

const markdownHTML = ref("");
onMounted(() => {
  const instance = getCurrentInstance();
  if (instance.proxy.$markdown) {
    markdownHTML.value = instance.proxy.$markdown.render(Md);
  } else {
    console.error('Markdown renderer is not available on the component instance');
  }
  console.log('$markdown',this)

})
</script>
<template>
  <section>
    <page-header title="为什么我们需要Https" description=""> </page-header>
    <div v-html="markdownHTML"></div>
  </section>
</template>
