import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthorizationService } from './authorization.service';
import { BehaviorSubject } from 'rxjs';
import { RoleEnum } from '../models/role';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthorizationService
    ) { }

    canActivate(): Promise<boolean> {
      return this.authService.checkPermission(RoleEnum.Admin);
    }
}
