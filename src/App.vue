<script setup lang="ts">
import Testing from '@/views/testing/index.vue';
</script>

<template>
  <Testing />
  <div>
    <p>
      <RouterLink to="/login">登录 </RouterLink>
      <RouterLink to="/">首页 </RouterLink>
      <RouterLink to="/dashboard">dashboard </RouterLink>
      <RouterLink to="/401">401 </RouterLink>
      <RouterLink to="/500">500 </RouterLink>
    </p>
  </div>
  <RouterView />
</template>

<style scoped></style>
