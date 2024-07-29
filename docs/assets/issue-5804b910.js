import{d as _,b as t,c as d,e as i,f as e,w as l,g as o}from"./index-2da9ee8b.js";const g=o("h3",null,"1.在ios,长按图片可以拖拽",-1),m=o("div",null,"CSS的处理方案",-1),p=o("div",null,"html 的处理方案",-1),h=o("h3",null,"2.获取窗体滚动高度的方法不同",-1),u=o("p",null,"在PC端，窗体滚动高度可以使用document.documentElement.scrollTop来获取,但是在移动端，可能就要使用document.body.scrollTop来获取",-1),a=`
img {
-webkit-user-drag: none;
}
`,c=`
<img src="somethingUrl" draggle='false'/>
`,k=_({__name:"issue",setup(f){return(C,b)=>{const r=t("page-header"),s=t("highlightjs"),n=t("CopyWrapper");return d(),i("section",null,[e(r,{title:"移动端爬坑记录"}),g,m,e(n,{msg:a},{default:l(()=>[e(s,{language:"css",code:a})]),_:1}),p,e(n,{msg:c},{default:l(()=>[e(s,{language:"html",code:c})]),_:1}),h,u])}}});export{k as default};
