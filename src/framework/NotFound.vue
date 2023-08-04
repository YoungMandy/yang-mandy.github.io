<script setup lang="ts">
const emit = defineEmits(['changeTech'])

function changeTechnologyStack (name: string) {
  emit('changeTech', name);
}
</script>

<template >
    <div class="component_not-found"><div>404页面</div></div>
</template>

<style>
.component_not-found{
  display:flex;
  align-items: center;
  justify-content: center;
  height:100%;
 
}

</style>