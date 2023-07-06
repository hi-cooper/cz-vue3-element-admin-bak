// /src/locales/lang/zh-CN.ts

import LocaleHelper from '../LocaleHelper';
import { LocaleType } from '../LocaleTypes';

const modules = import.meta.glob<true, string, Record<string, any>>('./zh-CN/**/*.ts', { eager: true });

export default {
  message: {
    ...LocaleHelper.buildMessage(modules, LocaleType.zhCN),
  },
  locale: null,
  localeName: LocaleType.zhCN,
};
