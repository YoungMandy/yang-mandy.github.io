import{_ as c,c as a,e as n,h as o,k as d,p as l,j as _,f as e}from"./index-52b8ed54.js";const i={},t=s=>(l("data-v-a445e227"),s=s(),_(),s),r={class:"component__css-selector"},p=t(()=>e("h1",{class:"page-title"},"css的选择器",-1)),h=t(()=>e("p",{class:"page-description"}," css选择器的作用, 让我们通过一些规则匹配到特定的DOM,对其设置样式或者修改 ",-1)),u=t(()=>e("h2",null,"css选择器的分类",-1)),v=t(()=>e("p",null,"css选择器可以分为4类,选择器、选择符、伪类和伪元素",-1)),f=t(()=>e("h3",null,"选择器",-1)),m=t(()=>e("code",null,"#id",-1)),b=t(()=>e("code",null,".class",-1)),g=t(()=>e("code",null,"body",-1)),x=t(()=>e("h3",null,"选择符",-1)),S=t(()=>e("ol",null,[o("目前,css世界的选择符有5个 "),e("li",null,"表示后代关系的空格( ) "),e("li",null,"表示父子关系的( > ) "),e("li",null,"表示相邻兄弟关系的加号 ( + ) "),e("li",null,"表示兄弟关系的弯弯( ~ ) "),e("li",null,"表示列关系的双管道 ( || ) ")],-1)),I=d(`<pre data-v-a445e227>        /* 后代关系 */
        .parent img { object-fit: cover }

        /* 父子关系 */
        .parent &gt; img { object-fit:contain }

        /* 相邻兄弟关系 */
        button + button { margin-left:16px }

        /* 兄弟关系 */
        button ~ button { margin-left: 16px }

         /* 列关系 */
        .col || td { color: red }
      </pre><h3 data-v-a445e227>伪类</h3><p data-v-a445e227>伪类的特征是前面会有一个冒号: ,通常与浏览器行为或者用户行为关联,如</p><pre data-v-a445e227>        a:hover{color:red}
      </pre><h3 data-v-a445e227>伪元素</h3><p data-v-a445e227>伪元素的特征是前面有两个冒号:: 会出现在DOM树上,常见的伪元素有<code data-v-a445e227>::before</code>、<code data-v-a445e227>::after</code>、<code data-v-a445e227>::first-letter</code>、<code data-v-a445e227>first-line</code>等</p>`,6);function j(s,k){return a(),n("section",r,[p,h,u,v,f,o(" 如id选择器"),m,o(",类选择器"),b,o(",标签选择器"),g,x,S,o(" 这5种选择符分别示意如下: "),I])}const B=c(i,[["render",j],["__scopeId","data-v-a445e227"]]);export{B as default};
