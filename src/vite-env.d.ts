/// <reference types="vite/client" />

// 环境变量类型
interface ImportMetaEnv {
  VITE_APP_TITLE: string,
  VITE_APP_PORT: string,
  VITE_APP_BASE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}