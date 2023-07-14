import{d as e,c as s,e as n,f as t,t as l,u as i}from"./index-35420fa0.js";const a=`
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
`,c=t("h1",{class:"page-title"},"发布订阅模式",-1),o=t("p",{class:"page-description"}," 对于一个事件,进行监听之后(需要一个listen函数,参数有事件名、回调函数),在触发的事件(trigger函数)的时候,可以自动执行监听时注册的回调函数 ",-1),f=e({__name:"InstallListen",setup(r){return(p,u)=>(s(),n("section",null,[c,o,t("pre",null,"      "+l(i(a))+`
    `,1)]))}});export{f as default};
