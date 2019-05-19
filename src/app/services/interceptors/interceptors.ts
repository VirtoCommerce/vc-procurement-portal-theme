import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpResponse, HttpXsrfTokenExtractor } from '@angular/common/http';
import { HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';


import { Observable, of } from 'rxjs';
//import { of } from 'rxjs/observable/of';
import { tap, catchError } from 'rxjs/operators';

//import { AuthService } from './auth.service';

@Injectable()
export class ProcurementPortalInterceptor implements HttpInterceptor {

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestToForward = req;
    let token = this.tokenExtractor.getToken() as string;
    var arr = req.url.split('/');
    const url = arr[arr.length - 1];
    switch (req.method) {
      case 'GET': {
        switch (url) {
          case 'login':
            {
              req = req.clone({
                setHeaders:
                {
                  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3"
                }
              });
              break;
            }
          default: {
            req = req.clone({
              setHeaders:
              {
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
                "Content-Type": "application/x-www-form-urlencoded",
                "Upgrade-Insecure-Requests": "1"
              }
            });
          }
        }
      }
      case "PUT":{
        switch (url) {
          case 'items':
            {
              req = req.clone({
                setHeaders:
                {
                  "X-XSRF-TOKEN": token,
                  "Content-Type": "application/json;charset=UTF-8",
                  "Accept": "application/json, text/plain, */*"
                }
              });
              break;
            }
          default: {
            req = req.clone({
              setHeaders:
              {
                "X-XSRF-TOKEN": token,
                "Content-Type": "application/json;charset=UTF-8",
                "Accept": "application/json, text/plain, */*"
            }
            });
          }
        }
      }
      default: {
        // console.log('Intercaptor: ' + req);
        req = req.clone({ setHeaders: { "X-XSRF-TOKEN": token } });
        break;
      }
    }

    return next.handle(req).pipe(
      tap(
        event => this.handleResponse(req, event),
        error => this.handleError(req, error)
      )
    );
  }


  handleResponse(req: HttpRequest<any>, event: HttpEvent<any>) {
    // console.log('Handling response for ', req.url, event);
    if (event instanceof HttpResponse) {
      // console.log('Request for ', req.url,
      //   ' Response Status ', event.status,
      //   ' With body ', event.body);
    }
  }

  handleError(req: HttpRequest<any>, event: { status: any; error: any; }) {
    // console.log('Error url: ' + req.url);
    // console.log('Error status: ' + event.status);
    // console.log('Error body: ' + event.error);
    // console.error('Request for ', req.url,
    //   ' Response Status ', event.status,
    //   ' With error ', event.error);
  }

}