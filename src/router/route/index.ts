import type { IRoute } from './RouteTypes';
import { mainOutRoutes } from './mainOut';

const modules = import.meta.glob<Record<string, unknown>>('./modules/**/*.ts', { eager: true });
const routeModuleList: IRoute[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];

export const ROUTE_HOME: IRoute = {
  path: '/',
  name: 'Home',
  redirect: '/dashboard',
  meta: {
    title: 'Home',
  },
};

export const ROUTE_LOGIN: IRoute = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: 'routes.basic.login',
  },
};

// Basic routing without permission
export const baseiRoute = [ROUTE_HOME, ROUTE_LOGIN, ...mainOutRoutes, ...routeModuleList];
