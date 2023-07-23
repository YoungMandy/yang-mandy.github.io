import{_ as a}from"./PageHeader.vue_vue_type_script_setup_true_lang-133b4d27.js";import{d as n,b as r,c as i,e,h as s,u as l,U as c,f as o,g as d}from"./index-57c6e72a.js";const p="/assets/eventLoop-03959c1b.png",u=`
  // 研究事件循环的代码
  // 竞态问题，又叫竞态条件(race condition),它出现的原因是无法保证异步操作不一定会按他们开始的顺序执行,下面是可以用闭包做上一次异步请求的过期标识

  function ajaxControl(cb) {
    debugger;
    let cleanup;

    function onInvalidate(fn) {
      cleanup = fn;
    }

    let a = () => {
      // 需要指向同一块内存空间的函数，
      debugger;
      if (cleanup) {
        debugger
        cleanup();
      }
      cb(onInvalidate);
    };
    return a;
  }

  async function ajax(onInvalidate) {
    let expired = false;

    onInvalidate(() => {
      debugger;
      expired = true;//因为函数的作用域链,可以访问到ajax函数中的expired变量
    });
    debugger;
    await Promise.resolve().then(() => {
      debugger
      console.log('执行了Promise.resolve().then()');
      setTimeout(() => {debugger ;console.log('timeout')});
    });

    debugger;
    console.log('expired', expired);
  }

  let b = ajaxControl(ajax);
  b();
  debugger;
  b();

  // ajaxControl 返回的a函数，可用使用外部父函数的cleanup变量，相当于有一个装了 cleanup变量的闭包，调试可以看到Closure(ajaxControl),即名为ajaxControl的闭包

  // 第一次执行b(),ajaxControl 里调用cb的时候传onInvalidate变量给ajax方法，它是一个指向函数的指针，在ajax内部调用了onInvalidate函数，从而把ajaxControl函数中的cleanup变量指向箭头函数()=> expired,

  // 执行到await的时候，执行后面的任务，接着交出控制权，等消息队列的同步任务都执行完毕，再接着执行await 的下一条语句

  // 接下来第二次b(),因为cleanup变量已经指向了箭头函数()=> expired,所以执行后expired 变为true,
  // 而 cb(onInvalidate)执行，ajax函数重新入调用栈，这里新创建了一个叫expired的变量，初始值为false,因为没有操作把expired变量改为true,所以这个变量的输出值为false

  // await后面的语句恢复执行，Promise.then()创建微任务，SetTimeout创建宏任务
  // 所以最终两次输出的expired分别为true和false。
  
`,g=c('<h2>消息队列</h2><p>一个个任务放到消息队列里面依次执行,在<strong>消息队列</strong>里面的任务称为<strong>宏任务</strong>,为了让优先级更高的新任务更快的执行,浏览器又为每个宏任务建立了一个<strong>微任务队列</strong>,当前宏任务执行完毕后,先看当前宏任务的微任务队列里面是否有微任务要执行,有的话先把微任务执行完毕,再执行下一个宏任务</p><img src="'+p+'" width="600" style="object-fit:contain;padding:20px;border:1px solid #eee;margin-bottom:16px;"><h2>微任务</h2><ol>浏览器提供了五种Observer来监听页面变化 <li><code>MutationObserver</code></li><li><code>IntersectionObserver</code></li><li><code>PerformanceObserver</code></li><li><code>ResizeObserver</code></li><li><code>ReportingObderver</code></li></ol>',5),b=o("a",{link:"https://zhuanlan.zhihu.com/p/482144072"},"浏览器的五种观察者模式",-1),x=o("p",null,"研究事件循环和闭包的参考代码,可以用开发者工具调试,注意查看调用栈",-1),j=n({__name:"EventLoop",setup(m){return(h,_)=>{const t=r("highlightjs");return d(),i("section",null,[e(a,{title:"事件循环",description:"浏览器上会发生很多事件,如IO输入、按钮点击、屏幕缩放等等,浏览器需要有个调度机制让这些事件有条不紊地顺序执行,这个调度机制就是事件循环。"}),g,s(" Observer属于微任务,且优先级小于Promise,参考来源"),b,x,e(t,{language:"js",code:l(u)},null,8,["code"])])}}});export{j as default};
