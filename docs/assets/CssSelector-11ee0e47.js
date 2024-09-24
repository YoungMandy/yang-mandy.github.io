import{j as s,b as n,c as l,e as r,f as c,k as i,g as d,h as t}from"./index-34c4b048.js";const b={},p={class:"component__css-selector"};function u(v,e){const a=n("page-header"),o=n("highlightjs");return l(),r("section",p,[c(a,{title:"css的选择器",description:"css选择器的作用, 让我们通过一些规则匹配到特定的DOM,对其设置样式或者修改"}),e[0]||(e[0]=i("<h2 data-v-dde5b8cc>css选择器的分类</h2><p data-v-dde5b8cc>css选择器可以分为4类,选择器、选择符、伪类和伪元素</p><h3 data-v-dde5b8cc>1.选择器</h3> 如id选择器<code data-v-dde5b8cc>#id</code>,类选择器<code data-v-dde5b8cc>.class</code>,标签选择器<code data-v-dde5b8cc>body</code><h3 data-v-dde5b8cc>2.选择符</h3><ol data-v-dde5b8cc>目前,css世界的选择符有5个 <li data-v-dde5b8cc>表示后代关系的空格( ) </li><li data-v-dde5b8cc>表示父子关系的( &gt; ) </li><li data-v-dde5b8cc>表示相邻兄弟关系的加号 ( + ) </li><li data-v-dde5b8cc>表示兄弟关系的弯弯( ~ ) </li><li data-v-dde5b8cc>表示列关系的双管道 ( || ) </li></ol> 这5种选择符分别示意如下: ",12)),c(o,{language:"css",code:`
        /* 后代关系 */
        .parent img { object-fit: cover }

        /* 父子关系 */
        .parent > img { object-fit:contain }

        /* 相邻兄弟关系 */
        button + button { margin-left:16px }

        /* 兄弟关系 */
        button ~ button { margin-left: 16px }

         /* 列关系 */
        .col || td { color: red }`}),e[1]||(e[1]=d("h3",null,"3.伪类",-1)),e[2]||(e[2]=d("p",null,"伪类的特征是前面会有一个冒号: ,通常与浏览器行为或者用户行为关联,如",-1)),c(o,{language:"css",code:"a:hover{ color:red }"}),e[3]||(e[3]=d("h3",null,"4.伪元素",-1)),e[4]||(e[4]=d("p",null,[t("伪元素的特征是前面有两个冒号:: 会出现在DOM树上,常见的伪元素有"),d("code",null,"::before"),t("、"),d("code",null,"::after"),t("、"),d("code",null,"::first-letter"),t("、"),d("code",null,"::first-line"),t("等")],-1))])}const g=s(b,[["render",u],["__scopeId","data-v-dde5b8cc"]]);export{g as default};
