import{d as i,b as e,c,e as r,f as t,w as p,u as s,g as l}from"./index-8f12c227.js";const n=`
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
`,g=l("h1",{class:"page-title"},"发布订阅模式",-1),u=l("p",{class:"page-description"}," 对于一个事件,进行监听之后(需要一个listen函数,参数有事件名、回调函数),在触发的事件(trigger函数)的时候,可以自动执行监听时注册的回调函数 ",-1),f=i({__name:"InstallListen",setup(_){return(h,k)=>{const o=e("highlightjs"),a=e("CopyWrapper");return c(),r("section",null,[g,u,t(a,{msg:s(n)},{default:p(()=>[t(o,{language:"js",code:s(n)},null,8,["code"])]),_:1},8,["msg"])])}}});export{f as default};
