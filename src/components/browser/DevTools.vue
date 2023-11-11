<script setup lang="ts">
import PageHeader from '@/framework/PageHeader.vue';
</script>
<template>
  <section class="component__dev-tools">
    <page-header title="Chrome 开发者工具的使用技巧" description="">
    </page-header>

    <h4>1.让非可视区域元素出现在屏幕可视区</h4>

    <img
      src="@/components/browser/images/scroll_in_view.png"
      width="300"
      alt="scroll in view image"
    />

    <h4>2.显示标尺</h4>
    <ul>
      <li>
        Press Control+Shift+P or Command+Shift+P (Mac) to open the Command menu,
        type Show rulers on hover, and press Enter.
      </li>
      <li>
        Check Settings. Settings > Preferences > Elements > Show rulers on
        hover.
      </li>
    </ul>
    <img
      src="@/components/browser/images/rulers.png"
      width="400"
      alt="rulers image"
    /> 
    
    <h4>3.查看元素的一些状态</h4>
    <img
      src="@/components/browser/images/hover_state_view.png"
      width="400"
      alt="rulers image"
    />
    
    <h4>4.在控制台输出当前选中的元素</h4>
    <ul>
      <li>选中元素=>鼠标右键=>检查元素</li>
      <li>在控制台输出$0</li>
    </ul>
    <img
      src="@/components/browser/images/$0.png"
      width="400"
      alt="$0 image"
    />
    <li>在DOM树点击其他元素,在打印$0,输出的就是最新点击的元素</li>
    
    
    <h4>5.复制DOM节点的JS访问路径</h4>
    <ul>
      <li>选中元素=>鼠标右键=>检查元素</li>
      <li>右键=>Copy=>Copy JS Path</li>
      <li>在控制台或者其他需要的地方粘贴</li>
    </ul>
    <img
      src="@/components/browser/images/copy_js_path.png"
      width="400"
      alt="copy js path image"
    />
    <img
      src="@/components/browser/images/copy_js_path_log.png"
      width="400"
      alt="copy js path log image"
    />
   
  </section>
</template>
<style lang="scss" scoped>
.component__dev-tools {
  img {
    border: 2px solid #eee;
    border-radius: 8px;
  }
  h4{
    margin-top:32px;
  }
}
</style>
