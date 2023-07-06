import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import LocaleService from '@/locales/LocaleService';

async function bootstrap() {
  const app = createApp(App);

  await LocaleService.setupI18n(app);

  app.mount('#app');
}

bootstrap();
