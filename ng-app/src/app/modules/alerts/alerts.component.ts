import { Component, OnInit, OnDestroy, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from './models';
import { AlertsService } from './alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styles: []
})
export class AlertsComponent implements OnInit {

  alerts$: Observable<Alert[]>;

  dismissible = true;

  constructor(private alertsService: AlertsService) {
  }
  ngOnInit() {
    this.alerts$ = this.alertsService.alerts$;
  }

  onClosed(alert: Alert): void {
    this.alertsService.dismissAlert(alert);
  }

}
