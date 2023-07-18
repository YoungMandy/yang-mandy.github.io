<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <h1 class="page-title">{{ title }}</h1>
  <p class="page-description">
    {{ description }} <slot name="description"></slot>
  </p>
</template>
<style lang="scss"></style>
