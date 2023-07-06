<template>
  <form method="get" @submit.prevent="loginHander">
    <label for="username">用户名</label>
    <input type="text" name="username" value="admin" /><br />
    <label for="password">密码</label>
    <input type="password" name="password" value="admin" /><br />
    <button type="submit">登录</button>
  </form>
</template>

<script setup lang="ts">
import userStore from '@/store/modules/userStore';
import RouterService from '@/router/RouterService';
import { RoutePathEnum } from '@/router/RoutePathEnum';

function loginHander() {
  userStore.updateToken('token_val');
  RouterService.router.replace(RoutePathEnum.HOME);
}
</script>
