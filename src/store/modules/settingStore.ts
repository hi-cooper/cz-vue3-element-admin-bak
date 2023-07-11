import { defineStore } from 'pinia';
import { ref } from 'vue';
import { store } from '../StoreService';
import { useStorage } from '@vueuse/core';
import defaultSetting from '@/settings/DefaultSetting.ts';

const useStore = defineStore('SettingStore', () => {
  // state
  const showSettings = ref<boolean>(defaultSetting.showSettings);
  const tagsView = useStorage<boolean>('tagsView', defaultSetting.tagsView);
  const fixedHeader = ref<boolean>(defaultSetting.fixedHeader);
  const sidebarLogo = ref<boolean>(defaultSetting.sidebarLogo);

  const layout = useStorage<string>('layout', defaultSetting.layout);

  // actions
  function changeSetting(param: { key: string; value: any }) {
    const { key, value } = param;
    switch (key) {
      case 'showSettings':
        showSettings.value = value;
        break;
      case 'fixedHeader':
        fixedHeader.value = value;
        break;
      case 'tagsView':
        tagsView.value = value;
        break;
      case 'sidevarLogo':
        sidebarLogo.value = value;
        break;
      case 'layout':
        layout.value = value;
        break;
      default:
        break;
    }
  }

  return {
    showSettings,
    tagsView,
    fixedHeader,
    sidebarLogo,
    layout,
    changeSetting,
  };
});

const settingStoreHook = useStore(store); // 在useStore()前声明，可解决错误：etActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?

export default useStore();
export { settingStoreHook };
