import{d as p,b as l,c as d,e as i,f as o,g as t,w as r}from"./index-239daa6b.js";const a=`
img {
-webkit-user-drag: none;
}
`,g=`
<img src="somethingUrl" draggle='false'/>
`,C=p({__name:"issue",setup(u){return(c,e)=>{const m=l("page-header"),n=l("highlightjs"),s=l("CopyWrapper");return d(),i("section",null,[o(m,{title:"移动端爬坑记录"}),e[0]||(e[0]=t("h3",null,"1.在ios,长按图片可以拖拽",-1)),e[1]||(e[1]=t("div",null,"CSS的处理方案",-1)),o(s,{msg:a},{default:r(()=>[o(n,{language:"css",code:a})]),_:1}),e[2]||(e[2]=t("div",null,"html 的处理方案",-1)),o(s,{msg:g},{default:r(()=>[o(n,{language:"html",code:g})]),_:1}),e[3]||(e[3]=t("h3",null,"2.获取窗体滚动高度的方法不同",-1)),e[4]||(e[4]=t("p",null,"在PC端，窗体滚动高度可以使用document.documentElement.scrollTop来获取,但是在移动端，可能就要使用document.body.scrollTop来获取",-1))])}}});export{C as default};
