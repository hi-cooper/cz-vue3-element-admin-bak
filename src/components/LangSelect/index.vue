<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue';
import appStore from '@/store/modules/appStore';
import { ElMessage } from 'element-plus';
import LocaleService from '@/locales/LocaleService';
import { LocaleType } from '@/locales/LocaleTypes';

function handleLanguageChange(lang: string) {
  switch (lang) {
    case 'zh-CN':
      LocaleService.changeLocale(LocaleType.zhCN);
      appStore.language = LocaleType.zhCN;
      ElMessage.success('切换语言成功！');
      break;
    case 'en-US':
      LocaleService.changeLocale(LocaleType.enUS);
      appStore.language = LocaleType.enUS;
      ElMessage.success('Switch Language Successful!');
      break;
  }
}
</script>

<template>
  <el-dropdown trigger="click" @command="handleLanguageChange">
    <div>
      <svg-icon name="basic-language" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="appStore.language === LocaleType.zhCN" :command="LocaleType.zhCN"> 中文 </el-dropdown-item>
        <el-dropdown-item :disabled="appStore.language === LocaleType.enUS" :command="LocaleType.enUS"> English </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
