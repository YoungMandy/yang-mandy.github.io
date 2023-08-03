import{d as s,b as n,c as l,e as i,u as a,f as e,g as o}from"./index-c2da7195.js";const c=`
  const installEvent = () => {
    let list = [];
    function trigger(key, ...rest) {
      if (list[key] && list[key].length > 0) {
        list[key].forEach((fn) => fn.apply(this, rest));
      }
    }
    function listen(key, callback) {
      if (!list[key]) {
        list[key] = [];
      }

      list[key].push(callback);
    }
    return {
      publish,
      listen,
    };
  };

  const eventBus = installEvent('onClick');
  eventBus.listen('onClick', (data1, data2) =>
    console.log('onClick', data1, data2)
  );
  eventBus.trigger('onClick', 1, 2);
`,r=e("h1",{class:"page-title"},"发布订阅模式",-1),g=e("p",{class:"page-description"}," 对于一个事件,进行监听之后(需要一个listen函数,参数有事件名、回调函数),在触发的事件(trigger函数)的时候,可以自动执行监听时注册的回调函数 ",-1),d=s({__name:"InstallListen",setup(u){return(p,k)=>{const t=n("highlightjs");return o(),l("section",null,[r,g,i(t,{language:"js",code:a(c)},null,8,["code"])])}}});export{d as default};
