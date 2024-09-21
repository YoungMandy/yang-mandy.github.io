<script setup lang="ts">
import { reactive, onMounted } from 'vue';

import { menus } from '@/config/menu';
import router from '@/router';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';

const state = reactive({
  collapsed: false,
  selectedKeys: ['box-sizing'],
  openKeys: ['css-basic'],
  preOpenKeys: ['css-basic'],
});
function handleClick(name: string) {
  console.log(name);
  router.push({ name: name });
}
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};

const initWidth = () => {
  const width = window.innerWidth || document.body.clientWidth;
  if (width > 500) {
    state.collapsed = false;
  } else {
    state.collapsed = true;
  }
};
onMounted(() => handleClick('box-sizing'));
onMounted(() => initWidth());
</script>
<template>
  <div class="component__sidebar">
    <div class="sidebar-wrapper">
      <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        :inline-collapsed="state.collapsed"
        :style="state.collapsed ? 'width:60px' : 'width:356px'"
      >
        <a-sub-menu
          :key="index"
          :title="title"
          v-for="({ id, title, name, children }, index) in menus"
        >
          <a-menu-item
            v-for="item in children"
            :key="item.name"
            @click="handleClick(item.name)"
            >{{ item.title }}</a-menu-item
          >
        </a-sub-menu>
      </a-menu>
      <a-button
        class="fixed-item"
        style="margin-bottom: 16px"
        @click="toggleCollapsed"
      >
        <MenuUnfoldOutlined v-if="state.collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.component__sidebar {
  height: 100vh;

  position: relative;

  .sidebar-wrapper {
    height: 100%;
    max-height: 100vh;
    overflow-y: auto;
    border-right: 1px solid rgba(5, 5, 5, 0.06);
  }

  .fixed-item {
    position: absolute;
    bottom: 0;
    right: 1px;
  }
}
</style>
