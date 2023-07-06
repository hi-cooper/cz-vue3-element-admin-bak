import type { RouteRecordRaw, RouteMeta } from 'vue-router';
import { defineComponent } from 'vue';

type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import('*.vue')>) | (() => Promise<T>);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface IRoute extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: IRoute[];
  props?: Record<string, any>;
  fullPath?: string;
}

// export type AppRouteModule = RouteModule | AppRouteRecordRaw;
export type { IRoute };
