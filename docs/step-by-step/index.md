# Step-by-Step搭建项目
vite3 + vue3 + element-plus + echarts

# 1 环境搭建

见[VSCode前端开发环境搭建](./VSCode前端开发环境搭建.md)

# 2 项目初始化

```powershell
# npm 7+
# vue3-element-plus-admin为项目名称
npm create vite@latest cz-vue3-element-admin -- --template vue-ts
cd cz-vue3-element-admin
git init --initial-branch=main
git remote add origin git@github.com:hi-cooper/cz-vue3-element-admin.git
git pull origin main:main
git checkout -b step-by-step
npm install
```

![](https://czmdi.cooperzhu.com/technology/vue/vite3%2Bvue3%2Belement-plus%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BAStep-by-Step/2_1.png)

# 3 代码规范ESLint + Prettier

## 3.1 ESLint

### 3.1.1 安装

``` powershell
# eslint
npm install eslint --save-dev
npm init @eslint/config
```
![](https://czmdi.cooperzhu.com/technology/vue/vite3%2Bvue3%2Belement-plus%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BAStep-by-Step/3-1-1_1.png)

最终eslint配置
![](https://czmdi.cooperzhu.com/technology//vue/vite3%2Bvue3%2Belement-plus%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BAStep-by-Step/3-1-1_2.png)

### 3.1.2 配置

- 修改eslint配置文件

```typescript
// /.eslintrc.cjs
// 全部替换

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    // 添加下面这行会与prettier产生冲突
    //'plugin:prettier/recommended', // prettier必须为最后一行，才能进行覆盖
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // 关闭any类型警告
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
```

- 新建eslint忽略文件

```ini
# /.eslintignore

node_modules
/public
/docs
/src/assets
/dist
/bin
/build
.idea
.vscode
*.sh
*.md
*.woff
*.ttf
.husky
.local
/**/*.d.ts
```

- 修改package.json

```json
// 添加
{
  "scripts": {
    "lint": "eslint --fix src/**/*.{ts,js,cjs,vue}",
  },
}
```

## 3.2 prettier

### 3.2.1 安装

``` powershell
# prettier
npm install prettier eslint-plugin-prettier eslint-config-prettier --save-dev

# lint-staged
# npm install lint-staged
```

### 3.2.2 配置

- 新建prettier配置文件

```json
// /.prettierrc.cjs

/**
 * 格式化配置
 */
module.exports = {
  useTabs: false, // 是否使用tab
  tabWidth: 2, // 每个tab的空格数
  semi: true, // 语句末尾是否添加分号
  singleQuote: true, // 是否使用单引号
  endOfLine: 'lf', // 换行符样式：\n(lf)|\r\n(crlf)|\r(cr)：<auto|lf|crlf|cr>
  printWidth: 180, // 每行最大字符数
  proseWrap: 'never', // 换行。<always|never|preserve>
  quoteProps: 'as-needed', //// 更改引用对象属性的时间。可选值"<as-needed|consistent|preserve>"
  trailingComma: 'all', // 多行时添加尾随逗号规则：<none|es5|all>，默认none
  bracketSpacing: true, // 是否在对象文字中的括号之间添加空格
  arrowParens: 'always', // 箭头函数参数周围是否包括括号：always: (x) => x \ avoid: x => x
  rangeStart: 0, // 格式化字符偏移量（包括和不包括）
  rangeEnd: Infinity, // 格式化字符偏移量（包括和不包括）
  requirePragma: false, // 指定要使用的解析器，不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  htmlWhitespaceSensitivity: 'css', // 指定HTML文件的全局空格敏感度 <css|strict|ignore>
  vueIndentScriptAndStyle: false, // Vue文件脚本和样式标签缩进
};
```

- 新建prettier忽略文件

```ini
# /.prettierignore

node_modules
/public
/docs
/src/assets
/dist
/bin
/build
.idea
.vscode
*.sh
*.md
*.woff
*.ttf
.husky
.local
/**/*.d.ts
```

- 修改package.json

```json
// 添加
{
  "scripts": {
    "prettier": "prettier --write ."
  },
}
```

# 4 路由别名配置

npm install @types/node --save-dev

## 4.1 安装

```shell
npm install @types/node --save-dev
```

## 4.2 配置

- 修改 vite.config.ts

```typescript
// vite.config.ts
// 添加

import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
        }
    }
})
```

- 修改`tsconfig.json`

```json
// tsconfig.json
// 添加

{
  "compilerOptions": {
    "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
    "paths": { //路径映射，相对于baseUrl
      "@/*": ["src/*"] 
    },
    "allowSyntheticDefaultImports": true // 允许默认导入
  }
}
```

## 4.3 示例

```typescript
// App.vue
import HelloWorld from '/src/components/HelloWorld.vue'
                        ↓
import HelloWorld from '@/components/HelloWorld.vue'
```

# 5 环境变量

> see：https://cn.vitejs.dev/guide/env-and-mode.html

## 5.1 配置

- 开发环境：`/.env.development`

```properties
# /.env.development
# 新建
  
## 开发环境
NODE_ENV='development'

VITE_APP_TITLE = 'cz-vue3-element-plus-admin'
VITE_APP_PORT = 3000
VITE_APP_BASE_API = '/dev-api'
```

- 生产环境：`/.env.production`

```properties
# /.env.production
# 新建

## 生产环境
NODE_ENV='production'

VITE_APP_TITLE = 'cz-vue3-element-plus-admin'
VITE_APP_PORT = 3000
VITE_APP_BASE_API = '/prod-api'
```

- 测试环境：`/.env.test`

```properties
# /.env.test
# 新建

## 生产环境
NODE_ENV='test'

VITE_APP_TITLE = 'cz-vue3-element-plus-admin'
VITE_APP_PORT = 3000
VITE_APP_BASE_API = '/test-api'
```

## 5.2 IDE自动提示

```typescript
// /src/vite-env.d.ts
// 添加

// 环境变量类型
interface ImportMetaEnv {
  VITE_APP_TITLE: string,
  VITE_APP_PORT: string,
  VITE_APP_BASE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

## 5.3 示例

![](https://czmdi.cooperzhu.com/technology//vue/vite3%2Bvue3%2Belement-plus%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BAStep-by-Step/5-3_1.png)

# 6 本地存储工具类LocalStorageUtil/SessionStorageUtil

## 6.1 封装

- LocalStorageUtil

```typescript
// /src/utils/storage/LocalStorageUtil.ts

/**
 * 采用window.localStorage
 */
const LocalStorageUtil = {
  /**
   * 设置指定key的缓存。<br />
   * 通过JSON.stringify()转换成string后再存储
   *
   * @param key key
   * @param value value
   */
  set<T>(key: string, value: T): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * 获取指定key的缓存。
   *
   * @param key key
   * @param defaultValue 默认值
   * @returns null - 未取到数据<br />
   * JSON - 取到的JSON的值
   */
  get<T>(key: string, defaultValue?: T): T {
    const value: any = window.localStorage.getItem(key);
    if (defaultValue && value == null) {
      this.set(key, defaultValue);
      return defaultValue;
    }
    return JSON.parse(value) as T;
  },

  /**
   * 移除指定key的缓存
   *
   * @param key key
   */
  remove(key: string): void {
    window.localStorage.removeItem(key);
  },

  /**
   * 移除全部缓存
   */
  clear(): void {
    window.localStorage.clear();
  },

  /**
   * 获取所有key
   *
   * @returns
   */
  getAllKeys(): string[] {
    return Object.keys(window.localStorage);
  },
};

export default LocalStorageUtil;
```

- SessionStorageUtil

```typescript
// /src/utils/storage/SessionStorageUtil.ts

/**
 * 采用window.sessionStorage
 */
const SessionStorageUtil = {
  /**
   * 设置指定key的缓存。<br />
   * 通过JSON.stringify()转换成string后再存储
   *
   * @param key key
   * @param value value
   */
  set<T>(key: string, value: T) : void {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * 获取指定key的缓存。
   *
   * @param key key
   * @param defaultValue 默认值
   * @returns null - 未取到数据<br />
   * JSON - 取到的JSON的值
   */
  get<T>(key: string, defaultValue?: T): T {
    const value: any = window.sessionStorage.getItem(key);
    if (defaultValue && value == null) {
      this.set(key, defaultValue);
      return defaultValue;
    }
    return JSON.parse(value) as T;
  },

  /**
   * 移除指定key的缓存
   *
   * @param key key
   */
  remove(key: string): void {
    window.sessionStorage.removeItem(key);
  },

  /**
   * 移除全部缓存
   */
  clear(): void {
    window.sessionStorage.clear();
  },

  /**
   * 获取所有key
   *
   * @returns
   */
  getAllKeys(): string[] {
    return Object.keys(window.sessionStorage);
  },
};

export default SessionStorageUtil;
```

## 6.2 示例

### 6.2.1 新建测试页

```vue
<template>
  <button @click="testLocalStorageHandler">Test localStorage</button>
</template>

<script setup lang="ts">
import LocalStorageUtil from '@/utils/storage/LocalStorageUtil';

function testLocalStorageHandler() {
  console.log('\n============================begin test LocalStorage============================');
  LocalStorageUtil.clear();
  LocalStorageUtil.set('test_a', 'TEST_A');
  console.log(LocalStorageUtil.get('test_a'));
  console.log(LocalStorageUtil.get('test_b'));
  console.log(LocalStorageUtil.get('test_b', 'TEST_B'));
  console.log(LocalStorageUtil.get('test_b'));

  interface ICacheSetting {
    keyPrefix: string;
    enableAes: boolean; // enable cache encryption or not
    aesKey: string | null; // AES encryption key
    aesIv: string | null; // AES encryption iv
  }

  const cacheSetting: ICacheSetting = {
    keyPrefix: 'cache_',
    enableAes: true,
    aesKey: '111111',
    aesIv: '@111111',
  };
  const keyCacheSetting = 'KEY_CacheSetting';
  let cacheSettingTmp: ICacheSetting = LocalStorageUtil.get<ICacheSetting>(keyCacheSetting);
  console.log('KEY_CacheSetting', cacheSettingTmp);
  LocalStorageUtil.set(keyCacheSetting, cacheSetting);
  cacheSettingTmp = LocalStorageUtil.get<ICacheSetting>(keyCacheSetting);
  console.log('KEY_CacheSetting', cacheSettingTmp);
  console.log('============================end test LocalStorage============================');
}
</script>
```

### 6.2.2 引入测试页

同时删除示例中的`/src/components/HelloWorld.vue`等无关组件

```vue
// /src/App.vue
// 完全替换（删除无关内容）

<script setup lang="ts">
import Testing from '@/views/testing/index.vue';
</script>

<template>
  <Testing />
</template>

<style scoped></style>
```

### 6.2.3 运行结果

![](https://czmdi.cooperzhu.com/technology//vue/vite3%2Bvue3%2Belement-plus%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BAStep-by-Step/6-2_1.png)

# 7 国际化i18n

> see: https://kazupon.github.io/vue-i18n/zh/introduction.html

## 7.1 安装

```shell
npm install vue-i18n
npm install lodash-es
npm install @types/lodash-es
```

## 7.2 配置

- vite.config.ts

```typescript
// vite.config.ts
// 添加

export default defineConfig({
  resolve: {
    alias: {
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
});
```

- 支持的语言类型`LocaleTypes.ts`

```typescript
// /src/locales/LocaleTypes.ts

export enum LocaleType {
  zhCN = 'zh-CN',
  enUS = 'en-US',
}
```

- 语言工具类`LocaleHelper.ts`

```typescript
// /src/locales/LocaleHelper.ts

import { set } from 'lodash-es';
import { LocaleType } from './LocaleTypes';

declare type Recordable<T = any> = Record<string, T>;
const loadLocalePool: LocaleType[] = [];

function setHtmlPageLang(locale: LocaleType) {
  document.querySelector('html')?.setAttribute('lang', locale);
}

function setLoadLocalePool(cb: (loadLocalePool: LocaleType[]) => void) {
  cb(loadLocalePool);
}

function buildMessage(langs: Record<string, Record<string, any>>, prefix = 'lang') {
  const obj: Recordable = {};

  Object.keys(langs).forEach((key) => {
    const langFileModule = langs[key].default;
    let fileName = key.replace(`./${prefix}/`, '').replace(/^\.\//, '');
    const lastIndex = fileName.lastIndexOf('.');
    fileName = fileName.substring(0, lastIndex);
    const keyList = fileName.split('/');
    const moduleName = keyList.shift();
    const objKey = keyList.join('.');

    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {});
        set(obj[moduleName], objKey, langFileModule);
      } else {
        set(obj, moduleName, langFileModule || {});
      }
    }
  });
  return obj;
}

const LocaleHelper = {
  setHtmlPageLang,
  setLoadLocalePool,
  buildMessage,
};

export default LocaleHelper;
```

- LocaleService

```typescript
// /src/locales/LocaleService.ts

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
```

**如果`import { createI18n } from 'vue-i18n';`报错，请将`tsconfig.json`中的`moduleResolution`值由`bundler`改成`Node`**

![](https://czmdi.cooperzhu.com/technology/vue/vite3%2Bvue3%2Belement-plus%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BAStep-by-Step/7-2_1.png)

![](https://czmdi.cooperzhu.com/technology/vue/vite3%2Bvue3%2Belement-plus%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BAStep-by-Step/7-2_2.png)

- 全局注册

```typescript
// /src/main.ts
// 添加

import LocaleService from '@/locales/LocaleService';

async function bootstrap() {
  const app = createApp(App);

  await LocaleService.setupI18n(app);

  app.mount('#app');
}

bootstrap();
```

## 7.3 使用步骤

![](https://czmdi.cooperzhu.com/technology/vue/vite3%2Bvue3%2Belement-plus%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BAStep-by-Step/7-3_1.png)

## 7.4 示例

### 7.4.1 英语

#### 7.4.1.1 添加支持的语言类型`en-US`

```typescript
// /src/locales/LocaleTypes.ts

export enum LocaleType {
  zhCN = 'zh-CN',
  enUS = 'en-US',
}
```

#### 7.4.1.2 国际化解析文件`en-US.ts`

```typescript
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
```

#### 7.4.1.3 不带子目录国际化文件示例

```typescript
// /src/locales/lang/en-US/global.ts

export default {
  // 全局
  global: {
    appName: 'cz-vue3-element-plus-admin',
    versionTitle: 'version',
    copyright: 'Shenzhen XXX Ltd.',
  },
};
```

#### 7.4.1.4 带子目录路径的国际化文件示例

```typescript
// /src/locales/lang/en-US/routes/router.ts

export default {
  system: {
    userManagement: 'User Management',
  },
  login: 'Login',
  errorLog: 'Error Log',
};
```

### 7.4.2 中文

#### 7.4.2.1 添加支持的语言类型`zh-CN`

```typescript
// /src/locales/LocaleTypes.ts

export enum LocaleType {
  zhCN = 'zh-CN',
  enUS = 'en-US',
}
```

#### 7.4.2.2 国际化解析文件`zh-CN.ts`

```typescript
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
```

#### 7.4.2.3 不带子目录国际化文件示例

```typescript
// /src/locales/lang/zh-CN/global.ts

export default {
  // 全局
  global: {
    appName: 'cz-vue3-element-plus-admin',
    versionTitle: '版本',
    copyright: '深圳 XXX 有限公司',
  },
};
```

#### 7.4.2.4 带子目录路径的国际化文件示例

```typescript
// /src/locales/lang/zh-CN/routes/router.ts

export default {
  system: {
    userManagement: '用户管理',
  },
  login: '登录',
  errorLog: '错误日志',
};
```

### 7.4.3 调用示例

```vue
// /src/views/testing/index.vue
// 添加

<template>
  <h3>国际化</h3>
  <button @click="changeLocaleHandler('zh-CN')">中文</button>
  <button @click="changeLocaleHandler('en-US')">English</button>
  <ul>
    <li>{{ $t('global.global.copyright') }}</li>
    <li>{{ $t('routes.router.system.userManagement') }}</li>
    <li>{{ $t('routes.router.login') }}</li>
  </ul>
</template>

<script setup lang="ts">
import LocaleService from '@/locales/LocaleService';
import { LocaleType } from '@/locales/LocaleTypes';


function changeLocaleHandler(val: string) {
  switch (val) {
    case 'zh-CN':
      LocaleService.changeLocale(LocaleType.zhCN);
      break;
    case 'en-US':
      LocaleService.changeLocale(LocaleType.enUS);
      break;
  }
}
</script>
```

