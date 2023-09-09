<script setup lang="ts">
import PageHeader from '@/framework/PageHeader.vue';
import {
 commitLintConfig
} from '@/components/git-use/js/lintConfig.js'
</script>
<template>
  <section>
    <page-header 
      title="git 提交的检测配置" 
      description="git 提交一般用commitLint插件,这个插件建议用下面的配置">
    </page-header>
  
    <h2>commitlint的配置</h2>
     <CopyWrapper :msg="commitLintConfig">
      <highlightjs
      language="javascript"
      :code="commitLintConfig"
    />
    </CopyWrapper>
  
      
  </section>
</template>
<style>
</style>