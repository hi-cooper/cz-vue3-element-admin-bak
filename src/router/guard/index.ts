import type { Router } from 'vue-router';
import PermissionGuard from './PermissionGuard';

function setup(router: Router) {
  PermissionGuard.setup(router);
}

const RouterGuard = {
  setup,
};

export default RouterGuard;
