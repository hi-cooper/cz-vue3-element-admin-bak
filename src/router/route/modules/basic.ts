import type { IRoute } from '../RouteTypes';

const ROUTE_HOME: IRoute = {
  id: 'RES_ROOT',
  path: '/',
  redirect: '/dashboard',
  meta: {
    title: 'Home',
  },
};

const ROUTE_LOGIN: IRoute = {
  id: 'RES_LOGIN',
  path: '/login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: 'routes.basic.login',
  },
};

export default [ROUTE_HOME, ROUTE_LOGIN];
