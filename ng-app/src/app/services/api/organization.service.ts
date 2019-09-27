import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UpdateOrganization } from '@models/organization';
import { AlertsService } from '@modules/alerts/alerts.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor(private http: HttpService, private alertsService: AlertsService) {}

  getUserOrganization() {
    return this.http.getCurrentUserOrganization().pipe(
      tap(organization => {
        this.log(`fetched organization:` + organization);
      }),
      catchError(error => this.handleError(error))
    );
  }

  updateOrganization(organization: UpdateOrganization) {
    return this.http.updateOrganization(organization)
      .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: any) {
    if (error.status >= 500) {
      this.alertsService.error(
        `An error occurred with code ${error.status} while trying to execute a request to the server`, { keepAfterRouteChange: true, dismissTimeout: 0 }
      );
    } else if (error.status >= 400 && error.status < 500) {
      this.alertsService.warn(
        `An error occurred with code ${error.status} while trying to execute a request to the server`, { keepAfterRouteChange: true, dismissTimeout: 0 }
      );
    }
    return throwError(error);
  }

  private log(message: string) {
    console.log('Organization service: ' + message);
  }
}
