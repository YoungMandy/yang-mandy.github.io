import{d as r,b as t,c,e as p,g as s,f as n,w as g,u as l}from"./index-8bc5b620.js";const i=`
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
`,d=r({__name:"InstallListen",setup(u){return(k,e)=>{const o=t("highlightjs"),a=t("CopyWrapper");return c(),p("section",null,[e[0]||(e[0]=s("h1",{class:"page-title"},"发布订阅模式",-1)),e[1]||(e[1]=s("p",{class:"page-description"}," 对于一个事件,进行监听之后(需要一个listen函数,参数有事件名、回调函数),在触发的事件(trigger函数)的时候,可以自动执行监听时注册的回调函数 ",-1)),n(a,{msg:l(i)},{default:g(()=>[n(o,{language:"js",code:l(i)},null,8,["code"])]),_:1},8,["msg"])])}}});export{d as default};
