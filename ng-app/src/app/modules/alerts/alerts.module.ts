import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertsComponent } from './alerts.component';




@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [AlertsComponent]
})
export class AlertsModule { }
