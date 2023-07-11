<script setup lang="ts" >
import { ref } from 'vue';
let activeKey = ref('table');
</script>
<template>
  <section class="component__css-layout">
    <h1 class="page-title">css布局</h1>
    <p class="page-description">
      <ul>
        布局方式主要有下面四种
        <li>table布局(很少用，但是在等高布局的时候很有效)</li>
        <li>div + float布局</li>
        <li>flex布局</li>
        <li>grid布局</li>
      </ul>
    </p>
      <a-collapse v-model:activeKey="activeKey">
        <a-collapse-panel key="table" header="table布局" >
          table布局在等高退拽的时候有妙用
        </a-collapse-panel>
        <a-collapse-panel key="float" header="div + float布局" :forceRender="true">
          div+ float布局
        </a-collapse-panel>
        <a-collapse-panel key="flex" header="flex布局">
          flex是目前最常用的布局
        </a-collapse-panel>
        <a-collapse-panel key="grid" header="grid布局">
          grid布局是三维布局
        </a-collapse-panel>
      </a-collapse>
  </section>

</template>
<style lang="scss" scoped>
</style>