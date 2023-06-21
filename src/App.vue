<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/framework/Header.vue';
import { ref } from 'vue'
const technologyStack = ref('vue');
function onTechnologyStackChange (name: string) {
  technologyStack.value = name;
}

</script>

<template>
  <header>
   <Header @changeTech="onTechnologyStackChange"></Header>
  </header>
  <RouterView v-if="technologyStack ==='vue'"/>
  <iframe class="react-container" width="100%" v-if="technologyStack ==='react'" 
  seamless src="https://youngmandy.github.io/react-docs/index.html"></iframe>
</template>

<style scoped>
.react-container{
  height:calc(100vh - 56px);
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
