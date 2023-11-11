<script setup lang="ts">
import { reactive } from 'vue';

// ==== float布局 ====
const float = reactive({
  display: 'inline-block',
});
</script>
<template>
  <ul>
    <li>
      div+
      float布局一般用在某个按钮需要居右,左边内容区占完的情况,最初的设计师为了解决文字环绕问题。在flex布局出现之前蛮常用的
    </li>
    <li>
      默认情况下(没有使用flex或者grid布局),块状元素独占行,即使是宽度不满整行
    </li>
  </ul>

  <a-form class="control-form" layout="inline">
    <a-form-item label="内容区域的display值:">
      <a-radio-group v-model:value="float.display" button-style="solid">
        <a-radio-button value="inline-block">inline-block</a-radio-button>
        <a-radio-button value="block">block</a-radio-button>
      </a-radio-group>
    </a-form-item>
  </a-form>

  <div class="layout__float">
    <div class="layout__float-content" :style="{ display: float.display }">
      内容块1
    </div>
    <div class="layout__float-content" :style="{ display: float.display }">
      内容块2
    </div>
    <a-button class="layout__float-button">我是浮动在右侧的按钮</a-button>
  </div>
</template>
<style lang="scss" scoped>
// float布局
.layout__float {
  min-height: 180px;
  padding: 10px;
  background-color: blanchedalmond;
  &-content {
    height: 60px;
    background: gainsboro;
    display: inline-block;
    border: 1px solid greenyellow;
    width: 200px;
  }
  &-button {
    float: right;
  }
}
</style>
