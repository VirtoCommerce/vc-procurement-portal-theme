import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
    } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AlertsService } from '@modules/alerts/alerts.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor( private readonly alertsService: AlertsService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(retry(3), catchError((error: HttpErrorResponse) =>  {

          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `An Error: ${error.error.message}`;
            this.alertsService.error(errorMessage);
          } else {
            // server-side error
            errorMessage = `An error occurred with code ${error.status} while trying to execute a request to the server\nMessage: ${error.message}`;
            if (error.status >= 500) {
              this.alertsService.error(errorMessage, { keepAfterRouteChange: true, dismissTimeout: 0 });
            } else if (error.status > 401 && error.status < 500) {
              this.alertsService.warn(errorMessage, { keepAfterRouteChange: true, dismissTimeout: 0 });
            }
          }

          return throwError(errorMessage);

        }));
    }
}
