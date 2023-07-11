import { defineStore } from 'pinia';
import { ref, reactive, computed } from 'vue';
import { store } from '../StoreService';
import { useStorage } from '@vueuse/core';

// Element Plus 语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';

// 侧边栏状态(显示/隐藏)
const SidebarStatusKey = 'sidebarStatus';
export function getSidebarStatus() {
  return localStorage.getItem(SidebarStatusKey);
}

function setSidebarStatus(sidebarStatus: string) {
  localStorage.setItem(SidebarStatusKey, sidebarStatus);
}
const SizeKey = 'size';
function getSize() {
  return localStorage.getItem(SizeKey);
}

function setSize(size: string) {
  localStorage.setItem(SizeKey, size);
}

// 语言
const LanguageKey = 'language';
function getLanguage() {
  return localStorage.getItem(LanguageKey);
}
function setLanguage(language: string) {
  localStorage.setItem(LanguageKey, language);
}

const useStore = defineStore('AppStore', () => {
  // state
  const device = useStorage<string>('device', 'desktop');
  const size = ref(getSize() || 'default');
  const language = ref(getLanguage());
  const sidebar = reactive({
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false,
  });

  const locale = computed(() => {
    if (language?.value == 'en') {
      return en;
    } else {
      return zhCn;
    }
  });

  // actions
  function toggleSidebar(withoutAnimation: boolean) {
    sidebar.opened = !sidebar.opened;
    sidebar.withoutAnimation = withoutAnimation;
    if (sidebar.opened) {
      setSidebarStatus('opened');
    } else {
      setSidebarStatus('closed');
    }
  }

  function closeSideBar(withoutAnimation: boolean) {
    sidebar.opened = false;
    sidebar.withoutAnimation = withoutAnimation;
    setSidebarStatus('closed');
  }

  function openSideBar(withoutAnimation: boolean) {
    sidebar.opened = true;
    sidebar.withoutAnimation = withoutAnimation;
    setSidebarStatus('opened');
  }

  function toggleDevice(val: string) {
    device.value = val;
  }

  function changeSize(val: string) {
    size.value = val;
    setSize(val);
  }

  function changeLanguage(val: string) {
    language.value = val;
    setLanguage(val);
  }

  return {
    device,
    sidebar,
    language,
    locale,
    size,
    toggleDevice,
    changeSize,
    changeLanguage,
    toggleSidebar,
    closeSideBar,
    openSideBar,
  };
});

const appStoreHook = useStore(store); // 在useStore()前声明，可解决错误：etActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?

export default useStore();
export { appStoreHook };
