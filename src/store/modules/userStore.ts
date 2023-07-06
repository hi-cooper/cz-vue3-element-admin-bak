import { defineStore } from 'pinia';
import { ref } from 'vue';
import { store } from '../StoreService';

const useStore = defineStore('UserStore', () => {
  // state
  const openId = ref<string>('user_open_id');
  const nickname = ref<string>('user_nickname');
  const avatar = ref<string>('user_avatoar');
  const token = ref<string | null>(null);

  // actions
  function updateNickname(val: string): void {
    nickname.value = val;
  }

  function updateToken(val: string | null): void {
    token.value = val;
  }

  function isLogin(): boolean {
    return token.value != null;
  }

  return {
    openId,
    nickname,
    avatar,
    updateToken,
    isLogin,
    updateNickname,
  };
});

const userStoreHook = useStore(store); // 在useStore()前声明，可解决错误：etActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?

export default useStore();
export { userStoreHook };
