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
import permissionStore from '@/store/modules/permissionStore';

function loginHander() {
  userStore.updateToken('token_val');
  const ids = getAllowedResourceIds();
  permissionStore.setGrandtedIds(ids);
  RouterService.router.replace(RoutePathEnum.HOME);
}

function getAllowedResourceIds(): string[] {
  return ['RES_TESTING', 'RES_TESTING_TESTA', 'RES_TESTING_TESTB', 'RES_LOGIN', 'RES_DASGBOARD'];
}
</script>
