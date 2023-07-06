// /src/locales/lang/en-US.ts

import LocaleHelper from '../LocaleHelper';
import { LocaleType } from '../LocaleTypes';

const modules = import.meta.glob<true, string, Record<string, any>>('./en-US/**/*.ts', { eager: true });
export default {
  message: {
    ...LocaleHelper.buildMessage(modules, LocaleType.enUS),
  },
  locale: null,
  localeName: LocaleType.enUS,
};
