<script setup lang="ts">
import PageHeader from '@/framework/PageHeader.vue';
const cssDisabledDraggle = `
img {
-webkit-user-drag: none;
}
`
const htmlDisabledDraggle = `
<img src="somethingUrl" draggle='false'/>
`

</script>
<template>
  <section>
    <page-header 
      title="移动端爬坑记录" 
      >
    </page-header>
  
    <h3>1.在ios,长按图片可以拖拽</h3>
    
    <div>CSS的处理方案</div>
     <CopyWrapper :msg="cssDisabledDraggle">
        <highlightjs
          language="css"
          :code="cssDisabledDraggle"
        />
      </CopyWrapper>

    <div>html 的处理方案</div>
     <CopyWrapper :msg="htmlDisabledDraggle">
        <highlightjs
          language="html"
          :code="htmlDisabledDraggle"
        />
      </CopyWrapper>
    
      
  </section>
</template>
<style>
</style>