// /src/components/ComponetService.ts
// 新建

import type { App } from 'vue';
import ElementPlus from 'element-plus';

const ComponetService = {
  setupGlobalComponent(app: App) {
    app.use(ElementPlus);
  },
};
export default ComponetService;
