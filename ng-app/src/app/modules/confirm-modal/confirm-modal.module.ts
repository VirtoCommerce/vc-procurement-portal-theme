import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent, ConfirmTemplateDirective, ConfirmService, ConfirmState } from './confirm-modal-service';


@NgModule({
  declarations: [ ConfirmModalComponent, ConfirmTemplateDirective ],
  exports: [ ConfirmModalComponent, ConfirmTemplateDirective ],
  imports: [
    NgbModule,
    CommonModule
  ],
  providers: [ConfirmService, ConfirmState]
})
export class ConfirmModalModule { }
