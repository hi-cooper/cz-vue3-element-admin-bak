<template>
  <button @click="testLocalStorageHandler">Test localStorage</button>
  <button @click="testStoreHandler">Test Store</button>
  <button @click="testVueuseStoregeHandler">test Vueuse Storege</button>
  <button @click="logoutHandler">Logout</button>

  <h3>国际化</h3>
  <button @click="changeLocaleHandler('zh-CN')">中文</button>
  <button @click="changeLocaleHandler('en-US')">English</button>
  <ul>
    <li>{{ $t('global.global.copyright') }}</li>
    <li>{{ $t('routes.router.system.userManagement') }}</li>
    <li>{{ $t('routes.router.login') }}</li>
  </ul>

  <div id="idScss">SCSS</div>
  <div class="p-5">unocss</div>

  <IconEpSunny />
  <SvgIcon name="logo" color="#FF0000" />
  <SvgIcon name="menu-dict" color="#FF0000" />
  <SvgIcon name="basic-language" color="#FF0000" />
</template>

<script setup lang="ts">
import LocalStorageUtil from '@/utils/storage/LocalStorageUtil';
import LocaleService from '@/locales/LocaleService';
import { LocaleType } from '@/locales/LocaleTypes';
import testStore from '@/views/testing/store.vue';
import userStore from '@/store/modules/userStore';
import { RoutePathEnum } from '@/router/RoutePathEnum';
import RouterService from '@/router/RouterService';
import IconEpSunny from '~icons/ep/sunny';
import SvgIcon from '@/components/SvgIcon/index.vue';
import { useStorage } from '@vueuse/core';

function testLocalStorageHandler() {
  console.log('\n============================begin test LocalStorage============================');
  LocalStorageUtil.clear();
  LocalStorageUtil.set('test_a', 'TEST_A');
  console.log(LocalStorageUtil.get('test_a'));
  console.log(LocalStorageUtil.get('test_b'));
  console.log(LocalStorageUtil.get('test_b', 'TEST_B'));
  console.log(LocalStorageUtil.get('test_b'));

  interface ICacheSetting {
    keyPrefix: string;
    enableAes: boolean; // enable cache encryption or not
    aesKey: string | null; // AES encryption key
    aesIv: string | null; // AES encryption iv
  }

  const cacheSetting: ICacheSetting = {
    keyPrefix: 'cache_',
    enableAes: true,
    aesKey: '111111',
    aesIv: '@111111',
  };
  const keyCacheSetting = 'KEY_CacheSetting';
  let cacheSettingTmp: ICacheSetting = LocalStorageUtil.get<ICacheSetting>(keyCacheSetting);
  console.log('KEY_CacheSetting', cacheSettingTmp);
  LocalStorageUtil.set(keyCacheSetting, cacheSetting);
  cacheSettingTmp = LocalStorageUtil.get<ICacheSetting>(keyCacheSetting);
  console.log('KEY_CacheSetting', cacheSettingTmp);
  console.log('============================end test LocalStorage============================');
}

function changeLocaleHandler(val: string) {
  switch (val) {
    case 'zh-CN':
      LocaleService.changeLocale(LocaleType.zhCN);
      break;
    case 'en-US':
      LocaleService.changeLocale(LocaleType.enUS);
      break;
  }
}

function testStoreHandler() {
  testStore();
}

function testVueuseStoregeHandler() {
  console.log('\n============================begin test Vueuse Storege============================');
  LocalStorageUtil.clear();
  console.log('key[vueuse_test_a] = ', useStorage('vueuse_test_a', 'vueuse_test_a_value', localStorage).value);
  console.log('============================end test Vueuse Storege============================');
}

function logoutHandler() {
  userStore.updateToken(null);
  RouterService.router.replace(RoutePathEnum.LOGIN);
}
</script>

<style lang="scss" scoped>
#idScss {
  width: 100%;
  height: 50px;
  background-color: $background-color;
  color: $text-color;
}
</style>
