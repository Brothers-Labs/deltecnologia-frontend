import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AppRoute } from '../enums/app-route.enum';
import { AuthService } from '../services/auth.service';

export const publicAuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated() ? router.createUrlTree([`/${AppRoute.Dashboard}`]) : true;
};

export const publicAuthMatchGuard: CanMatchFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated() ? router.createUrlTree([`/${AppRoute.Dashboard}`]) : true;
};
