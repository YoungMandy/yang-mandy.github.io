<script setup lang="ts">
const emit = defineEmits(['changeTech'])

function changeTechnologyStack (name: string) {
  emit('changeTech', name);
}
</script>

<template class="component_header">
    <a-button type="primary" @click="changeTechnologyStack('vue')">Vue项目</a-button>
    <a-button style="margin-left:16px" @click="changeTechnologyStack('react')">React项目</a-button>
</template>

<style>
.component_header{
  text-align: right;
  line-height: 56px;
  padding:0 16px;
}

</style>