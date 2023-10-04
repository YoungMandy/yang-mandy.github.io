import{d as C,r as w,b as l,c as y,e as a,w as i,f as t,i as d,bv as k,bm as S,u as B,U as T,g as V,h as r,p as j,j as q,_ as z}from"./index-7f3d5444.js";import{_ as f}from"./layout-grid-89df1300.js";import{_ as I}from"./PageHeader.vue_vue_type_style_index_0_lang-c4376e02.js";const N="/assets/text_arround-e34f72d7.png",p=s=>(j("data-v-22a0b95e"),s=s(),q(),s),$={class:"component__css-technique"},F={class:"main-content"},A=p(()=>t("h2",{id:"auto-layout"},"1.利用float实现左边定宽，右边自适应布局",-1)),D=T('<div class="father" data-v-22a0b95e><img src="'+f+'" data-v-22a0b95e><p class="animal" data-v-22a0b95e> 君不见黄河之水天上来，奔流到海不复回。 君不见高堂明镜悲白发，朝如青丝暮成雪。 人生得意须尽欢，莫使金樽空对月。 天生我材必有用，千金散尽还复来。 烹羊宰牛且为乐，会须一饮三百杯。 岑夫子，丹丘生，将进酒，杯莫停。 与君歌一曲，请君为我倾耳听。 钟鼓馔玉不足贵，但愿长醉不愿醒。 古来圣贤皆寂寞，惟有饮者留其名。 陈王昔时宴平乐，斗酒十千恣欢谑。 主人何为言少钱，径须沽取对君酌。 五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。 </p></div><strong data-v-22a0b95e>float最初的设计出来是为了解决文字环绕问题，如果animal选择器没有设置margin-left，将看到文字环绕，如下图</strong><img class="example-img" src="'+N+'" alt="文字环绕效果" data-v-22a0b95e><strong data-v-22a0b95e>除了使用margin-left之外，还可以让animal选择器设置overflow:hidden(触发BFC)来实现自适应布局</strong><aside data-v-22a0b95e><ul data-v-22a0b95e>可以触发BFC(如果一个元素有BFC，内部怎么翻江倒海都不会影响外部元素)的情况 <li data-v-22a0b95e>html根元素</li><li data-v-22a0b95e>float的值不为none</li><li data-v-22a0b95e>overflow的值不为auto、scroll或hidden</li><li data-v-22a0b95e>display的值为table-cell、table-caption和inline-block中的任何一个</li><li data-v-22a0b95e>position的值不为relative和static</li></ul></aside><div class="father" data-v-22a0b95e><img src="'+f+'" data-v-22a0b95e><p class="animal_bfc" data-v-22a0b95e> 君不见黄河之水天上来，奔流到海不复回。 君不见高堂明镜悲白发，朝如青丝暮成雪。 人生得意须尽欢，莫使金樽空对月。 天生我材必有用，千金散尽还复来。 烹羊宰牛且为乐，会须一饮三百杯。 岑夫子，丹丘生，将进酒，杯莫停。 与君歌一曲，请君为我倾耳听。 钟鼓馔玉不足贵，但愿长醉不愿醒。 古来圣贤皆寂寞，惟有饮者留其名。 陈王昔时宴平乐，斗酒十千恣欢谑。 主人何为言少钱，径须沽取对君酌。 五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。 </p></div><h2 id="vertical-align-dialog" data-v-22a0b95e> 2.基于vertical-align实现水平垂直居中弹框 </h2>',7),H=p(()=>t("ol",{style:{"margin-top":"20px"}},[r("实现原理 "),t("li",null,"在示例中，由于font-size设置为0,所以x中心点位置就是.container的上边缘，此时，高度100%的宽度为0的伪元素和这个中心点对齐，如果中心点位置不懂，这个伪元素的上一半应该在.container的外面，但是CSS中默认是左上方排列对齐的，所以，伪元素和这个原本在容器上边缘的x中心点一起往下移动规律半个容器高度，也就是此时x中心点就在容器的垂直中心线上"),t("li",null,"弹框元素.dailog也设置了vertical-align:middle。根据定义，弹框的垂直中心位置和x中心位置对齐，此时，x中心点就在容器的垂直中心位置，从而实现了垂直居中效果")],-1)),W={class:"dialog"},E=p(()=>t("p",null,"我劝天公重抖擞，不拘一格降人才",-1)),m=`
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
</div>`,h=`
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
`,u=`
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
`,b=`
<div class="container">
  <div class="dialog">我劝天公重抖擞，不拘一格降人才</div>
</div>
`,L=C({__name:"CssTechnique",setup(s){let e=w(!1);return(M,o)=>{const _=l("a-anchor-link"),x=l("a-anchor"),n=l("highlightjs"),c=l("CopyWrapper"),v=l("a-button");return V(),y("div",$,[a(x,{wrapperClass:"right-anchor",offsetTop:"0"},{default:i(()=>[a(_,{href:"#auto-layout",title:"1.基于float实现自适应布局"}),a(_,{href:"#vertical-align-dialog",title:"2.基于vertical-align实现水平垂直居中弹框"})]),_:1}),t("section",F,[a(I,{title:"css的技巧"}),A,a(c,{msg:m},{default:i(()=>[a(n,{language:"javascript",code:m})]),_:1}),a(c,{msg:h},{default:i(()=>[a(n,{language:"css",code:h})]),_:1}),D,a(c,{msg:b},{default:i(()=>[a(n,{language:"html",code:b})]),_:1}),a(c,{msg:u},{default:i(()=>[a(n,{language:"css",code:u})]),_:1}),a(v,{type:"primary",onClick:o[0]||(o[0]=g=>d(e)?e.value=!0:e=!0)},{default:i(()=>[r("打开弹窗")]),_:1}),H,k(t("div",{class:"container",onClick:o[2]||(o[2]=g=>d(e)?e.value=!1:e=!1)},[t("div",W,[E,a(v,{onClick:o[1]||(o[1]=g=>d(e)?e.value=!1:e=!1)},{default:i(()=>[r("关闭弹窗")]),_:1})])],512),[[S,!!B(e)]])])])}}});const J=z(L,[["__scopeId","data-v-22a0b95e"]]);export{J as default};
