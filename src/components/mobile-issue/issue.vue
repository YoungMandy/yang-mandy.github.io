<script setup lang="ts">

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

      <h3>2.获取窗体滚动高度的方法不同</h3>
       <p>在PC端，窗体滚动高度可以使用document.documentElement.scrollTop来获取,但是在移动端，可能就要使用document.body.scrollTop来获取</p>
    
      
  </section>
</template>
<style>
</style>