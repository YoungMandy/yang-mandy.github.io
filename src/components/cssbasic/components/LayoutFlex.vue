<script setup lang="ts">
import { reactive, computed } from 'vue';
// ==== flex布局 ====
const flex = reactive({
  parent: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  child: {
    left: {
      width: 200,
      order: 0,
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
      alignSelf: 'auto',
    },
    center: {
      width: 'auto',
      order: 0,
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
      alignSelf: 'auto',
    },
    right: {
      width: 200,
      order: 0,
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
      alignSelf: 'auto',
    },
  },
});
let flexParentStyle: any = computed(() => ({
  'justify-content': flex.parent.justifyContent,
  'align-items': flex.parent.alignItems,
  'flex-direction': flex.parent.flexDirection,
  'flex-wrap': flex.parent.flexWrap,
}));
</script>
<template>
  flex是目前最常用的布局(最初是在2009年由W3C提出) flex布局通过对父盒子设置
  <code>display:flex</code>或者
  <code>display:inline-flex</code>
  开启,
  <ol class="code-ol">
    可以在父盒子上设置的css样式有
    <li>
      flex-direction: row (默认值) | row-reverse | column | column-reverse
    </li>
    <li>flex-warp: nowrap(默认值,不换行) | wrap | warp-reverse</li>
    <li>flex-flow: flex-direction和flex-wrap的缩写,默认值是row nowrap</li>
    <li>
      justify-content: flex-start(默认值) | flex-end | center | space-between |
      space-around
    </li>
    <li>
      align-items:
      stretch(默认值,如果项目未设置高度或者高度为auto,将占满整个容器) |
      flex-start | flex-end | center | baseline
    </li>
    <li>
      align-content: stretch(默认值) | flex-start | flex-end | center |
      space-between | space-around
    </li>
  </ol>
  <ol class="code-ol">
    可以在子项目上设置的css样式有
    <li>
      align-self:auto(默认值,表示继承父元素的align-items属性) | flex-start
      |flex-end | center | baseline | stretch
    </li>
    <li>
      flex-grow:0 (默认值,即使有剩余空间,也不放大)
      ,如果有项目<code>flex-grow</code>为2,其他项目都为1,那么前者占据的<code>剩余空间</code>比其他的多一倍
    </li>
    <li>flex-shrink:1(默认值),当空间不足时,都将等比例缩小</li>
    <li>flex-basis:auto(默认值，项目本来的大小)</li>
    <li>order: 0 (默认值),数值越大项目越靠前</li>
    <li>flex 是flex-grow flex-shrink flex-basis的缩写</li>
  </ol>

  <div class="layout__flex-control">
    <!-- left项目的样式控制 -->
    <a-form class="control-form" layout="inline">
      <a-form-item label="左边项目的width:">
        <a-input
          v-model:value="flex.child.left.width"
          type="text"
          placeholder="左边盒子的宽度"
        />
      </a-form-item>
      <a-form-item label="左边项目的order:">
        <a-input
          v-model:value="flex.child.left.order"
          type="text"
          placeholder="左边盒子的order"
        />
      </a-form-item>
      <a-form-item label="左边项目的flex-grow:">
        <a-input
          v-model:value="flex.child.left.flexGrow"
          type="text"
          placeholder="左边盒子的flex-grow"
        />
      </a-form-item>
      <a-form-item label="左边项目的flex-shrink:">
        <a-input
          v-model:value="flex.child.left.flexShrink"
          type="text"
          placeholder="左边盒子的flex-shrink"
        />
      </a-form-item>
      <a-form-item label="左边项目的flex-basis:">
        <a-input
          v-model:value="flex.child.left.flexBasis"
          type="text"
          placeholder="左边盒子的flex-basis"
        />
      </a-form-item>
      <a-form-item label="左边盒子的align-self:">
        <a-radio-group
          v-model:value="flex.child.left.alignSelf"
          button-style="solid"
        >
          <a-radio-button value="auto">auto</a-radio-button>
          <a-radio-button value="stretch">stretch</a-radio-button>
          <a-radio-button value="flex-start">flex-start</a-radio-button>
          <a-radio-button value="flex-end">flex-end</a-radio-button>
          <a-radio-button value="center">center</a-radio-button>
        </a-radio-group>
      </a-form-item>
    </a-form>

    <!-- 中间项目的样式控制 -->
    <a-form class="control-form" layout="inline">
      <a-form-item label="中间项目的width:">
        <a-input
          v-model:value="flex.child.center.width"
          type="text"
          placeholder="中间盒子的宽度"
        />
      </a-form-item>
      <a-form-item label="中间项目的order:">
        <a-input
          v-model:value="flex.child.center.order"
          type="text"
          placeholder="中间盒子的order"
        />
      </a-form-item>
      <a-form-item label="中间项目的flex-grow:">
        <a-input
          v-model:value="flex.child.center.flexGrow"
          type="text"
          placeholder="中间盒子的flex-grow"
        />
      </a-form-item>
      <a-form-item label="中间项目的flex-shrink:">
        <a-input
          v-model:value="flex.child.center.flexShrink"
          type="text"
          placeholder="中间盒子的flex-shrink"
        />
      </a-form-item>
      <a-form-item label="中间项目的flex-basis:">
        <a-input
          v-model:value="flex.child.center.flexBasis"
          type="text"
          placeholder="中间盒子的flex-basis"
        />
      </a-form-item>
      <a-form-item label="中间盒子的align-self:">
        <a-radio-group
          v-model:value="flex.child.center.alignSelf"
          button-style="solid"
        >
          <a-radio-button value="auto">auto</a-radio-button>
          <a-radio-button value="stretch">stretch</a-radio-button>
          <a-radio-button value="flex-start">flex-start</a-radio-button>
          <a-radio-button value="flex-end">flex-end</a-radio-button>
          <a-radio-button value="center">center</a-radio-button>
        </a-radio-group>
      </a-form-item>
    </a-form>

    <!-- 右边项目的样式控制 -->
    <a-form class="control-form" layout="inline">
      <a-form-item label="右边项目的width:">
        <a-input
          v-model:value="flex.child.right.width"
          type="text"
          placeholder="右边盒子的宽度"
        />
      </a-form-item>
      <a-form-item label="右边项目的order:">
        <a-input
          v-model:value="flex.child.right.order"
          type="text"
          placeholder="右边盒子的order"
        />
      </a-form-item>
      <a-form-item label="右边项目的flex-grow:">
        <a-input
          v-model:value="flex.child.right.flexGrow"
          type="text"
          placeholder="右边盒子的flex-grow"
        />
      </a-form-item>
      <a-form-item label="中间项目的flex-shrink:">
        <a-input
          v-model:value="flex.child.right.flexShrink"
          type="text"
          placeholder="右边盒子的flex-shrink"
        />
      </a-form-item>
      <a-form-item label="右边项目的flex-basis:">
        <a-input
          v-model:value="flex.child.right.flexBasis"
          type="text"
          placeholder="右边盒子的flex-basis"
        />
      </a-form-item>
      <a-form-item label="右边盒子的align-self:">
        <a-radio-group
          v-model:value="flex.child.right.alignSelf"
          button-style="solid"
        >
          <a-radio-button value="auto">auto</a-radio-button>
          <a-radio-button value="stretch">stretch</a-radio-button>
          <a-radio-button value="flex-start">flex-start</a-radio-button>
          <a-radio-button value="flex-end">flex-end</a-radio-button>
          <a-radio-button value="center">center</a-radio-button>
        </a-radio-group>
      </a-form-item>
    </a-form>

    <!-- 父容器的样式控制 -->
    <a-form class="control-form" layout="inline">
      <a-form-item label="父容器的justify-content:">
        <a-radio-group
          v-model:value="flex.parent.justifyContent"
          button-style="solid"
        >
          <a-radio-button value="flex-start">flex-start</a-radio-button>
          <a-radio-button value="flex-end">flex-end</a-radio-button>
          <a-radio-button value="center">center</a-radio-button>
          <a-radio-button value="space-between">space-between</a-radio-button>
          <a-radio-button value="space-around">space-around</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="父容器的align-items:">
        <a-radio-group
          v-model:value="flex.parent.alignItems"
          button-style="solid"
        >
          <a-radio-button value="stretch">stretch</a-radio-button>
          <a-radio-button value="flex-start">flex-start</a-radio-button>
          <a-radio-button value="flex-end">flex-end</a-radio-button>
          <a-radio-button value="center">center</a-radio-button>
          <a-radio-button value="baseline">base-line</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="父容器的flex-direction:">
        <a-radio-group
          v-model:value="flex.parent.flexDirection"
          button-style="solid"
        >
          <a-radio-button value="row">row</a-radio-button>
          <a-radio-button value="row-reverse">row-reverse</a-radio-button>
          <a-radio-button value="column">column</a-radio-button>
          <a-radio-button value="column-reverse">column-reverse</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="父容器的flex-wrap:">
        <a-radio-group
          v-model:value="flex.parent.flexWrap"
          button-style="solid"
        >
          <a-radio-button value="nowrap">nowrap</a-radio-button>
          <a-radio-button value="wrap">wrap</a-radio-button>
          <a-radio-button value="wrap-reverse">wrap-reverse</a-radio-button>
        </a-radio-group>
      </a-form-item>
    </a-form>
  </div>

  <!-- @ts-ignore -->
  <div class="layout__flex" :style="flexParentStyle">
    <div
      class="flex-item left-item"
      :style="{
        order: flex.child.left.order,
        width: flex.child.left.width + 'px',
        'flex-grow': flex.child.left.flexGrow,
        'flex-shrink': flex.child.left.flexShrink,
        'flex-basis': flex.child.left.flexBasis + 'px',
        'align-self': flex.child.left.alignSelf,
      }"
    >
      <p>左边盒子</p>
      <p>order:{{ flex.child.left.order }}</p>
      <p>width:{{ flex.child.left.width }}</p>
      <p>flex-grow:{{ flex.child.left.flexGrow }}</p>
      <p>flex-shrink:{{ flex.child.left.flexShrink }}</p>
      <p>flex-basis:{{ flex.child.left.flexBasis }}</p>
      <p>align-self:{{ flex.child.left.alignSelf }}</p>
    </div>
    <div
      class="flex-item center-item"
      :style="{
        order: flex.child.center.order,
        width: flex.child.center.width + 'px',
        'flex-grow': flex.child.center.flexGrow,
        'flex-shrink': flex.child.center.flexShrink,
        'flex-basis': flex.child.center.flexBasis + 'px',
        'align-self': flex.child.center.alignSelf,
      }"
    >
      <p>中间盒子</p>
      <p>order:{{ flex.child.center.order }}</p>
      <p>width:{{ flex.child.center.width }}</p>
      <p>flex-grow:{{ flex.child.center.flexGrow }}</p>
      <p>flex-shrink:{{ flex.child.center.flexShrink }}</p>
      <p>flex-basis:{{ flex.child.center.flexBasis }}</p>
      <p>align-self:{{ flex.child.center.alignSelf }}</p>
    </div>
    <div
      class="flex-item right-item"
      :style="{
        order: flex.child.right.order,
        width: flex.child.right.width + 'px',
        'flex-grow': flex.child.right.flexGrow,
        'flex-shrink': flex.child.right.flexShrink,
        'flex-basis': flex.child.right.flexBasis + 'px',
        'align-self': flex.child.right.alignSelf,
      }"
    >
      <p>右边盒子</p>
      <p>order:{{ flex.child.right.order }}</p>
      <p>width:{{ flex.child.right.width }}</p>
      <p>flex-grow:{{ flex.child.right.flexGrow }}</p>
      <p>flex-shrink:{{ flex.child.right.flexShrink }}</p>
      <p>flex-basis:{{ flex.child.right.flexBasis }}</p>
      <p>align-self:{{ flex.child.right.alignSelf }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// flex布局
.code-ol {
  display: flex;
  flex-direction: column;
  width: 900px;
  li {
    background-color: #eee;
    margin-top: 4px;
    line-height: 30px;
  }
}
.layout__flex {
  display: flex;
  min-height: 300px;
  background-color: #d8e1ed;
  .flex-item {
    background-color: antiquewhite;
    border: 1px solid white;
    text-align: center;
  }
  &-control {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
