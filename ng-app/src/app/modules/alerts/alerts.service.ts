import { Injectable, Optional } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import { Alert, IAlertOptions, AlertType } from './models';



@Injectable( { providedIn: 'root' })
export class AlertsService {

  static defaultAlertOptions: IAlertOptions = { keepAfterRouteChange: false, dismissTimeout: 5000 };

  private  alerts: Alert[] = [];

  alerts$: Subject<Alert[]> = new Subject<Alert[]>();


  constructor(private router: Router, @Optional() options: IAlertOptions ) {
    if (options) {
      AlertsService.defaultAlertOptions = {...AlertsService.defaultAlertOptions, ...options};
    }
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alerts.forEach(alert => {
          if (!alert.keepAfterRouteChange) {
            this.dismissAlert(alert);
          }
        });
      }
    });

  // this.info(`Est dolore tempor sint consectetur culpa ut minim consequat id quis nostrud ad dolor eiusmod.`, { dismissTimeout: 0, keepAfterRouteChange: true });
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

    const opts = { ...AlertsService.defaultAlertOptions, ...options };
    const alert = new Alert(type, msg, opts.keepAfterRouteChange);
    this.alerts.push(alert);
    this.alerts$.next(this.alerts);
    if (opts.dismissTimeout) {
      setTimeout(() => this.dismissAlert(alert), opts.dismissTimeout);
    }
  }

  dismissAlert(alert: Alert) {
    const idx = this.alerts.indexOf(alert);
    if ( idx > -1) {
      this.alerts.splice(idx, 1);
      this.alerts$.next(this.alerts);
    }
  }

}
