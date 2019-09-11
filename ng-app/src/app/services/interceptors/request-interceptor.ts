import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { NgBlockUI, BlockUI } from "ng-block-ui";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  @BlockUI() blockUI: NgBlockUI;
  activeRequests: number = 0;

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.blockUI.start();
    }

    this.activeRequests++;
    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.blockUI.stop();
        }
      })
    );
  }
}
