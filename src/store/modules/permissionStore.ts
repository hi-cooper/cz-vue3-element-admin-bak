import { defineStore } from 'pinia';
import { ref } from 'vue';
import { store } from '../StoreService';
import { RouteRecordRaw } from 'vue-router';
import RouterService from '@/router/RouterService';
import RouterConstant from '@/router/RouterConstant';

const modules = import.meta.glob('../../views/**/**.vue');
const useStore = defineStore('PermissionStore', () => {
  // state
  const menuRoutes = ref<RouteRecordRaw[]>([]);
  const allRoutes = ref<RouteRecordRaw[]>([]);

  function transMenuRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
    const listRoutes: RouteRecordRaw[] = [];

    routes.forEach((route) => {
      const tmpRoute = { ...route };
      if (tmpRoute.component?.toString() == 'DEFAULT_LAYOUT') {
        tmpRoute.component = RouterConstant.DEFAULT_LAYOUT;
      } else {
        const component = modules[`../../views/${tmpRoute.component}.vue`];
        if (component) {
          tmpRoute.component = component;
        } else {
          tmpRoute.component = modules[`../../views/error/404.vue`];
        }
      }

      if (tmpRoute.children) {
        tmpRoute.children = transMenuRoutes(tmpRoute.children);
      }

      listRoutes.push(tmpRoute);
    });

    return listRoutes;
  }

  function buildMenuRoutes(routes: RouteRecordRaw[]) {
    const listRoutes = transMenuRoutes(routes);
    listRoutes.forEach((route) => {
      RouterService.router.addRoute(route);
    });

    menuRoutes.value = listRoutes;
    allRoutes.value = RouterService.router.getRoutes();
  }

  return { allRoutes, menuRoutes, buildMenuRoutes };
});

const permissionStoreHook = useStore(store); // 在useStore()前声明，可解决错误：etActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?

export default useStore();
export { permissionStoreHook };
