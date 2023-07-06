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
  set<T>(key: string, value: T): void {
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
