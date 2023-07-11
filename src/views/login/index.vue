<template>
  <form method="get" @submit.prevent="loginHander">
    <label for="username">用户名</label>
    <input type="text" name="username" value="admin" /><br />
    <label for="password">密码</label>
    <input type="password" name="password" value="admin" /><br />
    <button type="submit">登录</button>
  </form>
</template>

<script setup lang="ts">
import userStore from '@/store/modules/userStore';
import RouterService from '@/router/RouterService';
import { RoutePathEnum } from '@/router/RoutePathEnum';
import permissionStore from '@/store/modules/permissionStore';
import { RouteRecordRaw } from 'vue-router';

function loginHander() {
  userStore.updateToken('token_val');
  const routes = getMenus();
  permissionStore.buildMenuRoutes(routes);
  RouterService.router.replace(RoutePathEnum.HOME);
}

function getMenus(): RouteRecordRaw[] {
  return [
    {
      path: '/testing',
      component: 'DEFAULT_LAYOUT',
      redirect: '/testing/testA',
      meta: {
        title: '系统管理',
        icon: 'menu-dict',
        hidden: false,
        alwaysShow: true,
        roles: ['ADMIN'],
        keepAlive: true,
      },
      children: [
        {
          path: 'testA',
          component: 'testing/testA',
          name: 'user',
          meta: {
            title: 'testA',
            icon: 'menu-dict',
            hidden: false,
            alwaysShow: false,
            roles: ['ADMIN'],
            keepAlive: true,
          },
        },
        {
          path: 'testB',
          component: 'testing/testB',
          name: 'role',
          meta: {
            title: 'testB',
            icon: 'menu-dict',
            hidden: false,
            alwaysShow: false,
            roles: ['ADMIN'],
            keepAlive: true,
          },
        },
        {
          path: 'cmenu',
          component: 'testing/testB',
          name: 'cmenu',
          meta: {
            title: '菜单管理',
            icon: 'menu-dict',
            hidden: false,
            alwaysShow: false,
            roles: ['ADMIN'],
            keepAlive: true,
          },
        },
        {
          path: 'dept',
          component: 'testing/testB',
          name: 'dept',
          meta: {
            title: '部门管理',
            icon: 'menu-dict',
            hidden: false,
            alwaysShow: false,
            roles: ['ADMIN'],
            keepAlive: true,
          },
        },
        {
          path: 'dict',
          component: 'testing/testB',
          name: 'dict',
          meta: {
            title: '字典管理',
            icon: 'menu-dict',
            hidden: false,
            alwaysShow: false,
            roles: ['ADMIN'],
            keepAlive: true,
          },
        },
        {
          path: 'dict',
          component: 'testing/testB',
          name: 'dictxx',
          meta: {
            title: '字典管理xxx123',
            icon: 'menu-dict',
            hidden: false,
            alwaysShow: false,
            roles: ['ADMIN'],
            keepAlive: true,
          },
        },
      ],
    },
    {
      path: '/api',
      component: 'Layout',
      meta: {
        title: '接口',
        icon: 'menu-dict',
        hidden: false,
        alwaysShow: true,
        roles: ['ADMIN'],
        keepAlive: true,
      },
      children: [
        {
          path: 'apidoc',
          component: 'demo/apidoc',
          name: 'apidoc',
          meta: {
            title: '接口文档',
            icon: 'menu-dict',
            hidden: false,
            alwaysShow: false,
            roles: ['ADMIN'],
            keepAlive: true,
          },
        },
      ],
    },
    {
      path: '/external-link',
      component: 'Layout',
      redirect: 'noredirect',
      meta: {
        title: '外部链接',
        icon: 'menu-dict',
        hidden: false,
        alwaysShow: true,
        roles: ['ADMIN'],
        keepAlive: true,
      },
      children: [
        {
          path: 'https://www.cnblogs.com/haoxianrui/p/16090029.html',
          meta: {
            title: 'document',
            icon: 'menu-dict',
            hidden: false,
            alwaysShow: false,
            roles: ['ADMIN'],
            keepAlive: true,
          },
        },
      ],
    },
    {
      path: '/multi-level-menu',
      component: 'Layout',
      redirect: '/nested/level1/level2',
      meta: {
        title: '多级菜单',
        icon: 'menu-dict',
        hidden: false,
        alwaysShow: true,
        roles: ['ADMIN'],
        keepAlive: true,
      },
      children: [
        {
          path: 'nested_level1_index',
          component: 'nested/level1/index',
          redirect: '/nested/level1/level2',
          meta: {
            title: '菜单一级',
            icon: 'menu-dict',
            hidden: false,
            alwaysShow: true,
            roles: ['ADMIN'],
            keepAlive: true,
          },
          children: [
            {
              path: 'nested_level1_level2_index',
              component: 'nested/level1/level2/index',
              redirect: '/nested/level1/level2/level3',
              meta: {
                title: '菜单二级',
                icon: 'menu-dict',
                hidden: false,
                alwaysShow: true,
                roles: ['ADMIN'],
                keepAlive: true,
              },
              children: [
                {
                  path: 'nested_level1_level2_level3_index1',
                  component: 'nested/level1/level2/level3/index1',
                  name: 'nested_level1_level2_level3_index1',
                  meta: {
                    title: '菜单三级-1',
                    icon: 'menu-dict',
                    hidden: false,
                    alwaysShow: false,
                    roles: ['ADMIN'],
                    keepAlive: true,
                  },
                },
                {
                  path: 'nested_level1_level2_level3_index2',
                  component: 'nested/level1/level2/level3/index2',
                  name: 'nested_level1_level2_level3_index2',
                  meta: {
                    title: '菜单三级-2',
                    icon: 'menu-dict',
                    hidden: false,
                    alwaysShow: false,
                    roles: ['ADMIN'],
                    keepAlive: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '/demo',
      component: 'Layout',
      meta: {
        title: '组件封装',
        icon: 'menu-dict',
        hidden: false,
        alwaysShow: true,
        roles: ['ADMIN'],
        keepAlive: true,
      },
      children: [
        {
          path: 'editor',
          component: 'demo/editor',
          name: 'editor',
          meta: {
            title: '富文本编辑器',
            icon: 'menu-dict',
            hidden: false,
            alwaysShow: false,
            roles: ['ADMIN'],
            keepAlive: true,
          },
        },
        {
          path: 'uploader',
          component: 'demo/uploader',
          name: 'uploader',
          meta: {
            title: '上传组件',
            icon: 'menu-dict',
            hidden: false,
            alwaysShow: false,
            roles: ['ADMIN'],
            keepAlive: true,
          },
        },
        {
          path: 'icon-selector',
          component: 'demo/icon-selector',
          name: 'icon-selector',
          meta: {
            title: '图标选择器',
            icon: 'menu-dict',
            hidden: false,
            alwaysShow: false,
            roles: ['ADMIN'],
            keepAlive: true,
          },
        },
      ],
    },
  ];
}
</script>
