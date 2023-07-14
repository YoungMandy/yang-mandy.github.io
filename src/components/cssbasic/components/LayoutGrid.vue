<script setup lang="ts">
//=== grid 布局====
const gridHtmlCode = `
//html的代码
  <div class="layout__grid">
    <div class="header"></div>
    <div class="funny"></div>
    <div class="inclined"></div>
    <div class="interesting"></div>
  </div>
`;
const gridCssCode = `
// css 的代码
  .layout__grid{
    background-color: rgb(88, 94, 151);
    display: grid;
    grid-template-columns: 200px 1fr 300px;
    grid-template-rows:repeat(3,100px);
    grid-template-areas: 
    "header funny funny"
    "header  inclined interesting"
    "header inclined interesting";
    gap: 10px;

    .header{
      background:#FFEE58;
      grid-area: header;
    }
    .funny{
      background:#76FF03;
      grid-area: funny;
    }
    .inclined{
      background:#2196F3;
      grid-area: inclined;
    }
    .interesting{
      background:#64FFDA;
      grid-area: interesting;
    }
  }
`;

const gridCssCodeLine = `
//使用线坐标划分块的css代码
  .layout__grid{
    background-color: rgb(88, 94, 151);
    display: grid;
    grid-template-columns: 200px 1fr 300px;
    grid-template-rows:repeat(3,100px);
    gap: 10px;

    .header{
      background:#FFEE58;
      grid-area: 1 / 1 / 4 / 2;
    }
    .funny{
      background:#76FF03;
      grid-area: 1/ 2 / 2 / 4;
    }
    .inclined{
      background:#2196F3;
      grid-area: 2/ 2 / 4 / 3;
    }
    .interesting{
      background:#64FFDA;
      grid-area: 2 / 3/ 4/ 4;
    }
  }
`;
</script>
<template>
  grid布局是三维布局
  <ul>
    <li>
      grid布局通过<code>grid-template-columns</code>和<code
        >grid-template-rows</code
      >
      划分行列
    </li>
    <li>
      可以通过<code>grid-template-areas</code>把连续矩形的盒子进行命名划分,再通过名字设置具体样式
    </li>
  </ul>

  <pre>
    {{ gridCssCode }}
  </pre>

  <pre>
    {{ gridHtmlCode }}
  </pre>

  <div class="layout__grid">
    <div class="header"></div>
    <div class="funny"></div>
    <div class="inclined"></div>
    <div class="interesting"></div>
  </div>

  <p style="margin-top: 16px">
    可以不用设置<code>grid-template-areas</code>,而是对每个类选择器设置<code
      >grid-area:grid-row-start / grid-column-start / grid-row-end
      /grid-column-end</code
    >
    效果等同
  </p>

  <img
    src="@/assets/layout_grid.png"
    style="width: 600px; object-fit: contain"
  />

  <pre>
    {{ gridCssCodeLine }}
  </pre>
  
</template>
<style lang="scss" scoped>
.layout__grid {
  background-color: rgb(88, 94, 151);
  display: grid;
  grid-template-columns: 200px 1fr 300px;
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  .header {
    background: #ffee58;
    grid-area: 1 / 1 / 4 / 2;
  }
  .funny {
    background: #76ff03;
    grid-area: 1/ 2 / 2 / 4;
  }
  .inclined {
    background: #2196f3;
    grid-area: 2/ 2 / 4 / 3;
  }
  .interesting {
    background: #64ffda;
    grid-area: 2 / 3/ 4/ 4;
  }
}
</style>
