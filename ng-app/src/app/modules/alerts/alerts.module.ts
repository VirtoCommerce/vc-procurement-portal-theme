import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertsComponent } from './alerts.component';
import { IAlertOptions } from './models';
import { AlertsService } from './alerts.service';




@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [AlertsComponent]
})
export class AlertsModule {


  constructor(@Optional() @SkipSelf() parentModule: AlertsModule) {
    if (parentModule) {
      throw new Error(
        'AlertsModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot( options?: IAlertOptions ) {
    AlertsService.defaultAlertOptions = {...AlertsService.defaultAlertOptions, ...options};
    return {
      ngModule: AlertsModule,
      providers: [
        // { provide: IAlertOptions, useValue: options }
      ]
    };
  }

 }
