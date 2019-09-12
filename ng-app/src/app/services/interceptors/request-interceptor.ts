import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FullScreenSpinnerService } from '@services/full-screen-spinner.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  //@BlockUI() blockUI: NgBlockUI;

  activeRequests = 0;

  constructor(private fullScreenSpinner: FullScreenSpinnerService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.fullScreenSpinner.start();
    }

    this.activeRequests++;
    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.fullScreenSpinner.stop();
        }
      })
    );
  }
}
