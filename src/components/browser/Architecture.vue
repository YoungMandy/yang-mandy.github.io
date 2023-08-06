<script setup lang="ts">
import PageHeader from '@/framework/PageHeader.vue';
</script>
<template>
  <section>
    <page-header 
      title="浏览器架构(Chrome)" 
      description="因为微软的Edge、Google以及国内的大部分浏览器都是基于Chromium二次开发而来,而Chrome又是Google官方的发行版,特性和Chromium基本一致,只存在产品层面的差异,Chrome又是市场占有率最高的浏览器,所以以Chrome作为了解浏览器架构的入口">
    </page-header>

    <h2>Chrome采用的是多进程架构</h2>
    <p>各个进程之间通过(IPC)进行通信</p>
    <img src="@/assets/chrome-architecture.webp" width="600" alt="chrome architecture image" />

    <h3>各个进程的作用</h3>
    <ul>
      <li><strong>浏览器主进程</strong>,主要负责界面显示(渲染进程渲染好图片给到主进程)、用户交互、子进程管理、同时提供存储功能</li>
      <li><strong>渲染进程</strong>,核心人物是把HTML、CSS、Javascript转换成用户可交互的网页,排版引擎Blink和Javascript引擎V8都是运行在该进程里。默认情况下,渲染进程都是运行在沙箱里</li>
      <li><strong>GPU进程</strong>,其实一开始是没有GPU进程的,它的出现最初是为了实现3D CSS效果,只是随后网页、Chrome的UI界面都用GPU来绘制,这使得GPU成为浏览器的普遍需求。最后,Chrome也在其架构中加入了GPU进程</li>
      <li><strong>网络进程</strong>,主要负责网页的资源加载</li>
      <li><strong>插件进程</strong>, 主要负责插件的运行,为了插件的崩溃不影响到页面,用到了沙箱来隔离</li>
    </ul>

    <h3>浏览器沙箱</h3>
    <p>浏览器沙盒的实现原理主要是通过系统内核提供的安全机制,将浏览器进程隔离开来，从而实现每个浏览器进程间相互独立，不会互相影响。当一个进程崩溃时，其它进程能够继续正常运行。同时，浏览器沙盒技术可以<mark>限制</mark>某个进程的资源使用,包括内存、CPU、磁盘等,从而避免恶意代码利用相应的资源导致整个系统出现问题</p>
  
   
  </section>
</template>
<style>
</style>