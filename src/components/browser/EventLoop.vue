<script setup lang="ts">
</script>
<template>
  <section>
   <h1 class="page-title">事件循环</h1>
    <p class="page-description">
      浏览器上会发生很多事件,如IO输入、按钮点击、屏幕缩放等等,浏览器需要有个调度机制让这些事件有条不紊地顺序执行,这个调度机制就是事件循环。
    </p>
    <h2>消息队列</h2>
    <p>一个个任务放到消息队列里面依次执行,在<strong>消息队列</strong>里面的任务称为<strong>宏任务</strong>,为了让优先级更高的新任务更快的执行,浏览器又为每个宏任务建立了一个<strong>微任务队列</strong>,当前宏任务执行完毕后,先看当前宏任务的微任务队列里面是否有微任务要执行,有的话先把微任务执行完毕,再执行下一个宏任务</p>
    <img src="@/assets/eventLoop.png" width="800" style="object-fit: contain;">
  </section>
</template>
<style>
</style>