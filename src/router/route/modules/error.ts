import type { IRoute } from '../RouteTypes';

const ROUTE_ERROR_401: IRoute = {
  id: 'RES_ERROR_401',
  path: '/401',
  component: () => import('@/views/error/401.vue'),
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: '401 Unauthorized',
    orderNo: 100000,
  },
};

const ROUTE_ERROR_500: IRoute = {
  id: 'RES_ERROR_500',
  path: '/500',
  component: () => import('@/views/error/500.vue'),
  meta: {
    title: '500 Internal Server Error',
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    orderNo: 100000,
  },
};

export default [ROUTE_ERROR_401, ROUTE_ERROR_500];
