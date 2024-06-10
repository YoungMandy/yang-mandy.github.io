import{k as d,b as l,c as i,e as a,f as s,h as t,p as r,j as u,g as e}from"./index-8f12c227.js";const h={},o=n=>(r("data-v-dde5b8cc"),n=n(),u(),n),p={class:"component__css-selector"},g=o(()=>e("h2",null,"css选择器的分类",-1)),f=o(()=>e("p",null,"css选择器可以分为4类,选择器、选择符、伪类和伪元素",-1)),b=o(()=>e("h3",null,"1.选择器",-1)),m=o(()=>e("code",null,"#id",-1)),v=o(()=>e("code",null,".class",-1)),x=o(()=>e("code",null,"body",-1)),j=o(()=>e("h3",null,"2.选择符",-1)),S=o(()=>e("ol",null,[t("目前,css世界的选择符有5个 "),e("li",null,"表示后代关系的空格( ) "),e("li",null,"表示父子关系的( > ) "),e("li",null,"表示相邻兄弟关系的加号 ( + ) "),e("li",null,"表示兄弟关系的弯弯( ~ ) "),e("li",null,"表示列关系的双管道 ( || ) ")],-1)),I=o(()=>e("h3",null,"3.伪类",-1)),k=o(()=>e("p",null,"伪类的特征是前面会有一个冒号: ,通常与浏览器行为或者用户行为关联,如",-1)),y=o(()=>e("h3",null,"4.伪元素",-1)),B=o(()=>e("p",null,[t("伪元素的特征是前面有两个冒号:: 会出现在DOM树上,常见的伪元素有"),e("code",null,"::before"),t("、"),e("code",null,"::after"),t("、"),e("code",null,"::first-letter"),t("、"),e("code",null,"::first-line"),t("等")],-1));function C(n,N){const _=l("page-header"),c=l("highlightjs");return i(),a("section",p,[s(_,{title:"css的选择器",description:"css选择器的作用, 让我们通过一些规则匹配到特定的DOM,对其设置样式或者修改"}),g,f,b,t(" 如id选择器"),m,t(",类选择器"),v,t(",标签选择器"),x,j,S,t(" 这5种选择符分别示意如下: "),s(c,{language:"css",code:`
        /* 后代关系 */
        .parent img { object-fit: cover }

        /* 父子关系 */
        .parent > img { object-fit:contain }

        /* 相邻兄弟关系 */
        button + button { margin-left:16px }

        /* 兄弟关系 */
        button ~ button { margin-left: 16px }

         /* 列关系 */
        .col || td { color: red }`}),I,k,s(c,{language:"css",code:"a:hover{ color:red }"}),y,B])}const D=d(h,[["render",C],["__scopeId","data-v-dde5b8cc"]]);export{D as default};
