<script setup>
import {
  ref,
} from 'vue';
import md from './httpsblog.md?raw';
const markdownHTML = ref(md);

</script>
<template>
  <section>
    <markdown-Wrapper title="为什么我们需要Https" description="" :content="markdownHTML"/>  
  </section>
</template>
