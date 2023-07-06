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

