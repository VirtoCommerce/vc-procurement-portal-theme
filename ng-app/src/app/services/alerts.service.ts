import { Injectable, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

export class Alert {
  constructor(public type: AlertType, public msg: string, public keepAfterRouteChange = false) {
  }
}

export enum AlertType {
  Success = 'success',
  Error =   'danger',
  Info =    'info',
  Warning = 'warning'
}


@Injectable( { providedIn: 'root' })
export class AlertsService {

  private  alerts: Alert[] = [];

  alerts$: Subject<Alert[]> = new Subject<Alert[]>();

  constructor(private router: Router) {

    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alerts = this.alerts.filter(alert => alert.keepAfterRouteChange );
      }
    });
  }

  success(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Success, message, keepAfterRouteChange);
  }

  error(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Error, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Info, message, keepAfterRouteChange);
  }

  warn(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Warning, message, keepAfterRouteChange);
  }


  /**
   * Common method for add alert to list
   * @param type type of alert
   * @param msg text of alert
   * @param keepAfterRouteChange if it keep showing after route changes or neither
   */
  alert(type: AlertType, msg: string, keepAfterRouteChange = false, dismissTimeout = 5000) {
    const alert = new Alert(type, msg, keepAfterRouteChange);
    this.alerts.push(alert);
    this.alerts$.next(this.alerts);
    setTimeout(() => this.dismissAlert(alert), dismissTimeout);
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
