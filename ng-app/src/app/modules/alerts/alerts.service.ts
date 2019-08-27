import { Injectable, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject, config } from 'rxjs';
import { Alert, IAlertOptions, AlertType } from './models';



@Injectable( { providedIn: 'root' })
export class AlertsService {

  private  alerts: Alert[] = [];

  alerts$: Subject<Alert[]> = new Subject<Alert[]>();

  defaultAlertOptions: IAlertOptions;

  constructor(private router: Router) {
    this.defaultAlertOptions = { keepAfterRouteChange: false, dismissTimeout: 5000 };
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alerts = this.alerts.filter(alert => alert.keepAfterRouteChange );
      }
    });
  }

  success(message: string, options?: IAlertOptions) {
    this.alert(AlertType.Success, message, options);
  }

  error(message: string, options?: IAlertOptions) {
    this.alert(AlertType.Error, message, options);
  }

  info(message: string, options?: IAlertOptions) {
    this.alert(AlertType.Info, message, options);
  }

  warn(message: string, options?: IAlertOptions) {
    this.alert(AlertType.Warning, message, options);
  }


  /**
   * Common method for add alert to list
   * @param type type of alert
   * @param msg text of alert
   * @param keepAfterRouteChange if it keep showing after route changes or neither
   */
  alert(type: AlertType, msg: string, options?: IAlertOptions) {

    const opts = { ...this.defaultAlertOptions, ...options };
    const alert = new Alert(type, msg, opts.keepAfterRouteChange);
    this.alerts.push(alert);
    this.alerts$.next(this.alerts);
    if (opts.dismissTimeout) {
      setTimeout(() => this.dismissAlert(alert), opts.dismissTimeout);
    }
  }

  clear() {
    this.alerts = [];
    this.alerts$.next(this.alerts);
  }

  dismissAlert(alert: Alert) {
    const idx = this.alerts.indexOf(alert);
    if ( idx > -1) {
      this.alerts.splice(idx, 1);
      this.alerts$.next(this.alerts);
    }
  }

}
