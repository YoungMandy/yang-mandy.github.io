<script setup lang="ts">
import { eventBusString }  from '@/components/browser/js/triggerAndListen.js'
</script>
<template>
  <section>
   <h1 class="page-title">发布订阅模式</h1>
    <p class="page-description">
      对于一个事件,进行监听之后(需要一个listen函数,参数有事件名、回调函数),在触发的事件(trigger函数)的时候,可以自动执行监听时注册的回调函数
    </p>
    
    <CopyWrapper :msg="eventBusString">
      <highlightjs language="js" :code="eventBusString"/>
    </CopyWrapper>
    
  </section>
</template>
<style>
</style>