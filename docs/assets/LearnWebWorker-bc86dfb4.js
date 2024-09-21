import{d as y,r as R,a as j,b as u,c as x,e as S,g as r,h as s,f as o,w as t,j as M}from"./index-5125de2f.js";const N="/assets/web_worker_export_error-fb135a28.png",U={class:"component__learn-web-worker"},C={class:"demo-container"},g=`
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
`,b=`
if(window.Worker){
  //  new Worker的参数是一个JS文件的url,在Vue3 + vite项目中，可以通过new URL()创建
  worker = new Worker(new URL('./learnWebWorker.js', import.meta.url));
}
`,f=`
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
`,L=y({__name:"LearnWebWorker",setup(J){let l=R(null);function v(){l.value=new Worker(new URL("/assets/learnWebWorker-a495c568.js",self.location)),l.value.postMessage(n.num),n.workerReceive=JSON.stringify(n.num),l.value.onmessage=i=>{console.log("worker.onmessage:",i),n.workerResponse=JSON.stringify(i.data),n.mainReceive=JSON.stringify(i.data)},l.value.onerror=i=>{console.log("worker.onerror:",i),l.value.terminate()}}const n=j({num:10,workerReceive:"",workerResponse:"",mainReceive:""}),W=()=>{l.value&&l.value.terminate()};return(i,e)=>{const _=u("a-input-number"),m=u("a-form-item"),p=u("a-textarea"),w=u("a-button"),c=u("a-form"),d=u("highlightjs"),k=u("CopyWrapper");return x(),S("section",U,[e[6]||(e[6]=r("h1",{class:"page-title"},"Web Worker",-1)),e[7]||(e[7]=r("p",{class:"page-description"},[s(" Web Worker 相当于在JS引擎里单独开了一个线程，去执行一些耗性能的、复杂的JS任务。详细版本见"),r("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers"},"MDN")],-1)),r("div",C,[o(c,null,{default:t(()=>[o(m,{label:"传递给web worker的数字"},{default:t(()=>[o(_,{value:n.num,"onUpdate:value":e[0]||(e[0]=a=>n.num=a)},null,8,["value"])]),_:1}),o(m,{label:"js文件,通过onmessage接收到的数据"},{default:t(()=>[o(p,{value:n.workerReceive,"onUpdate:value":e[1]||(e[1]=a=>n.workerReceive=a),disabled:!0},null,8,["value"])]),_:1}),o(m,{label:"js文件,通过postMessage传给主线程的的数据"},{default:t(()=>[o(p,{value:n.workerResponse,"onUpdate:value":e[2]||(e[2]=a=>n.workerResponse=a),disabled:!0},null,8,["value"])]),_:1}),o(m,{label:"主线程通过onmessage接受到的数据"},{default:t(()=>[o(p,{value:n.mainReceive,"onUpdate:value":e[3]||(e[3]=a=>n.mainReceive=a),disabled:!0},null,8,["value"])]),_:1}),o(m,{"wrapper-col":{span:14,offset:4}},{default:t(()=>[o(w,{type:"primary",onClick:v},{default:t(()=>e[4]||(e[4]=[s("创建web worker")])),_:1}),o(w,{style:{"margin-left":"10px"},onClick:W},{default:t(()=>e[5]||(e[5]=[s("销毁web worker")])),_:1})]),_:1})]),_:1})]),e[8]||(e[8]=r("h4",null,"1.创建Web Worker的方式",-1)),e[9]||(e[9]=r("p",null,[s(" 单独写一个js文件执行需要web server处理的逻辑,这个文件中不能有"),r("code",null,"import/export"),s(",否则会报错 ")],-1)),e[10]||(e[10]=r("img",{src:N,width:"500",style:{"margin-bottom":"20px"}},null,-1)),o(k,{msg:b},{default:t(()=>[o(d,{language:"js",code:b})]),_:1}),e[11]||(e[11]=r("h4",null,"2.Web Worker的api",-1)),e[12]||(e[12]=r("ul",null,[r("li",null,[r("code",null,"postMessage(data:any)"),s("方法在主线程和web worker中传递消息 ")]),r("li",null,[r("code",null,"onmessage(data:any)"),s("方法监听接收消息")]),r("li",null,[r("code",null,"onerror(error:any)"),s("方法处理web worker的报错")]),r("li",null,[r("code",null,"worker.terminate()"),s("终止web worker")])],-1)),o(k,{msg:f},{default:t(()=>[o(d,{language:"js",code:f})]),_:1}),o(k,{msg:g},{default:t(()=>[o(d,{language:"js",code:g})]),_:1})])}}});const O=M(L,[["__scopeId","data-v-f7fdb264"]]);export{O as default};
