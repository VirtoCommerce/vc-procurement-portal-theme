import { ConfirmService } from '@modules/confirm-modal/confirm-modal-service';
import { AuthorizationService } from '@services/authorization.service';
import { Component, OnInit, isDevMode } from '@angular/core';
import { OrderWorkflowService } from '@services/order-workflow.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-approval-workflow',
  templateUrl: './approval-workflow.component.html',
  styleUrls: ['./approval-workflow.component.scss']
})
export class ApprovalWorkflowComponent implements OnInit {
  private _currentUser;
  public currentWorkflow: any;
  public workflowItems;

  constructor(private orderWorkflowService: OrderWorkflowService,
    private authService: AuthorizationService,
    private confirmService: ConfirmService) { }

  async ngOnInit() {
    this._currentUser = await this.authService.getCurrentUser();
    this.initWorkflow();
  }

  public onBeforeChange2(workflowName: string, isActive: boolean): Observable<boolean> {
    return new Observable((observer) => {
      if (isActive) {
        observer.next(false);
        return;
      }
      const confirmOptions = {
        title: 'Workflow Activation',
        message: `Are you sure you want to activate "${workflowName}"?`
      };
      this.confirmService
        .confirm(confirmOptions)
        .then(() => {
          observer.next(true);
        }, () => {
          observer.next(false);
        });
    });
  }

  public onChange(event: any, workflowName: string) {
    if (event === true) {
      this.orderWorkflowService.changeWorkflow(workflowName, this._currentUser.userName, event);
      this.initWorkflow();
    }
  }

  public getCurrentWorkflowImageUrl(): string {
    // TODO: fix this error. there are different URLs in dev and prod environment
    // if (isDevMode()) {
    //   return this.currentWorkflow.ImageUrl;
    // } else {
    //   return `/themes/assets/static/bundle${this.currentWorkflow.ImageUrl}`;
    // }
    return `/themes/assets/static/bundle${this.currentWorkflow.ImageUrl}`;
  }

  private initWorkflow() {
    this.workflowItems = this.orderWorkflowService.getWorkflowItems();
    this.currentWorkflow = this.orderWorkflowService.workflow;
  }
}
