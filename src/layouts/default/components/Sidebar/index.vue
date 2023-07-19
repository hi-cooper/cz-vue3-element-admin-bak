<script setup lang="ts">
import { useRoute } from 'vue-router';
import SidebarItem from './SidebarItem.vue';
import Logo from './Logo.vue';

import settingStore from '@/store/modules/settingStore';
import appStore from '@/store/modules/appStore';
import { storeToRefs } from 'pinia';
import variables from '@/layouts/scss/variables.module.scss';
import { allMenuRoutes } from '@/router/route';

const currRoute = useRoute();
const { sidebarLogo } = storeToRefs(settingStore);
</script>

<template>
  <div :class="{ 'has-logo': sidebarLogo }">
    <Logo v-if="sidebarLogo" :collapse="!appStore.sidebar.opened" />
    <ElScrollbar>
      <ElMenu
        :default-active="currRoute.path"
        :collapse="!appStore.sidebar.opened"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <SidebarItem v-for="route in allMenuRoutes" :key="route.path" :item="route" :base-path="route.path" :is-collapse="!appStore.sidebar.opened" />
      </ElMenu>
    </ElScrollbar>
  </div>
</template>
