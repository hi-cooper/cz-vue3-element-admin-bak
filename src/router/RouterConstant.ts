const DEFAULT_LAYOUT = () => import('@/layouts/default/index.vue');
const EXCEPTION_COMPONENT = () => import('@/views/error/500.vue');

const RouterConstant = {
  DEFAULT_LAYOUT,
  EXCEPTION_COMPONENT,
};

export default RouterConstant;
