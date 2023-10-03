import{d as C,r as w,b as s,c as b,e as t,w as e,f as i,i as d,bv as k,bm as y,u as S,U as T,g as V,h as g,p as j,j as q,_ as I}from"./index-83dffbbb.js";import{_ as N}from"./layout-grid-89df1300.js";import{_ as $}from"./PageHeader.vue_vue_type_style_index_0_lang-3466bc3c.js";const z="/assets/text_arround-e34f72d7.png",v=n=>(j("data-v-6c951dd1"),n=n(),q(),n),B={class:"component__css-technique"},A={class:"main-content"},D=v(()=>i("h2",{id:"auto-layout"},"1.利用float实现左边定宽，右边自适应布局",-1)),H=T('<div class="father" data-v-6c951dd1><img src="'+N+'" data-v-6c951dd1><p class="animal" data-v-6c951dd1>先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。 宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。 侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。 将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。 亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。 臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。 先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。 愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言。深追先帝遗诏，臣不胜受恩感激。 今当远离，临表涕零，不知所言。 </p></div><strong data-v-6c951dd1>float最初的设计出来是为了解决文字环绕问题，如果animal选择器没有设置margin-left，将看到文字环绕，如下图</strong><img class="example-img" src="'+z+'" alt="文字环绕效果" data-v-6c951dd1><h2 id="vertical-align-dialog" data-v-6c951dd1>2.基于vertical-align实现水平垂直居中弹框</h2>',4),W={class:"dialog"},E=v(()=>i("p",null,"我劝天公重抖擞，不拘一格降人才",-1)),h=`
<div class="father">
  <img src="@/assets/layout-grid.png"/>
  <p class="animal">
    先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。

      宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。

      侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。

      将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。

      亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。

      臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。

      先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。

      愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言。深追先帝遗诏，臣不胜受恩感激。

      今当远离，临表涕零，不知所言。
  </p>
</div>`,f=`
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
`,m=`
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
  // width: 340px;
  // height: 400px;
  // background-color: white;
  // border-radius: 16px;
  // padding:24px;
 }
`,u=`
<div class="container">
  <div class="dialog">我劝天公重抖擞，不拘一格降人才</div>
</div>
`,L=C({__name:"CssTechnique",setup(n){let a=w(!1);return(M,o)=>{const r=s("a-anchor-link"),x=s("a-anchor"),l=s("highlightjs"),c=s("CopyWrapper"),p=s("a-button");return V(),b("div",B,[t(x,{wrapperClass:"right-anchor"},{default:e(()=>[t(r,{href:"#auto-layout",title:"1.基于float实现自适应布局"}),t(r,{href:"#vertical-align-dialog",title:"2.基于vertical-align实现水平垂直居中弹框"})]),_:1}),i("section",A,[t($,{title:"css的技巧"}),D,t(c,{msg:h},{default:e(()=>[t(l,{language:"javascript",code:h})]),_:1}),t(c,{msg:f},{default:e(()=>[t(l,{language:"css",code:f})]),_:1}),H,t(c,{msg:u},{default:e(()=>[t(l,{language:"html",code:u})]),_:1}),t(c,{msg:m},{default:e(()=>[t(l,{language:"css",code:m})]),_:1}),t(p,{type:"primary",onClick:o[0]||(o[0]=_=>d(a)?a.value=!0:a=!0)},{default:e(()=>[g("打开弹窗")]),_:1}),k(i("div",{class:"container",onClick:o[2]||(o[2]=_=>d(a)?a.value=!1:a=!1)},[i("div",W,[E,t(p,{onClick:o[1]||(o[1]=_=>d(a)?a.value=!1:a=!1)},{default:e(()=>[g("关闭弹窗")]),_:1})])],512),[[y,!!S(a)]])])])}}});const G=I(L,[["__scopeId","data-v-6c951dd1"]]);export{G as default};
