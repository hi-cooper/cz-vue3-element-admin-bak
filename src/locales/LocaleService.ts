import { App } from 'vue';
import type { I18nOptions } from 'vue-i18n';

import { createI18n } from 'vue-i18n';
import LocaleHelper from './LocaleHelper';
import { LocaleType } from './LocaleTypes';
import LocalStorageUtil from '@/utils/storage/LocalStorageUtil';

const defaultLocale = LocaleType.zhCN;
const availableLocales = [LocaleType.zhCN, LocaleType.enUS];

/**
 * 获取用户语言设置
 *
 * @returns 如果LocalStorage有保存语言设置，则返回；
 * 否则尝试返回浏览器使用语言设置；
 * 若尝试失败，则返回简体中文
 */
const getLocale = (): LocaleType => {
  const language = LocalStorageUtil.get<LocaleType>('app.locale');
  if (language) {
    return language;
  }

  // 浏览器使用语言
  const browser = navigator.language.toLowerCase();
  const locales = Object.values(LocaleType);
  for (const locale of locales) {
    if (browser.indexOf(locale) > -1) {
      return locale;
    }
  }

  return defaultLocale;
};

const currentLocale = getLocale();
LocaleHelper.setHtmlPageLang(currentLocale);
LocaleHelper.setLoadLocalePool((pool) => {
  pool.push(currentLocale);
});

async function createI18nOptions(): Promise<I18nOptions> {
  const localFile = await import(`./lang/${currentLocale}.ts`);
  const message = localFile.default?.message ?? {};

  return {
    legacy: false,
    locale: currentLocale,
    fallbackLocale: defaultLocale,
    messages: {
      [currentLocale]: message,
    },
    globalInjection: true,
    availableLocales: availableLocales,
    sync: true,
    missingWarn: false,
    silentTranslationWarn: true, // true - warning off
    silentFallbackWarn: true,
  };
}

const i18n = createI18n(await createI18nOptions());
const t = i18n.global.t;

async function setupI18n(app: App) {
  app.use(i18n);
}

function setI18nLanguage(locale: LocaleType) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    (i18n.global.locale as any).value = locale;
  }
  LocalStorageUtil.set('app.locale', locale);
  LocaleHelper.setHtmlPageLang(locale);
}

async function changeLocale(locale: LocaleType): Promise<void> {
  const globalI18n = i18n.global;
  if (globalI18n.availableLocales.includes(locale)) {
    setI18nLanguage(locale);
    return;
  }

  const localFile = await import(`./lang/${locale}.ts`);
  if (!localFile) {
    return;
  }
  const message = localFile.default?.message ?? {};
  globalI18n.setLocaleMessage(locale, message);
  setI18nLanguage(locale);
}

const LocaleService = {
  setupI18n,
  i18n,
  t,
  getLocale,
  changeLocale,
};

export default LocaleService;
