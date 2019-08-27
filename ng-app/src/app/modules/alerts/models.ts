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

export interface IAlertOptions {
  keepAfterRouteChange?: boolean;
  dismissTimeout?: number;
}
