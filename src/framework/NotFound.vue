<script setup lang="ts">
import router from '@/router';

function goBack () {
  router.push({name:'css-selector'})
}
</script>

<template >
    <div class="component_not-found">
      <a-result title="oh,页面没有找到">
        <template #extra>
          <a-button key="console" type="primary" @click="goBack">返回默认页面</a-button>
        </template>
      </a-result>
    </div>
</template>

<style>
.component_not-found{
  display:flex;
  align-items: center;
  justify-content: center;
  height:100%;
 
}

</style>