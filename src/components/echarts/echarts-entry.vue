<script setup lang="ts">
import { onMounted } from 'vue';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';

// Import bar charts, all suffixed with Chart
import { BarChart } from 'echarts/charts';

// Import the title, tooltip, rectangular coordinate system, dataset and transform components
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from 'echarts/components';

// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from 'echarts/features';

// Import the Canvas renderer
// Note that including the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';

// Register the required components
echarts.use([
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

// The chart is initialized and configured in the same manner as before
var myChart: any = null;

onMounted(() => {
  myChart = echarts.init(document.getElementById('main'));
  window.addEventListener('resize', function () {
    myChart.resize();
  });

  // Draw the chart
  myChart.setOption({
    xAxis: {
      type: 'category',
      data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
    },
    yAxis: {},
    dataset: {
      dimensions: ['product', '2015', '2016', '2017'],
      source: [
        { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
        { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
        { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
        { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 },
      ],
    },
    series: [
      {
        type: 'bar',
        // name: '2015',
        // data: [89.3, 92.1, 94.4, 85.4],
      },
      {
        type: 'bar',
        // name: '2016',
        // data: [95.8, 89.4, 91.2, 76.9],
      },
      {
        type: 'bar',
        // name: '2017',
        // data: [97.7, 83.1, 92.5, 78.1],
      },
    ],
  });
});
</script>
<template>
  <section>
    <page-header title="echarts的学习" description=""> </page-header>

    <h2>官网</h2>
    链接
    <a href="https://echarts.apache.org/handbook/en/get-started"
      >https://echarts.apache.org/handbook/en/get-started</a
    >

    <h2>安装</h2>
    <code>yarn add echarts</code>

    <div id="main" style="width: 600px; height: 400px"></div>

    <h2>技巧</h2>
    <h3>1.按需引入</h3>
    <h3>2.监听窗口缩放</h3>
    <h3>
      3.在图表容器被销毁之后，调用echartsInstance.dispose销毁实例，在图表被添加后再次调用echarts.init初始化
    </h3>
    <h3>4.利用json自定义主题</h3>
    <h3>5.数据可以写在series/data里，也可以在dataset里</h3>
  </section>
</template>
<style></style>
