import type { IRoute } from './RouteTypes';

const modules = import.meta.glob<Record<string, unknown>>('./modules/**/*.ts', { eager: true });
const allRoutes: IRoute[] = [];
const allFlatRoutes: IRoute[] = [];
const allRoutesMap = new Map<string, IRoute>();
const allMenuRoutes: IRoute[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {}; // 仅支持export default
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  allRoutes.push(...modList);
  if ('./modules/sidebarMenu.ts' === key) {
    allMenuRoutes.push(...modList);
  }
});

function initAllRoutesMap(routes: IRoute[]) {
  routes.forEach((route) => {
    allRoutesMap.set(route.id, route);
    allFlatRoutes.push(route);
    if (route.children) {
      initAllRoutesMap(route.children);
    }
  });
}

initAllRoutesMap(allRoutes);
console.log('allRoutes', allRoutes);
console.log('allRoutesMap', allRoutesMap.values());

export { allRoutes, allFlatRoutes, allRoutesMap, allMenuRoutes };
export default allRoutes;
