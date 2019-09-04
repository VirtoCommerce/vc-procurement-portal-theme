import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthorizationService } from './authorization.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const permission = route.data.permission;
    return this.authService
      .checkPermission(...permission.roles)
      .then(result => {
        if (!result) {
          this.router.navigate([permission.redirectTo]);
        }
        return result;
      });
  }
}
