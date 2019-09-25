import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
    } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthorizationService } from '@services/authorization.service';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthorizationService, private location: LocationStrategy) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(catchError((err: HttpErrorResponse) =>  {

            if (err.status === 401) {
                    // redirect to the login route
                    const loginPath = this.location.prepareExternalUrl('/Account/Login');
                    location.replace(loginPath);
                    this.authService.logout();
                    //this.router.navigate(["login"]);
                }

            return throwError(err);
        }));
    }
}
