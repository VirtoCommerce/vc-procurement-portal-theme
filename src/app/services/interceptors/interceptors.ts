import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpResponse, HttpXsrfTokenExtractor} from '@angular/common/http';
import {HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';

/*
  OLD:
  import {Observable} from 'rxjs/Observable';
  import 'rxjs/add/operator/do';
 */
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

//import { AuthService } from './auth.service';

@Injectable()
export class ProcurementPortalInterceptor  implements HttpInterceptor {

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    let requestToForward = req;
    let token = this.tokenExtractor.getToken() as string;
    console.log(token);
    if (token !== null) {
        req = req.clone({ setHeaders: { "X-XSRF-TOKEN": token } });
    }
    return next.handle(req).pipe(
      tap(
        event => this.handleResponse(req, event),
        error => this.handleError(req, error)
      )
    );
  }


  handleResponse(req: HttpRequest<any>, event: HttpEvent<any>) {
    console.log('Handling response for ', req.url, event);
    if (event instanceof HttpResponse) {
      console.log('Request for ', req.url,
          ' Response Status ', event.status,
          ' With body ', event.body);
    }
  }

  handleError(req: HttpRequest<any>, event: { status: any; error: any; }) {
    console.error('Request for ', req.url,
          ' Response Status ', event.status,
          ' With error ', event.error);
  }
  
}