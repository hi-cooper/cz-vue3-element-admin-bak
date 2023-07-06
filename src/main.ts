import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import LocaleService from '@/locales/LocaleService';
import StoreService from '@/store/StoreService';

async function bootstrap() {
  const app = createApp(App);

  await LocaleService.setupI18n(app);
  StoreService.setup(app);

  app.mount('#app');
}

bootstrap();
