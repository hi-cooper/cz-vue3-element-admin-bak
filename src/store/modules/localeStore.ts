import { defineStore } from 'pinia';
import { ref } from 'vue';
import { store } from '../StoreService';
import LocaleService from '@/locales/LocaleService';

const useStore = defineStore('LocaleStore', () => {
  // state
  const current = ref(LocaleService.getLocale());

  // actions

  return {
    current,
  };
});

const localeStoreHook = useStore(store); // 在useStore()前声明，可解决错误：etActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?

export default useStore();
export { localeStoreHook };
