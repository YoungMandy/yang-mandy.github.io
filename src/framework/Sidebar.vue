<script setup lang="ts">
import { ref } from 'vue'

import { menus } from '@/types/index';
import router from '@/router';
const openKeys = ref<string[]>(['css-basic']);
const selectedKeys = ref<string[]>(['box-sizing']);
function handleClick (name: string) {
  console.log(name);
  router.push({ name: name });
  
}
</script>
<template class="component__sidebar">
  <a-menu
    

    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
  >
    <a-sub-menu :key="index" :title="title" v-for="{id,title,name,children},index in menus">
      <a-menu-item v-for="item in children" :key="item.name" @click="handleClick(item.name)">{{ item.title }}</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<style lang="scss" scoped>

.component__sidebar {
  
}
</style>
