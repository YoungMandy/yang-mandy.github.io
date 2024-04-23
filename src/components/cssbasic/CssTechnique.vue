<script setup lang="ts">
import { ref } from 'vue';
import PageHeader from '@/framework/PageHeader.vue';
let showVerticalDialog = ref(false);
const autoAdaptHtml = `
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
</div>`;

const autoAdaptCSS = `
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
`;

const verticalCenterCSS = `
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
`;
const verticalCenterHTML = `
<div class="container">
  <div class="dialog">我劝天公重抖擞，不拘一格降人才</div>
</div>
`;

const getScrollWidthCode = `
.box{
  width:400px;
  overflow:scroll
}
<div class="box">
  <div id='in'></div>
</div>

console.log(400 - document.getElementById("in").clientWidth);
`
let scrollBarWidth = ref(0);
function getScrollWidth () {
  const dom = document.getElementById("in");
  if (!dom) {
    alert('找不到Id为in的DOM元素');
    return;
  }
  const domWidth = dom.clientWidth || 0;
  scrollBarWidth.value = 400 - domWidth;
}
const scrollWithoutShakeCode = `
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

`

function scrollTo (id: string) {
  debugger
  const dom = document.querySelector(`#${id}`);
  if (dom) {
    dom.scrollIntoView();
  }
}
</script>
<template>
  <div class="component__css-technique">
    <div wrapperClass="right-anchor" :offsetTop="0">
      <div  title="1.基于float实现自适应布局" @click="scrollTo('auto-layout')"/>
      <div
        @click="scrollTo('vertical-align-dialog')"
        title="2.基于vertical-align实现水平垂直居中弹框"
      />
      <div
      @click="scrollTo('get-scroll-width')"
        title="3.获取滚动条宽度"
      />
      <div
      @click="scrollTo('scroll-without-shake')"
        title="4.页面滚动条不发生晃动"
      />
    </div>
    <section class="main-content">
      <page-header title="css的技巧"> </page-header>

      <h2 id="auto-layout">1.利用float实现左边定宽，右边自适应布局</h2>
      <CopyWrapper :msg="autoAdaptHtml">
        <highlightjs language="javascript" :code="autoAdaptHtml" />
      </CopyWrapper>

      <CopyWrapper :msg="autoAdaptCSS">
        <highlightjs language="css" :code="autoAdaptCSS" />
      </CopyWrapper>

      <div class="father">
        <img src="@/assets/layout-grid.png" />
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
      </div>

      <strong
        >float最初的设计出来是为了解决文字环绕问题，如果animal选择器没有设置margin-left，将看到文字环绕，如下图</strong
      >
      <img
        class="example-img"
        src="@/components/cssbasic/images/text_arround.png"
        alt="文字环绕效果"
      />

      <strong>除了使用margin-left之外，还可以让animal选择器设置overflow:hidden(触发BFC)来实现自适应布局</strong>

      <aside>
        <ul>可以触发BFC(如果一个元素有BFC，内部怎么翻江倒海都不会影响外部元素)的情况
          <li>html根元素</li>
          <li>float的值不为none</li>
          <li>overflow的值不为auto、scroll或hidden</li>
          <li>display的值为table-cell、table-caption和inline-block中的任何一个</li>
          <li>position的值不为relative和static</li>
        </ul>
      </aside>

      <div class="father">
        <img src="@/assets/layout-grid.png" />
        <p class="animal_bfc">
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
      </div>

      <h2 id="vertical-align-dialog">
        2.基于vertical-align实现水平垂直居中弹框
      </h2>

      <CopyWrapper :msg="verticalCenterHTML">
        <highlightjs language="html" :code="verticalCenterHTML" />
      </CopyWrapper>

      <CopyWrapper :msg="verticalCenterCSS">
        <highlightjs language="css" :code="verticalCenterCSS" />
      </CopyWrapper>

      <a-button type="primary" @click="showVerticalDialog = true"
        >打开弹窗</a-button
      >

      <ol style="margin-top:20px">实现原理
        <li>在示例中，由于font-size设置为0,所以x中心点位置就是.container的上边缘，此时，高度100%的宽度为0的伪元素和这个中心点对齐，如果中心点位置不懂，这个伪元素的上一半应该在.container的外面，但是CSS中默认是左上方排列对齐的，所以，伪元素和这个原本在容器上边缘的x中心点一起往下移动规律半个容器高度，也就是此时x中心点就在容器的垂直中心线上</li>
        <li>弹框元素.dailog也设置了vertical-align:middle。根据定义，弹框的垂直中心位置和x中心位置对齐，此时，x中心点就在容器的垂直中心位置，从而实现了垂直居中效果</li>
      </ol>

      <div
        class="container"
        v-show="!!showVerticalDialog"
        @click="showVerticalDialog = false"
      >
        <div class="dialog">
          <p>我劝天公重抖擞，不拘一格降人才</p>
          <a-button @click="showVerticalDialog = false">关闭弹窗</a-button>
        </div>
      </div>

      <h2 id="get-scroll-width">
        3.获取滚动条宽度
      </h2>

      <div class="box">
        <div id='in'></div>
      </div>

      <div >{{ scrollBarWidth }}</div>

      <a-button @click="getScrollWidth">计算滚动条宽度</a-button>

      <p class="mt-2">mac电脑需要在系统设置=>外观=>始终显示滚动条方可看到效果，否则不显示滚动条，计算结果就一直为0。笔者在2023年10月4日打印结果为15
      </p>

      <CopyWrapper :msg="getScrollWidthCode">
        <highlightjs language="html" :code="getScrollWidthCode" />
      </CopyWrapper>

      <h2 id="scroll-without-shake">
        4.页面滚动条不发生晃动
      </h2>
      <h4>滚动条导致页面晃动的原因</h4>
      <p>窗体默认是没有滚动条的，而HTML内容是自上而下加载的，就会发生一开始没有滚动条，后来突然出现滚动条的情况，此时页面的可用宽度发生变化，水平居中会重新开始计算，导致页面的发生晃动</p>

      <p>简单粗暴的解决方式是设置html:{ overflow-y:scroll },但是这样会导致页面一都有滚动条</p>

      <high-light>HTML中有两个标签是默认可以产生滚动条的，一个是根元素html,另一个是textarea，因为这俩默认的overflow都不是visible</high-light>

      <CopyWrapper :msg="scrollWithoutShakeCode">
        <highlightjs language="html" :code="scrollWithoutShakeCode" />
      </CopyWrapper>

    </section>
  </div>
</template>
<style lang="scss" scoped>
:deep {
  .ant-affix {
    right: 0;
  }
  .right-anchor {
    position: fixed;

    top:0;
    right:0;
    margin-top: 24px;
    width: 350px;
    min-width: 350px;
    max-width: 350px;
    text-align: left;
    border-right: 24px solid transparent;
  }
}
.component__css-technique {
  strong{
    display: inline-block;
    margin:16px 0;
  }

  .main-content {
    margin-right: 370px;
  }

  margin-left: 24px;
  .father {
    overflow: hidden;
  }
  .father > img {
    width: 60px;
    height: 64px;
    float: left;
  }

  .animal {
    margin-left: 70px;
  }
  .animal_bfc{
    overflow: hidden;
  }


  .example-img {
    display: block;
    border: 1px solid #eee;
    width: 600px;
  }

  .container {
    z-index: 11;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-size: 0;
    white-space: nowrap;
    overflow: auto;
  }

  .container::after {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .dialog {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    font-size: 14px;
    white-space: normal;
    width: 340px;
    height: 400px;
    background-color: white;
    border-radius: 16px;
    padding: 24px;
  }
  .box{
    width: 400px;
    overflow: scroll;
  }
 
}
</style>
