<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';

function showNavigationDetails() {
  // Get the first entry
  const [entry] = performance.getEntriesByType('navigation');
  // Show it in a nice table in the developer console
  console.table('navigation', entry.toJSON());

  const [entry2] = performance.getEntriesByType('resource');
  // Show it in a nice table in the developer console
  console.table('resource', entry2.toJSON());

  run();

  const observer = new PerformanceObserver(function (list) {
    console.log('long task', list.getEntries());
  });
  // Register observer for previous and future long task notifications.
  observer.observe({ type: 'longtask', buffered: true });

  const observer2 = new PerformanceObserver((list) => {
    let perfEntries = list.getEntries();
    console.log('element', perfEntries);
    // Process the entries by iterating over them.
  });
  observer2.observe({ type: 'element', buffered: true });
}

onMounted(() => showNavigationDetails());

async function run() {
  performance.mark("startTask1");
  await setTimeout(() => { },1000); // Some developer code
  performance.mark("endTask1");

  performance.mark("startTask2");
  await setTimeout(() => { },1000); // Some developer code
  performance.mark("endTask2");

  // Log them out
  const entries = performance.getEntriesByType("mark");
  for (const entry of entries) {
    console.log('mark',entry.toJSON());
  }
}


// console.log('first-paint', performance.getEntriesByName('first-paint'));
// console.log(
//   'first-contentful-paint',
//   performance.getEntriesByName('first-contentful-paint')
// );
// console.log(
//   'time to interactive',
//   performance.timing.loadEventEnd - performance.timing.navigationStart
// );
</script>

<template>
  <p elementtiming='foobar' style="display: none"/>
  <p elementtiming="important-paragraph" style="display: none">This is text I care about.</p>
  <RouterView />
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
