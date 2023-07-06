// /src/store/StoreService.ts
// 新建

import type { App } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();

const StoreService = {
  setup(app: App<Element>) {
    app.use(store);
    this._init();
  },

  _init() {
    console.log('Store init');
  },
};

export default StoreService;
export { store };
