<script setup lang="ts">
import Sidebar from '@/framework/Sidebar.vue'
import Content from '@/framework/Content.vue'
</script>

<template>
  <main class="page__home">
    <sidebar class="sidebar"/>
    <div class="content-wrapper">
        <content class="content"/>
    </div>
  
  </main>
</template>

<style lang="scss" scoped>
.page__home{
  display:flex;
  height:100%;
}

.content-wrapper{
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
   max-height: 100vh;
  overflow-y: auto;
}

.content{
  width:1000px;
  padding:12px 36px;
 
}

.sidebar{
  
}

</style>
