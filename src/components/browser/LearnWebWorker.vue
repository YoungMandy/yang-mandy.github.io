<script setup lang="ts">
import { ref, reactive } from 'vue';

let worker = ref<any>(null);

function createWebWorker() {
  worker = new Worker(new URL('./js/learnWebWorker.js', import.meta.url));

  // console.log('worker.value', worker.value);
  // const el = document.querySelector('.page-description');
  // worker.postMessage([numberList,el]);// postMessage传递的内容不能是DOM

  worker.postMessage(form.num);
 
  form.workerReceive = JSON.stringify(form.num);


  worker.onmessage = (event: Event) => {
    console.log('worker.onmessage:', event);
    form.workerResponse = JSON.stringify((event as any).data);
    form.mainReceive = JSON.stringify((event as any).data);
  };
  worker.onerror = (event: Event) => {
    console.log('worker.onerror:', event);
    worker.terminate(); // 终止web worker
  };
}

const createWebWorkerExampleString = `
// 在主线程中创建WebWorker,并传递参数
function createWebWorker () {
  worker = new Worker(new URL('./js/learnWebWorker.js', import.meta.url));
  
  console.log('worker.value', worker.value);
  // const el = document.querySelector('.page-description');
  // worker.postMessage(el);// 会报错,postMessage传递的内容不能是DOM

  worker.postMessage(startNum);

  worker.onmessage = (event:Event)=>{
    console.log('worker.onmessage', event)
  }
  worker.onerror = (event: Event) => { 
    console.log('worker.onerror', event);
    worker.terminate();
  }
}
`;

const createWebWorkerString = `
if(window.Worker){
  //  new Worker的参数是一个JS文件的url,在Vue3 + vite项目中，可以通过new URL()创建
  worker = new Worker(new URL('./learnWebWorker.js', import.meta.url));
}
`;
const exampleString = `
// learnWebWorker.js
  self.onmessage = function(event) { 
    console.log('self.onmessage',event)
    const data = event.data;
    let num = 0;

    for (let i = 0; i < data; i++) { 
      num += i;
    }
    self.postMessage(num);
  }
`;
const form = reactive({
  num: 10,
  workerReceive: '',
  workerResponse: '',
  mainReceive: '',
});
const destroyWebWorker = () => {
  if (worker.value) {
    worker.terminate();
  }
}

</script>
<template>
  <section class="component__learn-web-worker">
    <h1 class="page-title">Web Worker</h1>
    <p class="page-description">
      Web Worker
      相当于在JS引擎里单独开了一个线程，去执行一些耗性能的、复杂的JS任务。详细版本见<a
        href="https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers"
        >MDN</a
      >
    </p>

    <div class="demo-container">
      <a-form>
        <a-form-item label="传递给web worker的数字">
          <a-input-number v-model:value="form.num" />
        </a-form-item>
        <a-form-item label="js文件,通过onmessage接收到的数据">
          <a-textarea
            v-model:value="form.workerReceive"
            :disabled="true"
          >
          </a-textarea>
        </a-form-item>
        <a-form-item
          label="js文件,通过postMessage传给主线程的的数据"
        >
          <a-textarea v-model:value="form.workerResponse" :disabled="true"/>
        </a-form-item>
        <a-form-item label="主线程通过onmessage接受到的数据">
          <a-textarea v-model:value="form.mainReceive" :disabled="true"/>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="createWebWorker"
            >创建web worker</a-button
          >
          <a-button style="margin-left: 10px" @click="destroyWebWorker">销毁web worker</a-button>
        </a-form-item>
      </a-form>
    </div>

    <!-- <a-button @click="createWebWorker">创建web worker</a-button> -->

    <h4>1.创建Web Worker的方式</h4>
    <p>
      单独写一个js文件执行需要web
      server处理的逻辑,这个文件中不能有<code>import/export</code>,否则会报错
    </p>
    <img
      src="@/components/browser/images/web_worker_export_error.png"
      width="500"
      style="margin-bottom: 20px"
    />

    <CopyWrapper :msg="createWebWorkerString">
      <highlightjs language="js" :code="createWebWorkerString" />
    </CopyWrapper>

    <h4>2.Web Worker的api</h4>
    <ul>
      <li>
        <code>postMessage(data:any)</code>方法在主线程和web worker中传递消息
      </li>
      <li><code>onmessage(data:any)</code>方法监听接收消息</li>
      <li><code>onerror(error:any)</code>方法处理web worker的报错</li>
      <li><code>worker.terminate()</code>终止web worker</li>
    </ul>

    <CopyWrapper :msg="exampleString">
      <highlightjs language="js" :code="exampleString" />
    </CopyWrapper>

    <CopyWrapper :msg="createWebWorkerExampleString">
      <highlightjs language="js" :code="createWebWorkerExampleString" />
    </CopyWrapper>
  </section>
</template>
<style lang="scss" scoped>
.component__learn-web-worker {
  img {
    border: 2px solid #eee;
    border-radius: 8px;
  }
  .demo-container{
    padding:16px;
    border: 2px solid #eee;
    border-radius: 8px;
    width:600px;
    margin-bottom:24px;
    :deep .ant-form-item-label{
      width:300px;
    }
  }
}
</style>
