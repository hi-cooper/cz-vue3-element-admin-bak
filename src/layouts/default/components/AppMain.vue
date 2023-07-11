<script setup lang="ts">
import tagsViewStore from '@/store/modules/tagViewStore';
</script>

<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <!-- <transition name="router-fade" mode="out-in"> -->
      <!--添加mode，页面不显示，why?-->
      <transition name="router-fade">
        <keep-alive :include="tagsViewStore.cachedViews">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<style lang="scss" scoped>
.app-main {
  position: relative;
  width: 100%;

  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  overflow: hidden;
  background-color: var(--el-bg-color-page);
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    min-height: 100vh;
    padding-top: 84px;
  }
}
</style>
