import { createApp } from 'vue';
import 'virtual:uno.css';
import 'virtual:svg-icons-register';
import 'element-plus/theme-chalk/index.css';
import '@/layouts/scss/index.scss';
import App from './App.vue';
import LocaleService from '@/locales/LocaleService';
import StoreService from '@/store/StoreService';
import RouterService from '@/router/RouterService';
import ComponetService from '@/components/ComponetService';

async function bootstrap() {
  const app = createApp(App);

  await LocaleService.setupI18n(app);
  StoreService.setup(app);
  RouterService.setup(app);
  ComponetService.setupGlobalComponent(app);

  app.mount('#app');
}

bootstrap();
