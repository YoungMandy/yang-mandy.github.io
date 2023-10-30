<script setup lang="ts">
import PageHeader from '@/framework/PageHeader.vue';
</script>
<template>
  <section class="component__dev-tools">
    <page-header title="Chrome 开发者工具的使用技巧" description="">
    </page-header>

    <h4>1.让非可视区域元素出现在屏幕可视区</h4>

    <img
      src="@/components/browser/images/scroll-in-view.png"
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
  </section>
</template>
<style lang="scss" scoped>
.component__dev-tools {
  img {
    border: 2px solid #eee;
    border-radius: 8px;
  }
  h4{
    margin-top:20px;
  }
}
</style>
