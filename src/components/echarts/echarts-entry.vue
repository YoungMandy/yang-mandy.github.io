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

let option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    ]
  },
  xAxis: [
    { type: 'category', gridIndex: 0 },
    { type: 'category', gridIndex: 1 }
  ],
  yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
  grid: [{ bottom: '55%' }, { top: '55%' }],
  series: [
    // 这几个系列会出现在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
    { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 0, yAxisIndex: 0 },
    { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 0, yAxisIndex: 0 },
    { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 0, yAxisIndex: 0 },
    // 这几个系列会出现在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
    { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 }
  ]
};

  // Draw the chart
  myChart.setOption({...option
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
