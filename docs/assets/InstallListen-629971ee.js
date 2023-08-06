import{d as i,b as e,c,e as t,w as r,u as s,f as l,g as p}from"./index-4de0ed93.js";const n=`
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
`,g=l("h1",{class:"page-title"},"发布订阅模式",-1),u=l("p",{class:"page-description"}," 对于一个事件,进行监听之后(需要一个listen函数,参数有事件名、回调函数),在触发的事件(trigger函数)的时候,可以自动执行监听时注册的回调函数 ",-1),f=i({__name:"InstallListen",setup(_){return(h,k)=>{const o=e("highlightjs"),a=e("CopyWrapper");return p(),c("section",null,[g,u,t(a,{msg:s(n)},{default:r(()=>[t(o,{language:"js",code:s(n)},null,8,["code"])]),_:1},8,["msg"])])}}});export{f as default};
