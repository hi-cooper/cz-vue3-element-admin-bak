import RouterConstant from '@/router/RouterConstant';
import type { IMenuRoute } from '@/router/route/RouteTypes';

const sidebarMenu: IMenuRoute[] = [
  {
    id: 'RES_DASGBOARD',
    name: 'RES_DASGBOARD',
    path: '/dashboard',
    component: RouterConstant.DEFAULT_LAYOUT,
    redirect: '/dashboard/home',
    meta: {
      title: '首页 (301)',
      icon: 'ion:grid-outline',
      closeable: false,
      keepAlive: true,
      // visiable: false,
    },
    children: [
      {
        id: 'RES_DASGBOARD_HOME',
        name: 'RES_DASGBOARD_HOME',
        path: 'home',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '首页 (301)',
          icon: 'ion:grid-outline',
          closeable: false,
          keepAlive: true,
          affix: true,
        },
      },
    ],
  },
  {
    id: 'RES_TESTING',
    name: 'RES_TESTING',
    path: '/testing',
    component: RouterConstant.DEFAULT_LAYOUT,
    redirect: '/testing/testA',
    meta: {
      title: '示例',
      icon: 'menu-dict',
      closeable: true,
      keepAlive: true,
    },
    children: [
      {
        id: 'RES_TESTING_TESTA',
        name: 'RES_TESTING_TESTA',
        path: 'testA',
        component: () => import('@/views/testing/test.vue'),
        meta: {
          title: '菜单A',
          icon: 'menu-dict',
          closeable: true,
          keepAlive: true,
        },
        props: {
          message: '菜单A',
        },
      },
      {
        id: 'RES_TESTING_TESTB',
        name: 'RES_TESTING_TESTB',
        path: 'testB',
        component: () => import('@/views/testing/test.vue'),
        meta: {
          title: '菜单B',
          icon: 'menu-dict',
          closeable: true,
          keepAlive: true,
        },
        props: {
          message: '菜单B',
        },
      },
      {
        id: 'RES_TESTING_TESTC',
        name: 'RES_TESTING_TESTC',
        path: 'testC',
        component: () => import('@/views/testing/test.vue'),
        meta: {
          title: '菜单C',
          icon: 'menu-dict',
          closeable: true,
          keepAlive: true,
        },
        props: {
          message: '菜单C',
        },
      },
      {
        id: 'RES_TESTING_TESTD',
        name: 'RES_TESTING_TESTD',
        path: 'testD',
        component: () => import('@/views/testing/test.vue'),
        meta: {
          title: '菜单D',
          icon: 'menu-dict',
          closeable: true,
          keepAlive: true,
        },
        props: {
          message: '菜单D',
        },
      },
      {
        id: 'RES_TESTING_TESTE',
        name: 'RES_TESTING_TESTE',
        path: 'testE',
        component: () => import('@/views/testing/test.vue'),
        meta: {
          title: '菜单E',
          icon: 'menu-dict',
          closeable: true,
          keepAlive: true,
        },
        props: {
          message: '菜单E',
        },
      },
      {
        id: 'RES_TESTING_TESTF',
        name: 'RES_TESTING_TESTF',
        path: 'testF',
        component: () => import('@/views/testing/test.vue'),
        meta: {
          title: '菜单F',
          icon: 'menu-dict',
          closeable: true,
          keepAlive: true,
        },
        props: {
          message: '菜单F',
        },
      },
    ],
  },
  {
    id: 'RES_EXTERNALLINK1ss',
    name: 'RES_EXTERNALLINK1ss',
    // path: 'https://www.bing.com', // ERROR: Route paths should start with a "/"
    path: '/bing1',
    component: RouterConstant.DEFAULT_LAYOUT, // REQUIRED
    beforeEnter(to, from, next) {
      window.open('https://www.bing.com', '_blank');
    },
    meta: {
      title: '外链1',
      icon: 'menu-dict',
      closeable: true,
      keepAlive: true,
    },
  },
  {
    id: 'RES_EXTERNALLINK1ss',
    name: 'RES_EXTERNALLINK1ss',
    // path: 'https://www.bing.com', // ERROR: Route paths should start with a "/"
    path: '/bing2',
    component: RouterConstant.DEFAULT_LAYOUT, // REQUIRED
    beforeEnter(to, from, next) {
      window.location.href = 'https://www.bing.com';
    },
    meta: {
      title: '外链2',
      icon: 'menu-dict',
      closeable: true,
      keepAlive: true,
    },
  },
  {
    id: 'RES_EXTERNALLINK',
    name: 'RES_EXTERNALLINK',
    path: '/externallink',
    meta: {
      title: '外链3',
      icon: 'menu-dict',
      closeable: true,
      keepAlive: true,
    },
    children: [
      {
        id: 'RES_EXTERNALLINK_BING_1',
        name: 'RES_EXTERNALLINK_BING_1',
        path: 'https://www.bing.com',
        meta: {
          title: '外链3_1',
          icon: 'menu-dict',
          closeable: true,
          keepAlive: true,
        },
      },
      {
        id: 'RES_EXTERNALLINK_BING_3',
        name: 'RES_EXTERNALLINK_BING_3',
        path: '/openInCurrentTag',
        component: RouterConstant.DEFAULT_LAYOUT, // REQUIRED
        beforeEnter(to, from, next) {
          window.location.href = 'https://www.bing.com';
          // window.location.replace('https://www.bing.com');
        },
        meta: {
          title: '外链3_2',
          icon: 'menu-dict',
          closeable: true,
          keepAlive: true,
        },
      },
      {
        id: 'RES_EXTERNALLINK_BING_4',
        name: 'RES_EXTERNALLINK_BING_4',
        path: '/openInNewTag',
        component: RouterConstant.DEFAULT_LAYOUT, // REQUIRED
        beforeEnter(to, from, next) {
          window.open('https://www.bing.com', '_blank');
        },
        meta: {
          title: '外链3_3',
          icon: 'menu-dict',
          closeable: true,
          keepAlive: true,
        },
      },
    ],
  },
  {
    id: 'RES_MULTILEVELMENU',
    name: 'RES_MULTILEVELMENU',
    path: '/multi-level-menu',
    component: RouterConstant.DEFAULT_LAYOUT,
    meta: {
      title: '多级菜单',
      icon: 'menu-dict',
      closeable: true,
      keepAlive: true,
    },
    children: [
      {
        id: 'RES_MULTILEVELMENU_1',
        name: 'RES_MULTILEVELMENU_1',
        path: 'level1_1',
        component: () => import('@/views/testing/test.vue'),
        meta: {
          title: '一级菜单1',
          icon: 'menu-dict',
          closeable: true,
          keepAlive: true,
        },
        props: {
          message: '一级菜单1',
        },
      },
      {
        id: 'RES_MULTILEVELMENU_2',
        name: 'RES_MULTILEVELMENU_2',
        path: 'level1_2',
        meta: {
          title: '一级菜单2',
          icon: 'menu-dict',
          closeable: true,
          keepAlive: true,
        },
        children: [
          {
            id: 'RES_MULTILEVELMENU_1_1',
            name: 'RES_MULTILEVELMENU_1_1',
            path: 'level2',
            meta: {
              title: '二级菜单',
              icon: 'menu-dict',
              closeable: true,
              keepAlive: true,
            },
            children: [
              {
                id: 'RES_MULTILEVELMENU_1_1_1',
                name: 'RES_MULTILEVELMENU_1_1_1',
                path: 'level3_1',
                component: () => import('@/views/testing/test.vue'),
                meta: {
                  title: '三级菜单-1',
                  icon: 'menu-dict',
                  closeable: true,
                  keepAlive: true,
                },
                props: {
                  message: '三级菜单-1',
                },
              },
              {
                id: 'RES_MULTILEVELMENU_1_1_2',
                name: 'RES_MULTILEVELMENU_1_1_2',
                path: 'level3_2',
                component: () => import('@/views/testing/test.vue'),
                meta: {
                  title: '三级菜单-2',
                  icon: 'menu-dict',
                  closeable: true,
                  keepAlive: true,
                },
                props: {
                  message: '三级菜单-2',
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
export default sidebarMenu;
