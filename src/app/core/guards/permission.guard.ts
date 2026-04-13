import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AppRoute } from '../enums/app-route.enum';
import { PortalPermission } from '../enums/portal-permission.enum';
import { AuthService } from '../services/auth.service';

const getPermissions = (route: ActivatedRouteSnapshot): readonly PortalPermission[] =>
  (route.data['permissions'] as readonly PortalPermission[] | undefined) ?? [];

export const permissionGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const permissions = getPermissions(route);

  if (permissions.length === 0 || authService.hasAnyPermission(permissions)) {
    return true;
  }

  return router.createUrlTree([`/${AppRoute.Dashboard}/${AppRoute.DashboardOverview}`], {
    queryParams: { deniedFrom: state.url }
  });
};
