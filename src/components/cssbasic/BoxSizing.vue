<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import PageHeader from '@/framework/PageHeader.vue'
interface FormState {
  margin: number;
  border: number;
  padding: number;
  width: number;
}
let activeKey = ref('standard');
let standardBox: FormState = reactive({
  border: 10,
  margin: 10,
  padding: 10,
  width: 200,
});
let standardBoxWidth = ref(0);

let ieBox: FormState = reactive({
  border: 10,
  margin: 10,
  padding: 10,
  width: 200,
});
let ieBoxWidth = ref(0);

const calculateWidth = (domId: string) => {
  if (!domId) {
    return;
  }
  setTimeout(() => {
    const dom = document.getElementById(domId);
    if (dom) {
      if (domId == 'standard-box') {
        console.log(dom.getBoundingClientRect());
        standardBoxWidth.value = dom.getBoundingClientRect().width;
      } else if (domId == 'ie-box') {
        ieBoxWidth.value = dom.getBoundingClientRect().width;
      }
    }
  }, 0);
};
onMounted(() => {
  calculateWidth('standard-box');
  calculateWidth('ie-box');
})
</script>

<template>
  <section class="component__box-sizing">
    <page-header title="css的盒模型啊啊啊啊啊">
      <template v-slot:description>
        css的盒模型主要分为两种,通常称为IE盒模型和标准盒模型。他们的区别在于width设置的宽度的作用范围不同,通过css样式<code>box-sizing</code>控制
      </template>
    </page-header>

    <div class="page-content">
      <a-collapse v-model:activeKey="activeKey">
        <a-collapse-panel key="standard" header="标准盒模型" :forceRender="true">
          标准盒模型,通过设置<code>box-sizing:content-box</code>(默认值)实现,
          width的作用范围是content-box,所以整个盒子的宽度 = width + padding * 2
          + border * 2
          <a-form class="control-form" layout="inline" :model="standardBox">
            <a-form-item label="border值:">
              <a-input
                v-model:value="standardBox.border"
                type="text"
                style="width:200px"
                placeholder="border"
                @change="calculateWidth('standard-box')"
              >
              </a-input>
            </a-form-item>
            <a-form-item label="padding值:">
              <a-input
                v-model:value="standardBox.padding"
                type="text"
                style="width:200px"
                placeholder="padding"
                @change="calculateWidth('standard-box')"
              >
              </a-input>
            </a-form-item>
            <a-form-item label="width值:">
              <a-input
                v-model:value="standardBox.width"
                type="text"
                style="width:200px"
                placeholder="width"
                @change="calculateWidth('standard-box')"
              >
              </a-input>
            </a-form-item>
          </a-form>
          <div
            id="standard-box"
            class="content-box border-mixin"
            :style="{
              padding: standardBox.padding + 'px',
              margin: standardBox.margin + 'px',
              'border-width': standardBox.border + 'px',
              width: standardBox.width + 'px',
            }"
          >
            这是一个测试用的标准盒子
          </div>
          <div>
            当前标准盒子的宽度为: width({{ standardBox.width }}) + padding({{
              standardBox.padding
            }}) * 2 + border({{ standardBox.border }}) * 2 =
            {{ standardBoxWidth }}
          </div>
          <caption>
            div的宽度计算不含margin部分,可以用开发者工具进行确认
          </caption>
        </a-collapse-panel>

        <a-collapse-panel key="2" header="IE盒模型" :forceRender="true">
          IE盒模型,通过设置<code>box-sizing:border-box</code>实现
          width的作用范围是border-box,所以整个盒子的宽度一般等于width值(当content-box的宽度值大于等于0时);

          <a-form class="control-form" layout="inline" :model="ieBox">
            <a-form-item label="border值:">
              <a-input
                v-model:value="ieBox.border"
                type="text"
                style="width:200px"
                placeholder="border"
                @change="calculateWidth('ie-box')"
              >
              </a-input>
            </a-form-item>
            <a-form-item label="padding值:">
              <a-input
                v-model:value="ieBox.padding"
                type="text"
                style="width:200px"
                placeholder="padding"
                @change="calculateWidth('ie-box')"
              >
              </a-input>
            </a-form-item>
            <a-form-item label="width值:">
              <a-input
                v-model:value="ieBox.width"
                type="text"
                style="width:200px"
                placeholder="width"
                @change="calculateWidth('ie-box')"
              >
              </a-input>
            </a-form-item>
          </a-form>
          <div
            id="ie-box"
            class="border-box border-mixin"
            :style="{
              padding: ieBox.padding + 'px',
              margin: ieBox.margin + 'px',
              'border-width': ieBox.border + 'px',
              width: ieBox.width + 'px',
            }"
            @click="console.log($event)"
          >
            这是一个测试用的IE盒子
          </div>
          <div>当前IE盒子的宽度为: width = {{ ieBoxWidth }}</div>
          <p>content-box的最小值是0</p>
          <p>当width - padding * 2 - border* 2的值大于等于0时, </p>
          <p>
            content-box的宽度为:
            width({{ ieBox.width }}) 
            - padding({{ieBox.padding}}) * 2 
            - border({{ ieBox.border }}) * 2 
            = ({{ ieBox.width - (ieBox.padding * 2) - (ieBox.border * 2) >= 0 ?
            ieBox.width - (ieBox.padding * 2) - (ieBox.border * 2) 
            :0 }})
          </p>
          <p>当width - padding * 2 - border* 2的值小于0时,content-box宽度为0</p>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </section>
</template>
<style lang="scss" scoped>
$bg-color: rgb(24, 144, 255);
.component__box-sizing {
  .content-box {
    box-sizing: content-box;
    background-color: $bg-color;
  }
  .border-box {
    box-sizing: border-box;
  }
  .border-mixin {
    background-color: aqua;
    border-style: solid;
    border-color: #4799a8;
  }
  .ant-form-inline .ant-form-item {
    margin-bottom: 16px;
  }
  :deep  .ant-form-item-label{
    width: 120px;
  }
}
</style>
