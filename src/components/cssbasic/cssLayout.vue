<script setup lang="ts" >
import { ref } from 'vue';
import LayoutTable from '@/components/cssbasic/components/LayoutTable.vue'
import LayoutFloat from '@/components/cssbasic/components/LayoutFloat.vue'
import LayoutFlex from '@/components/cssbasic/components/LayoutFlex.vue'
import LayoutGrid from '@/components/cssbasic/components/LayoutGrid.vue'

let activeKey = ref('table');
const onLayoutTableAdd = (item:any) => {
  console.log('table布局添加了新元素',item)
}

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
          <layout-table @addItem="onLayoutTableAdd"/>
        </a-collapse-panel>

        <a-collapse-panel key="float" header="div + float布局" :forceRender="true">
          <layout-float/>
        </a-collapse-panel>

        <a-collapse-panel key="flex" header="flex布局">
          <layout-flex/>
        </a-collapse-panel>

        <a-collapse-panel key="grid" header="grid布局">
          <layout-grid/>
        </a-collapse-panel>
          
      </a-collapse>
  </section>

</template>
<style lang="scss" scoped>

</style>