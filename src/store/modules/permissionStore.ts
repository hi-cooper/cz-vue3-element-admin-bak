import { defineStore } from 'pinia';
import { ref } from 'vue';
import { store } from '../StoreService';
import { allRoutesMap } from '@/router/route';

// const modules = import.meta.glob('../../views/**/**.vue');
const useStore = defineStore('PermissionStore', () => {
  // state
  const grantedIds = ref<string[]>([]);

  function setGrandtedIds(resourceIds: string[]): void {
    resourceIds.forEach((resourceId) => {
      const route = allRoutesMap.get(resourceId);
      if (!route) {
        console.log('Add Grandted Route failed: ', resourceId);
        return;
      }
    });
    // TODO
    grantedIds.value = Array.from(allRoutesMap.keys());
    // grantedIds.value = resourceIds;
  }

  function getGrandtedIds(): string[] {
    return grantedIds.value;
  }

  return { setGrandtedIds, getGrandtedIds };
});

const permissionStoreHook = useStore(store); // 在useStore()前声明，可解决错误：etActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?

export default useStore();
export { permissionStoreHook };
