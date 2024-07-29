import{d as T,r as m,b as r,c as $,e as V,g as t,f as o,w as a,i as u,bw as q,bn as j,u as f,t as z,W as D,h as v,p as E,j as H,k as M}from"./index-2da9ee8b.js";import{_ as w}from"./layout-grid-89df1300.js";const N="/assets/text_arround-e34f72d7.png",i=g=>(E("data-v-c93897e0"),g=g(),H(),g),F={class:"component__css-technique"},L={wrapperClass:"right-anchor",offsetTop:0},A={class:"main-content"},O=i(()=>t("h2",{id:"auto-layout"},"1.利用float实现左边定宽，右边自适应布局",-1)),R=D('<div class="father" data-v-c93897e0><img src="'+w+'" data-v-c93897e0><p class="animal" data-v-c93897e0> 君不见黄河之水天上来，奔流到海不复回。 君不见高堂明镜悲白发，朝如青丝暮成雪。 人生得意须尽欢，莫使金樽空对月。 天生我材必有用，千金散尽还复来。 烹羊宰牛且为乐，会须一饮三百杯。 岑夫子，丹丘生，将进酒，杯莫停。 与君歌一曲，请君为我倾耳听。 钟鼓馔玉不足贵，但愿长醉不愿醒。 古来圣贤皆寂寞，惟有饮者留其名。 陈王昔时宴平乐，斗酒十千恣欢谑。 主人何为言少钱，径须沽取对君酌。 五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。 </p></div><strong data-v-c93897e0>float最初的设计出来是为了解决文字环绕问题，如果animal选择器没有设置margin-left，将看到文字环绕，如下图</strong><img class="example-img" src="'+N+'" alt="文字环绕效果" data-v-c93897e0><strong data-v-c93897e0>除了使用margin-left之外，还可以让animal选择器设置overflow:hidden(触发BFC)来实现自适应布局</strong><aside data-v-c93897e0><ul data-v-c93897e0>可以触发BFC(如果一个元素有BFC，内部怎么翻江倒海都不会影响外部元素)的情况 <li data-v-c93897e0>html根元素</li><li data-v-c93897e0>float的值不为none</li><li data-v-c93897e0>overflow的值不为auto、scroll或hidden</li><li data-v-c93897e0>display的值为table-cell、table-caption和inline-block中的任何一个</li><li data-v-c93897e0>position的值不为relative和static</li></ul></aside><div class="father" data-v-c93897e0><img src="'+w+'" data-v-c93897e0><p class="animal_bfc" data-v-c93897e0> 君不见黄河之水天上来，奔流到海不复回。 君不见高堂明镜悲白发，朝如青丝暮成雪。 人生得意须尽欢，莫使金樽空对月。 天生我材必有用，千金散尽还复来。 烹羊宰牛且为乐，会须一饮三百杯。 岑夫子，丹丘生，将进酒，杯莫停。 与君歌一曲，请君为我倾耳听。 钟鼓馔玉不足贵，但愿长醉不愿醒。 古来圣贤皆寂寞，惟有饮者留其名。 陈王昔时宴平乐，斗酒十千恣欢谑。 主人何为言少钱，径须沽取对君酌。 五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。 </p></div><h2 id="vertical-align-dialog" data-v-c93897e0> 2.基于vertical-align实现水平垂直居中弹框 </h2>',7),G=i(()=>t("ol",{style:{"margin-top":"20px"}},[v("实现原理 "),t("li",null,"在示例中，由于font-size设置为0,所以x中心点位置就是.container的上边缘，此时，高度100%的宽度为0的伪元素和这个中心点对齐，如果中心点位置不懂，这个伪元素的上一半应该在.container的外面，但是CSS中默认是左上方排列对齐的，所以，伪元素和这个原本在容器上边缘的x中心点一起往下移动规律半个容器高度，也就是此时x中心点就在容器的垂直中心线上"),t("li",null,"弹框元素.dailog也设置了vertical-align:middle。根据定义，弹框的垂直中心位置和x中心位置对齐，此时，x中心点就在容器的垂直中心位置，从而实现了垂直居中效果")],-1)),J={class:"dialog"},K=i(()=>t("p",null,"我劝天公重抖擞，不拘一格降人才",-1)),P=i(()=>t("h2",{id:"get-scroll-width"}," 3.获取滚动条宽度 ",-1)),Q=i(()=>t("div",{class:"box"},[t("div",{id:"in"})],-1)),U=i(()=>t("p",{class:"mt-2"},"mac电脑需要在系统设置=>外观=>始终显示滚动条方可看到效果，否则不显示滚动条，计算结果就一直为0。笔者在2023年10月4日打印结果为15 ",-1)),X=i(()=>t("h2",{id:"scroll-without-shake"}," 4.页面滚动条不发生晃动 ",-1)),Y=i(()=>t("h4",null,"滚动条导致页面晃动的原因",-1)),Z=i(()=>t("p",null,"窗体默认是没有滚动条的，而HTML内容是自上而下加载的，就会发生一开始没有滚动条，后来突然出现滚动条的情况，此时页面的可用宽度发生变化，水平居中会重新开始计算，导致页面的发生晃动",-1)),tt=i(()=>t("p",null,"简单粗暴的解决方式是设置html:{ overflow-y:scroll },但是这样会导致页面一都有滚动条",-1)),x=`
<div class="father">
  <img src="@/assets/layout-grid.png"/>
  <p class="animal">
    君不见黄河之水天上来，奔流到海不复回。
    君不见高堂明镜悲白发，朝如青丝暮成雪。
    人生得意须尽欢，莫使金樽空对月。
    天生我材必有用，千金散尽还复来。
    烹羊宰牛且为乐，会须一饮三百杯。
    岑夫子，丹丘生，将进酒，杯莫停。
    与君歌一曲，请君为我倾耳听。
    钟鼓馔玉不足贵，但愿长醉不愿醒。
    古来圣贤皆寂寞，惟有饮者留其名。
    陈王昔时宴平乐，斗酒十千恣欢谑。
    主人何为言少钱，径须沽取对君酌。
    五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。
  </p>
</div>`,C=`
 .father{
  overflow: hidden;
 }
 .father > img{
  width:60px ;
  height: 64px;
  float:left;
 }

 .animal{
  margin-left:70px;
 }
`,b=`
 .container{
  z-index: 11;
  position: fixed;
  top:0;
  right: 0;
  bottom:0;
  left:0;
  background-color: rgba(0,0,0,.5);
  text-align: center;
  font-size:0;
  white-space:nowrap;
  overflow: auto;
 }

 .container::after{
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
 }
 .dialog{
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  font-size: 14px;
  white-space: normal;
 }
`,y=`
<div class="container">
  <div class="dialog">我劝天公重抖擞，不拘一格降人才</div>
</div>
`,k=`
.box{
  width:400px;
  overflow:scroll
}
<div class="box">
  <div id='in'></div>
</div>

console.log(400 - document.getElementById("in").clientWidth);
`,S=`
html{
  overflow-y:scroll; //for IE8
}

:root{ // :root伪元素选择器代表html标签,但是它的优先级比html标签的优先级要高
  overflow-y:auto;
  overflow-x:hidden;
}

:root body{
  position:absolute;
}

body{
  width:100vw;
  overflow:hidden;
}

`,et=T({__name:"CssTechnique",setup(g){let l=m(!1),_=m(0);function W(){const c=document.getElementById("in");if(!c){alert("找不到Id为in的DOM元素");return}const e=c.clientWidth||0;_.value=400-e}function h(c){debugger;const e=document.querySelector(`#${c}`);e&&e.scrollIntoView()}return(c,e)=>{const B=r("page-header"),s=r("highlightjs"),n=r("CopyWrapper"),p=r("a-button"),I=r("high-light");return $(),V("div",F,[t("div",L,[t("div",{title:"1.基于float实现自适应布局",onClick:e[0]||(e[0]=d=>h("auto-layout"))}),t("div",{onClick:e[1]||(e[1]=d=>h("vertical-align-dialog")),title:"2.基于vertical-align实现水平垂直居中弹框"}),t("div",{onClick:e[2]||(e[2]=d=>h("get-scroll-width")),title:"3.获取滚动条宽度"}),t("div",{onClick:e[3]||(e[3]=d=>h("scroll-without-shake")),title:"4.页面滚动条不发生晃动"})]),t("section",A,[o(B,{title:"css的技巧"}),O,o(n,{msg:x},{default:a(()=>[o(s,{language:"javascript",code:x})]),_:1}),o(n,{msg:C},{default:a(()=>[o(s,{language:"css",code:C})]),_:1}),R,o(n,{msg:y},{default:a(()=>[o(s,{language:"html",code:y})]),_:1}),o(n,{msg:b},{default:a(()=>[o(s,{language:"css",code:b})]),_:1}),o(p,{type:"primary",onClick:e[4]||(e[4]=d=>u(l)?l.value=!0:l=!0)},{default:a(()=>[v("打开弹窗")]),_:1}),G,q(t("div",{class:"container",onClick:e[6]||(e[6]=d=>u(l)?l.value=!1:l=!1)},[t("div",J,[K,o(p,{onClick:e[5]||(e[5]=d=>u(l)?l.value=!1:l=!1)},{default:a(()=>[v("关闭弹窗")]),_:1})])],512),[[j,!!f(l)]]),P,Q,t("div",null,z(f(_)),1),o(p,{onClick:W},{default:a(()=>[v("计算滚动条宽度")]),_:1}),U,o(n,{msg:k},{default:a(()=>[o(s,{language:"html",code:k})]),_:1}),X,Y,Z,tt,o(I,null,{default:a(()=>[v("HTML中有两个标签是默认可以产生滚动条的，一个是根元素html,另一个是textarea，因为这俩默认的overflow都不是visible")]),_:1}),o(n,{msg:S},{default:a(()=>[o(s,{language:"html",code:S})]),_:1})])])}}});const at=M(et,[["__scopeId","data-v-c93897e0"]]);export{at as default};
