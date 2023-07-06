import type { IRoute } from '../RouteTypes';

import RouterConstant from '../../RouterConstant';

const dashboard: IRoute = {
  path: '/dashboard',
  name: 'Dashboard',
  component: RouterConstant.DEFAULT_LAYOUT,
  redirect: '/dashboard/home',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: 'Dashboard',
  },
  children: [
    {
      path: 'home',
      name: 'home',
      component: () => import('@/views/dashboard/index.vue'),
      meta: {
        // affix: true,
        title: 'Dashboarddddd',
      },
    },
  ],
};

export default dashboard;
