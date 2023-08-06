<script setup lang="ts">
import { message } from 'ant-design-vue'
defineProps({
  msg: {
    type: String,
    default:''
  }
})
function onSuccess () {
  message.success('复制成功');
  
}
function onError () {
  message.error('复制失败');
  
}
</script>
<template>
<div class="copy-wrapper">
  <slot></slot>
  <button class="copy-button" 
    v-clipboard="msg" 
    v-clipboard:success="onSuccess"
    v-clipboard:error="onError">复制内容</button>
</div>
</template>
