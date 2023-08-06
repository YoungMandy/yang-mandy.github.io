<script setup lang="ts">
import { eventLoopTest } from '@/components/browser/js/evetLoop.js'
import PageHeader from '@/framework/PageHeader.vue';
</script>
<template>
  <section>
    <page-header 
      title="事件循环" 
      description="浏览器上会发生很多事件,如IO输入、按钮点击、屏幕缩放等等,浏览器需要有个调度机制让这些事件有条不紊地顺序执行,这个调度机制就是事件循环。">
    </page-header>
  
    <h2>消息队列</h2>
    <p>一个个任务放到消息队列里面依次执行,在<strong>消息队列</strong>里面的任务称为<strong>宏任务</strong>,为了让优先级更高的新任务更快的执行,浏览器又为每个宏任务建立了一个<strong>微任务队列</strong>,当前宏任务执行完毕后,先看当前宏任务的微任务队列里面是否有微任务要执行,有的话先把微任务执行完毕,再执行下一个宏任务</p>
    <img src="@/assets/event-loop.png" width="600" style="object-fit: contain;padding:20px;border:1px solid #eee;margin-bottom: 16px;">

    <h2>微任务</h2>
    <ol>浏览器提供了五种Observer来监听页面变化
      <li><code>MutationObserver</code></li>
      <li><code>IntersectionObserver</code></li>
      <li><code>PerformanceObserver</code></li>
      <li><code>ResizeObserver</code></li>
      <li><code>ReportingObderver</code></li>
    </ol>
    Observer属于微任务,且优先级小于Promise,参考来源<a link="https://zhuanlan.zhihu.com/p/482144072">浏览器的五种观察者模式</a>

    <p>研究事件循环和闭包的参考代码,可以用开发者工具调试,注意查看调用栈</p>
    <CopyWrapper :msg="eventLoopTest">
      <highlightjs language="js" :code="eventLoopTest" />
    </CopyWrapper>
    
  </section>
</template>
<style>
</style>