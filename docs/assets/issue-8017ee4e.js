import{_ as i}from"./PageHeader.vue_vue_type_style_index_0_lang-0839d972.js";import{d as r,b as n,c as _,e,w as l,f as o,g as d}from"./index-73dd1966.js";const m=o("h3",null,"1.在ios,长按图片可以拖拽",-1),g=o("div",null,"CSS的处理方案",-1),p=o("div",null,"html 的处理方案",-1),h=o("h3",null,"2.获取窗体滚动高度的方法不同",-1),u=o("p",null,"在PC端，窗体滚动高度可以使用document.documentElement.scrollTop来获取,但是在移动端，可能就要使用document.body.scrollTop来获取",-1),c=`
img {
-webkit-user-drag: none;
}
`,a=`
<img src="somethingUrl" draggle='false'/>
`,v=r({__name:"issue",setup(f){return(C,b)=>{const s=n("highlightjs"),t=n("CopyWrapper");return d(),_("section",null,[e(i,{title:"移动端爬坑记录"}),m,g,e(t,{msg:c},{default:l(()=>[e(s,{language:"css",code:c})]),_:1}),p,e(t,{msg:a},{default:l(()=>[e(s,{language:"html",code:a})]),_:1}),h,u])}}});export{v as default};
