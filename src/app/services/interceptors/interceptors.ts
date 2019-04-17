import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpResponse, HttpXsrfTokenExtractor } from '@angular/common/http';
import { HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

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
export class ProcurementPortalInterceptor implements HttpInterceptor {

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let requestToForward = req;
    let token = this.tokenExtractor.getToken() as string;
    //console.log('Token: '+token);
    //console.log('req: '+req);
    var arr = req.url.split('/');
    const url = arr[arr.length - 1];
    if (url === 'login') {
      if (req.method === 'GET') {
        req = req.clone({
          setHeaders:
          {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3"
            //"Content-Type": "application/x-www-form-urlencoded"
            //"Cookie": ".AspNetCore.Antiforgery.RaNLd_w1SZ8=CfDJ8Dfj6laleKdLvzd8CiAcWJibnxSKhK7q-EfGD0y-fMCyQTaeV0WIaR2O0ihYBinjtufssxHnyin0rJYoyaaJLOvX5Bb3YaNIhiSN7y99NQGSxw5FudAVMtEG-MlzcfHamilKnlJ0r4_5tQI-b-xZyyM; .AspNetCore.Identity.Application=CfDJ8Dfj6laleKdLvzd8CiAcWJglZ5pCcia6MBIdmj_bYup6fNXSHJtwYd-nU1vGLkytZcEUPW9whVyM43SW4bzTy6H4n9XPzS8ib-peHb83VXsm-bJuwegANKi7AEA6zijpyfTKURoB7Mf-w4-NlEFckfAMOuWcJQaKwUNcBtxtLeUrogeGr6Pq1BjoGStaD7B-eAuliFIlQmc9sB_uWwDCvb3phsJB-YG70YjM_MofYp73u5r2GvHjphX0zAx6913PlkYxKWAuV5U3JABXecdwWch2kr5vHMA-pDJDyB9Se6mn85rH719zph8RjfVQC_hW7my6QDExUdCGkgGJQFpvk641PWhQvxRsEwd_YZ9Eg45UMyf_DSfGzLImG-mdglgAmiaXZFYFg1vkpnPpUlVE-d6Mt5HFaa9RQLFrF3Ep7Zm9Y2lMnXoBfNaDqjJf30FqfKM0byrR5PN9akw0tBiHr4VTpgH5X65IdPu0k4L1AMm5hw-pB8kcGBlvtj77fG6JFV2nFSIEROBSciCMKg12bYUhtU65_q1-R1nRBfOPxpC2eYvQA8SkbBFV-v-AzY0U9AfmcG0HkhdYPLZ9dq0lxHQ; XSRF-TOKEN=CfDJ8Dfj6laleKdLvzd8CiAcWJivRFd3ehB_1Yaf4FBYikHrJYbUfHQqaAgItjX1OUgXf_BDYRpvIQfd45f_nzbtOUBF5-SlbyMHOJZKUzYxjlf-nfy3XDzEtU1jQm6m-J_8bMZlckAEcehJaa8oqDHSzAwt2vYO_tcdiIYkRotPj9BBXCRkEiVyImF5aCq36kG_UQ"
          }
        });
      } else {
        req = req.clone({
          setHeaders:
          {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "Content-Type": "application/x-www-form-urlencoded",
            "Upgrade-Insecure-Requests": "1"
          }
        });
      }
    } else
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
    console.log('Error url: ' + req.url);
    console.log('Error status: ' + event.status);
    console.log('Error body: ' + event.error);
    console.error('Request for ', req.url,
      ' Response Status ', event.status,
      ' With error ', event.error);
  }

}