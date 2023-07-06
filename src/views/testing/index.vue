<template>
  <button @click="testLocalStorageHandler">Test localStorage</button>
</template>

<script setup lang="ts">
import LocalStorageUtil from '@/utils/storage/LocalStorageUtil';

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
</script>
