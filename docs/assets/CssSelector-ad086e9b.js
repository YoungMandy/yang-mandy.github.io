import{_ as c}from"./PageHeader.vue_vue_type_style_index_0_lang-6b33ef42.js";import{d as _,b as i,c as d,e as n,h as t,g as a,p as r,j as u,f as e,_ as p}from"./index-c6e5a36c.js";const o=s=>(r("data-v-429e2010"),s=s(),u(),s),h={class:"component__css-selector"},f=o(()=>e("h2",null,"css选择器的分类",-1)),m=o(()=>e("p",null,"css选择器可以分为4类,选择器、选择符、伪类和伪元素",-1)),g=o(()=>e("h3",null,"1.选择器",-1)),b=o(()=>e("code",null,"#id",-1)),v=o(()=>e("code",null,".class",-1)),x=o(()=>e("code",null,"body",-1)),S=o(()=>e("h3",null,"2.选择符",-1)),j=o(()=>e("ol",null,[t("目前,css世界的选择符有5个 "),e("li",null,"表示后代关系的空格( ) "),e("li",null,"表示父子关系的( > ) "),e("li",null,"表示相邻兄弟关系的加号 ( + ) "),e("li",null,"表示兄弟关系的弯弯( ~ ) "),e("li",null,"表示列关系的双管道 ( || ) ")],-1)),C=o(()=>e("h3",null,"3.伪类",-1)),I=o(()=>e("p",null,"伪类的特征是前面会有一个冒号: ,通常与浏览器行为或者用户行为关联,如",-1)),y=o(()=>e("h3",null,"4.伪元素",-1)),B=o(()=>e("p",null,[t("伪元素的特征是前面有两个冒号:: 会出现在DOM树上,常见的伪元素有"),e("code",null,"::before"),t("、"),e("code",null,"::after"),t("、"),e("code",null,"::first-letter"),t("、"),e("code",null,"::first-line"),t("等")],-1)),N=_({__name:"CssSelector",setup(s){return(V,k)=>{const l=i("highlightjs");return a(),d("section",h,[n(c,{title:"css的选择器",description:"css选择器的作用, 让我们通过一些规则匹配到特定的DOM,对其设置样式或者修改"}),f,m,g,t(" 如id选择器"),b,t(",类选择器"),v,t(",标签选择器"),x,S,j,t(" 这5种选择符分别示意如下: "),n(l,{language:"css",code:`
        /* 后代关系 */
        .parent img { object-fit: cover }

        /* 父子关系 */
        .parent > img { object-fit:contain }

        /* 相邻兄弟关系 */
        button + button { margin-left:16px }

        /* 兄弟关系 */
        button ~ button { margin-left: 16px }

         /* 列关系 */
        .col || td { color: red }`}),C,I,n(l,{language:"css",code:"a:hover{ color:red }"}),y,B])}}});const O=p(N,[["__scopeId","data-v-429e2010"]]);export{O as default};
