<script setup lang="ts">
import { RouterView } from 'vue-router';


  console.log('first-paint', performance.getEntriesByName('first-paint'));
  console.log(
    'first-contentful-paint',
    performance.getEntriesByName('first-contentful-paint')
  );
  console.log(
    'time to interactive',
    performance.timing.loadEventEnd - performance.timing.navigationStart
  );


</script>

<template>
  <RouterView  />
</template>

<style scoped>
.react-container {
  height: calc(100vh - 56px);
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
