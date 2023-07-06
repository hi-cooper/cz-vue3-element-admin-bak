<template>
  <div id="header">Header</div>
  <div id="main">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#header {
  width: 100%;
  height: 80px;
  background-color: aqua;
}
#main {
  width: 100%;
  height: max-content;
}
</style>
