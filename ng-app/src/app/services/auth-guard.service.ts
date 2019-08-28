import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthorizationService } from './authorization.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private auth: AuthorizationService
    ) { }

    canActivate(): BehaviorSubject<boolean> {
      return this.auth.isAdmin;
    }
}
