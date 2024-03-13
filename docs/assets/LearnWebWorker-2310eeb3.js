import{d as R,r as j,a as x,b as i,c as S,f as o,e,w as n,g as M,h as t,p as N,j as U,_ as C}from"./index-f8c4927d.js";const L="/assets/web_worker_export_error-fb135a28.png",c=_=>(N("data-v-e727a0e9"),_=_(),U(),_),I={class:"component__learn-web-worker"},J=c(()=>o("h1",{class:"page-title"},"Web Worker",-1)),E=c(()=>o("p",{class:"page-description"},[t(" Web Worker 相当于在JS引擎里单独开了一个线程，去执行一些耗性能的、复杂的JS任务。详细版本见"),o("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers"},"MDN")],-1)),O={class:"demo-container"},V=c(()=>o("h4",null,"1.创建Web Worker的方式",-1)),B=c(()=>o("p",null,[t(" 单独写一个js文件执行需要web server处理的逻辑,这个文件中不能有"),o("code",null,"import/export"),t(",否则会报错 ")],-1)),z=c(()=>o("img",{src:L,width:"500",style:{"margin-bottom":"20px"}},null,-1)),A=c(()=>o("h4",null,"2.Web Worker的api",-1)),D=c(()=>o("ul",null,[o("li",null,[o("code",null,"postMessage(data:any)"),t("方法在主线程和web worker中传递消息 ")]),o("li",null,[o("code",null,"onmessage(data:any)"),t("方法监听接收消息")]),o("li",null,[o("code",null,"onerror(error:any)"),t("方法处理web worker的报错")]),o("li",null,[o("code",null,"worker.terminate()"),t("终止web worker")])],-1)),g=`
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
`,W=`
if(window.Worker){
  //  new Worker的参数是一个JS文件的url,在Vue3 + vite项目中，可以通过new URL()创建
  worker = new Worker(new URL('./learnWebWorker.js', import.meta.url));
}
`,b=`
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
`,P=R({__name:"LearnWebWorker",setup(_){let a=j(null);function f(){a=new Worker(new URL("/assets/learnWebWorker-a495c568.js",self.location)),a.postMessage(r.num),r.workerReceive=JSON.stringify(r.num),a.onmessage=u=>{console.log("worker.onmessage:",u),r.workerResponse=JSON.stringify(u.data),r.mainReceive=JSON.stringify(u.data)},a.onerror=u=>{console.log("worker.onerror:",u),a.terminate()}}const r=x({num:10,workerReceive:"",workerResponse:"",mainReceive:""}),v=()=>{a.value&&a.terminate()};return(u,s)=>{const h=i("a-input-number"),p=i("a-form-item"),d=i("a-textarea"),w=i("a-button"),y=i("a-form"),m=i("highlightjs"),k=i("CopyWrapper");return M(),S("section",I,[J,E,o("div",O,[e(y,null,{default:n(()=>[e(p,{label:"传递给web worker的数字"},{default:n(()=>[e(h,{value:r.num,"onUpdate:value":s[0]||(s[0]=l=>r.num=l)},null,8,["value"])]),_:1}),e(p,{label:"js文件,通过onmessage接收到的数据"},{default:n(()=>[e(d,{value:r.workerReceive,"onUpdate:value":s[1]||(s[1]=l=>r.workerReceive=l),disabled:!0},null,8,["value"])]),_:1}),e(p,{label:"js文件,通过postMessage传给主线程的的数据"},{default:n(()=>[e(d,{value:r.workerResponse,"onUpdate:value":s[2]||(s[2]=l=>r.workerResponse=l),disabled:!0},null,8,["value"])]),_:1}),e(p,{label:"主线程通过onmessage接受到的数据"},{default:n(()=>[e(d,{value:r.mainReceive,"onUpdate:value":s[3]||(s[3]=l=>r.mainReceive=l),disabled:!0},null,8,["value"])]),_:1}),e(p,{"wrapper-col":{span:14,offset:4}},{default:n(()=>[e(w,{type:"primary",onClick:f},{default:n(()=>[t("创建web worker")]),_:1}),e(w,{style:{"margin-left":"10px"},onClick:v},{default:n(()=>[t("销毁web worker")]),_:1})]),_:1})]),_:1})]),V,B,z,e(k,{msg:W},{default:n(()=>[e(m,{language:"js",code:W})]),_:1}),A,D,e(k,{msg:b},{default:n(()=>[e(m,{language:"js",code:b})]),_:1}),e(k,{msg:g},{default:n(()=>[e(m,{language:"js",code:g})]),_:1})])}}});const T=C(P,[["__scopeId","data-v-e727a0e9"]]);export{T as default};
