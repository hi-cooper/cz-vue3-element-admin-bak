import type { IRoute } from './RouteTypes';

const ROUTE_ERROR_401: IRoute = {
  path: '/401',
  name: '401 Unauthorized',
  component: () => import('@/views/error/401.vue'),
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: '401 Unauthorized',
    orderNo: 100000,
  },
};

const ROUTE_ERROR_500: IRoute = {
  path: '/500',
  name: '500 Internal Server Error',
  component: () => import('@/views/error/500.vue'),
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: '500 Internal Server Error',
    orderNo: 100000,
  },
};

export { ROUTE_ERROR_401, ROUTE_ERROR_500 };
