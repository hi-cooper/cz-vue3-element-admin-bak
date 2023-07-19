import type { RouteRecordRaw, RouteMeta } from 'vue-router';
import { defineComponent } from 'vue';

type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import('*.vue')>) | (() => Promise<T>);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface IBaseRoute extends Omit<RouteRecordRaw, 'meta'> {
  id: string;
  name?: string;
  path: string;
  fullPath?: string;
  component?: Component | string;
  components?: Component;
  meta?: IBaseRouteMeta;
  children?: IBaseRoute[];
  props?: Record<string, any>;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface ITagViewRoute extends IBaseRoute {
  name: string; // 同时用于TagView唯一标识
  meta: ITagViewRouteMeta;
  children?: IMenuRoute[];
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface IMenuRoute extends ITagViewRoute {
  name: string; // 同时用于TagView唯一标识
  meta: IMenuRouteMeta;
  children?: IMenuRoute[];
}

type IBaseRouteMeta = RouteMeta;
declare interface ITagViewRouteMeta extends RouteMeta {
  visiable?: boolean; // 是否显示。true-是；false-否；
  closeable: boolean; // 是否可关闭。true-可关闭；false-不可关闭；
  keepAlive: boolean; // 是否保活。true-是；false-否；
  affix?: boolean; // 是否固定在TagView前面。true-是；false-否；
}

declare interface IMenuRouteMeta extends ITagViewRouteMeta {
  title: string; // 菜单名称。i18n key。
  icon?: string; // 菜单图标。icon路径。根目录为”/src/assets“
  hidden?: boolean; // 是否隐藏菜单。true-隐藏；false-显示；（由权限系统最终确定）
}

type IRoute = IBaseRoute | ITagViewRoute | IMenuRoute;

export type { IRoute, IBaseRoute, IMenuRoute, ITagViewRoute };
