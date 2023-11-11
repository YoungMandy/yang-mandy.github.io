<script setup lang="ts">
import { ref } from 'vue';
import workerFile from '@/components/browser/learnWebWorker.js'
import { eventBusString } from '@/components/browser/js/triggerAndListen.js'
let worker = ref<any>(null);
const numberList = 10;
function createWebWorker () {
  worker = new Worker(new URL('./learnWebWorker.js',import.meta.url));
  console.log('worker.value', worker.value);
  worker.postMessage(numberList);

  worker.onmessage = (event:Event)=>{
    console.log('worker.onmessage', event)
  }
  worker.onerror = (event: Event) => { 
    console.log('worker.onerror', event);
    worker.terminate();
  }
}
</script>
<template>
  <section>
   <h1 class="page-title">Web Worker</h1>
    <p class="page-description">
     Web Worker 相当于在JS引擎里单独开了一个线程，去执行一些耗性能的、复杂的JS任务。
    </p>
    
    <a-button @click="createWebWorker">创建web worker</a-button>
    
  </section>
</template>
<style>
</style>