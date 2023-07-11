import { createApp } from 'vue';
import './style.css';
import 'virtual:uno.css';
import 'virtual:uno.css';
import App from './App.vue';
import LocaleService from '@/locales/LocaleService';
import StoreService from '@/store/StoreService';
import RouterService from '@/router/RouterService';

async function bootstrap() {
  const app = createApp(App);

  await LocaleService.setupI18n(app);
  StoreService.setup(app);
  RouterService.setup(app);

  app.mount('#app');
}

bootstrap();
