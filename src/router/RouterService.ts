import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import allRoutes from './route';
import RouterGuard from './guard';
import { RoutePathEnum } from './RoutePathEnum';

// 白名单应该包含基本静态路由
const WHITE_LIST: RoutePathEnum[] = [RoutePathEnum.LOGIN];

const getRouteNames = (array: any[]) =>
  array.forEach((item) => {
    WHITE_LIST.push(item.name);
    getRouteNames(item.children || []);
  });
getRouteNames(allRoutes);

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: allRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

function reset() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_LIST.includes(name as RoutePathEnum)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

function setup(app: App<Element>) {
  app.use(router);
  RouterGuard.setup(router);
}

function isWhiteList(path: RoutePathEnum): boolean {
  return WHITE_LIST.includes(path);
}

const RouterService = {
  router,
  setup,
  reset,
  isWhiteList,
};

// console.log('router=', RouterService.router.getRoutes());
export default RouterService;
