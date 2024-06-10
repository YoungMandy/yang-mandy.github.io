<script setup lang="ts">

const btnClickFeedback = `
.btn-active-animation {
  transform: scale(0.96);
}
`

</script>
<template>
  <section>
    <page-header 
      title="移动端一些技巧" 
      >
    </page-header>
  
    <h3>1.点击按钮的反应</h3>
    
    在移动端,点击按钮希望有一些反应,可以用<code>transform:scale(0.96)</code> 实现
     <CopyWrapper :msg="btnClickFeedback">
        <highlightjs
          language="css"
          :code="btnClickFeedback"
        />
      </CopyWrapper>

  </section>
</template>
<style>
</style>