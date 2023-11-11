<script setup lang="ts">
import Sidebar from '@/framework/Sidebar.vue'
import Content from '@/framework/Content.vue'
</script>

<template>
  <main class="page__home">
    <sidebar class="sidebar"/>
    <content class="content"/>
  </main>
</template>

<style lang="scss" scoped>
.page__home{
  display:flex;
  height:100%;
}
.content{
  flex-grow:1;
  padding:24px;
  max-height: 100vh;
  overflow-y: auto;
 
}
.sidebar{
  width: 240px;
  min-width: 240px;
}

</style>
