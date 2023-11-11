import{d as T,r as m,b as n,c as V,e as t,w as a,f as e,i as v,bv as j,bm as q,u,t as z,U as D,g as E,h as c,p as H,j as M,_ as N}from"./index-20761a7a.js";import{_ as b}from"./layout-grid-89df1300.js";import{_ as $}from"./PageHeader.vue_vue_type_style_index_0_lang-7ecebc81.js";const F="/assets/text_arround-e34f72d7.png",l=r=>(H("data-v-3c2edbd6"),r=r(),M(),r),L={class:"component__css-technique"},A={class:"main-content"},O=l(()=>e("h2",{id:"auto-layout"},"1.利用float实现左边定宽，右边自适应布局",-1)),R=D('<div class="father" data-v-3c2edbd6><img src="'+b+'" data-v-3c2edbd6><p class="animal" data-v-3c2edbd6> 君不见黄河之水天上来，奔流到海不复回。 君不见高堂明镜悲白发，朝如青丝暮成雪。 人生得意须尽欢，莫使金樽空对月。 天生我材必有用，千金散尽还复来。 烹羊宰牛且为乐，会须一饮三百杯。 岑夫子，丹丘生，将进酒，杯莫停。 与君歌一曲，请君为我倾耳听。 钟鼓馔玉不足贵，但愿长醉不愿醒。 古来圣贤皆寂寞，惟有饮者留其名。 陈王昔时宴平乐，斗酒十千恣欢谑。 主人何为言少钱，径须沽取对君酌。 五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。 </p></div><strong data-v-3c2edbd6>float最初的设计出来是为了解决文字环绕问题，如果animal选择器没有设置margin-left，将看到文字环绕，如下图</strong><img class="example-img" src="'+F+'" alt="文字环绕效果" data-v-3c2edbd6><strong data-v-3c2edbd6>除了使用margin-left之外，还可以让animal选择器设置overflow:hidden(触发BFC)来实现自适应布局</strong><aside data-v-3c2edbd6><ul data-v-3c2edbd6>可以触发BFC(如果一个元素有BFC，内部怎么翻江倒海都不会影响外部元素)的情况 <li data-v-3c2edbd6>html根元素</li><li data-v-3c2edbd6>float的值不为none</li><li data-v-3c2edbd6>overflow的值不为auto、scroll或hidden</li><li data-v-3c2edbd6>display的值为table-cell、table-caption和inline-block中的任何一个</li><li data-v-3c2edbd6>position的值不为relative和static</li></ul></aside><div class="father" data-v-3c2edbd6><img src="'+b+'" data-v-3c2edbd6><p class="animal_bfc" data-v-3c2edbd6> 君不见黄河之水天上来，奔流到海不复回。 君不见高堂明镜悲白发，朝如青丝暮成雪。 人生得意须尽欢，莫使金樽空对月。 天生我材必有用，千金散尽还复来。 烹羊宰牛且为乐，会须一饮三百杯。 岑夫子，丹丘生，将进酒，杯莫停。 与君歌一曲，请君为我倾耳听。 钟鼓馔玉不足贵，但愿长醉不愿醒。 古来圣贤皆寂寞，惟有饮者留其名。 陈王昔时宴平乐，斗酒十千恣欢谑。 主人何为言少钱，径须沽取对君酌。 五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。 </p></div><h2 id="vertical-align-dialog" data-v-3c2edbd6> 2.基于vertical-align实现水平垂直居中弹框 </h2>',7),U=l(()=>e("ol",{style:{"margin-top":"20px"}},[c("实现原理 "),e("li",null,"在示例中，由于font-size设置为0,所以x中心点位置就是.container的上边缘，此时，高度100%的宽度为0的伪元素和这个中心点对齐，如果中心点位置不懂，这个伪元素的上一半应该在.container的外面，但是CSS中默认是左上方排列对齐的，所以，伪元素和这个原本在容器上边缘的x中心点一起往下移动规律半个容器高度，也就是此时x中心点就在容器的垂直中心线上"),e("li",null,"弹框元素.dailog也设置了vertical-align:middle。根据定义，弹框的垂直中心位置和x中心位置对齐，此时，x中心点就在容器的垂直中心位置，从而实现了垂直居中效果")],-1)),G={class:"dialog"},J=l(()=>e("p",null,"我劝天公重抖擞，不拘一格降人才",-1)),K=l(()=>e("h2",{id:"get-scroll-width"}," 3.获取滚动条宽度 ",-1)),P=l(()=>e("div",{class:"box"},[e("div",{id:"in"})],-1)),Q=l(()=>e("p",{class:"mt-2"},"mac电脑需要在系统设置=>外观=>始终显示滚动条方可看到效果，否则不显示滚动条，计算结果就一直为0。笔者在2023年10月4日打印结果为15 ",-1)),X=l(()=>e("h2",{id:"scroll-without-shake"}," 4.页面滚动条不发生晃动 ",-1)),Y=l(()=>e("h4",null,"滚动条导致页面晃动的原因",-1)),Z=l(()=>e("p",null,"窗体默认是没有滚动条的，而HTML内容是自上而下加载的，就会发生一开始没有滚动条，后来突然出现滚动条的情况，此时页面的可用宽度发生变化，水平居中会重新开始计算，导致页面的发生晃动",-1)),tt=l(()=>e("p",null,"简单粗暴的解决方式是设置html:{ overflow-y:scroll },但是这样会导致页面一都有滚动条",-1)),w=`
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
</div>`,x=`
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
`,C=`
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

`,et=T({__name:"CssTechnique",setup(r){let o=m(!1),g=m(0);function B(){const _=document.getElementById("in");if(!_){alert("找不到Id为in的DOM元素");return}const i=_.clientWidth||0;g.value=400-i}return(_,i)=>{const h=n("a-anchor-link"),W=n("a-anchor"),s=n("highlightjs"),d=n("CopyWrapper"),p=n("a-button"),I=n("high-light");return E(),V("div",L,[t(W,{wrapperClass:"right-anchor",offsetTop:"0"},{default:a(()=>[t(h,{href:"#auto-layout",title:"1.基于float实现自适应布局"}),t(h,{href:"#vertical-align-dialog",title:"2.基于vertical-align实现水平垂直居中弹框"}),t(h,{href:"#get-scroll-width",title:"3.获取滚动条宽度"}),t(h,{href:"#scroll-without-shake",title:"4.页面滚动条不发生晃动"})]),_:1}),e("section",A,[t($,{title:"css的技巧"}),O,t(d,{msg:w},{default:a(()=>[t(s,{language:"javascript",code:w})]),_:1}),t(d,{msg:x},{default:a(()=>[t(s,{language:"css",code:x})]),_:1}),R,t(d,{msg:y},{default:a(()=>[t(s,{language:"html",code:y})]),_:1}),t(d,{msg:C},{default:a(()=>[t(s,{language:"css",code:C})]),_:1}),t(p,{type:"primary",onClick:i[0]||(i[0]=f=>v(o)?o.value=!0:o=!0)},{default:a(()=>[c("打开弹窗")]),_:1}),U,j(e("div",{class:"container",onClick:i[2]||(i[2]=f=>v(o)?o.value=!1:o=!1)},[e("div",G,[J,t(p,{onClick:i[1]||(i[1]=f=>v(o)?o.value=!1:o=!1)},{default:a(()=>[c("关闭弹窗")]),_:1})])],512),[[q,!!u(o)]]),K,P,e("div",null,z(u(g)),1),t(p,{onClick:B},{default:a(()=>[c("计算滚动条宽度")]),_:1}),Q,t(d,{msg:k},{default:a(()=>[t(s,{language:"html",code:k})]),_:1}),X,Y,Z,tt,t(I,null,{default:a(()=>[c("HTML中有两个标签是默认可以产生滚动条的，一个是根元素html,另一个是textarea，因为这俩默认的overflow都不是visible")]),_:1}),t(d,{msg:S},{default:a(()=>[t(s,{language:"html",code:S})]),_:1})])])}}});const it=N(et,[["__scopeId","data-v-3c2edbd6"]]);export{it as default};
