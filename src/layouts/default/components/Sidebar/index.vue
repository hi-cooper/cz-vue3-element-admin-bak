<script setup lang="ts">
import { useRoute } from 'vue-router';
import SidebarItem from './SidebarItem.vue';
import Logo from './Logo.vue';

import settingStore from '@/store/modules/settingStore';
import appStore from '@/store/modules/appStore';
import { storeToRefs } from 'pinia';
import variables from '@/layouts/scss/variables.module.scss';
import permissionStore from '@/store/modules/permissionStore';

const currRoute = useRoute();
const { sidebarLogo } = storeToRefs(settingStore);
</script>

<template>
  <div :class="{ 'has-logo': sidebarLogo }">
    <logo v-if="sidebarLogo" :collapse="!appStore.sidebar.opened" />
    <el-scrollbar>
      <el-menu
        :default-active="currRoute.path"
        :collapse="!appStore.sidebar.opened"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permissionStore.menuRoutes" :key="route.path" :item="route" :base-path="route.path" :is-collapse="!appStore.sidebar.opened" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
