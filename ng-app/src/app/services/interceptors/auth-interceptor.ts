import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
    } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private readonly router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(catchError((err: HttpErrorResponse) =>  {

            if (this.router.url !== '/login' && err.status === 401) {
                    // redirect to the login route
                    // or show a modal
                    location.replace('/Account/Login');
                    //this.router.navigate(["login"]);
                }

            return throwError(err);
        }));
    }
}
