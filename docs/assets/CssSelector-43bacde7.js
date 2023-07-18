import{_ as c}from"./PageHeader.vue_vue_type_script_setup_true_lang-7a6702c9.js";import{d as n,c as a,e as d,h as o,k as l,g as _,p as r,j as i,f as e,_ as p}from"./index-3518f921.js";const t=s=>(r("data-v-73491926"),s=s(),i(),s),u={class:"component__css-selector"},h=t(()=>e("h2",null,"css选择器的分类",-1)),f=t(()=>e("p",null,"css选择器可以分为4类,选择器、选择符、伪类和伪元素",-1)),v=t(()=>e("h3",null,"选择器",-1)),m=t(()=>e("code",null,"#id",-1)),b=t(()=>e("code",null,".class",-1)),g=t(()=>e("code",null,"body",-1)),x=t(()=>e("h3",null,"选择符",-1)),S=t(()=>e("ol",null,[o("目前,css世界的选择符有5个 "),e("li",null,"表示后代关系的空格( ) "),e("li",null,"表示父子关系的( > ) "),e("li",null,"表示相邻兄弟关系的加号 ( + ) "),e("li",null,"表示兄弟关系的弯弯( ~ ) "),e("li",null,"表示列关系的双管道 ( || ) ")],-1)),C=l(`<pre data-v-73491926>        /* 后代关系 */
        .parent img { object-fit: cover }

        /* 父子关系 */
        .parent &gt; img { object-fit:contain }

        /* 相邻兄弟关系 */
        button + button { margin-left:16px }

        /* 兄弟关系 */
        button ~ button { margin-left: 16px }

         /* 列关系 */
        .col || td { color: red }
      </pre><h3 data-v-73491926>伪类</h3><p data-v-73491926>伪类的特征是前面会有一个冒号: ,通常与浏览器行为或者用户行为关联,如</p><pre data-v-73491926>        a:hover{color:red}
      </pre><h3 data-v-73491926>伪元素</h3><p data-v-73491926>伪元素的特征是前面有两个冒号:: 会出现在DOM树上,常见的伪元素有<code data-v-73491926>::before</code>、<code data-v-73491926>::after</code>、<code data-v-73491926>::first-letter</code>、<code data-v-73491926>::first-line</code>等</p>`,6),I=n({__name:"CssSelector",setup(s){return(N,V)=>(_(),a("section",u,[d(c,{title:"css的选择器",description:"css选择器的作用, 让我们通过一些规则匹配到特定的DOM,对其设置样式或者修改"}),h,f,v,o(" 如id选择器"),m,o(",类选择器"),b,o(",标签选择器"),g,x,S,o(" 这5种选择符分别示意如下: "),C]))}});const y=p(I,[["__scopeId","data-v-73491926"]]);export{y as default};
