import { WorkflowPreviewComponent } from './../../common/modals/workflow-preview/workflow-preview.component';
import { IOrder } from '@models/dto/iorder';
import { GenericSearchResult } from '@models/dto/common/generic-search-result';
import { WorkflowActivationAlertComponent } from '@components/common/modals/workflow-activation-alert/workflow-activation-alert.component';
import { OrdersService } from '@services/api/orders.service';
import { ConfirmService } from '@modules/confirm-modal/confirm-modal-service';
import { AuthorizationService } from '@services/authorization.service';
import { Component, OnInit, isDevMode } from '@angular/core';
import { OrderWorkflowService } from '@services/order-workflow.service';
import { Observable, Subscriber } from 'rxjs';
import { Router, Params } from '@angular/router';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-approval-workflow',
  templateUrl: './approval-workflow.component.html',
  styleUrls: ['./approval-workflow.component.scss']
})
export class ApprovalWorkflowComponent implements OnInit {
  private _currentUser;
  private _workflowChanging = false;
  public currentWorkflow: any;
  public workflowItems;

  constructor(private orderWorkflowService: OrderWorkflowService,
    private authService: AuthorizationService,
    private confirmService: ConfirmService,
    private ordersService: OrdersService,
    private router: Router) { }

  async ngOnInit() {
    this._currentUser = await this.authService.getCurrentUser();
    this.initWorkflow();
  }

  public onBeforeChange(workflowName: string, isActive: boolean): Observable<boolean> {
    return new Observable((observer) => {
      if (isActive || this._workflowChanging) {
        observer.next(false);
        return;
      }

      this._workflowChanging = true;
      this.isWorkflowChangeable().then(result => {
        if (result) {
          this.showConfirmModal(observer, workflowName);
        } else {
          this.showWorkflowActivationModal(observer);
        }
      }).then(() => {
        this._workflowChanging = false;
      });
    });
  }


  public onChange(event: any, workflowName: string) {
    if (event === true) {
      this.orderWorkflowService.changeWorkflow(workflowName, this._currentUser.userName, event);
      this.initWorkflow();
    }
  }

  public convertImageUrl(imageUrl: any): string {
    if (imageUrl == null) {
      return '';
    }

    // TODO: fix this error. there are different URLs in dev and prod environment
    const devMode = false; // isDevMode();
    if (devMode) {
      return imageUrl;
    } else {
      return `/themes/assets/static/bundle${imageUrl}`;
    }
  }

  public clickPreviewWorkflowImage(workflow: any) {
    const options: NgbModalOptions = {
      backdrop: true,
      size: 'lg'
    };
    const modal = this.confirmService.open(WorkflowPreviewComponent, options);
    const dialog = modal.componentInstance as WorkflowPreviewComponent;
    dialog.title = `"${workflow.Name}"`;
    dialog.workflowImageUrl = this.convertImageUrl(workflow.ImageUrl);
    dialog.action.subscribe((action: string) => {
      if (action === 'dismiss') {
        modal.close();
      }
    });
  }

  private initWorkflow() {
    this.workflowItems = this.orderWorkflowService.getWorkflowItems();
    this.currentWorkflow = this.orderWorkflowService.workflow;
  }

  private async isWorkflowChangeable(): Promise<boolean> {
    const orders = await this.getNotCompletedOrders();
    return orders.results.length === 0 ? true : false;
  }

  private async getNotCompletedOrders(): Promise<GenericSearchResult<IOrder>> {
    const states = this.getNotCompletedOrderStates();
    const orders = await this.ordersService.getOrders(null, null, null, null, null, states).toPromise();
    return orders;
  }

  private showConfirmModal(observer: Subscriber<boolean>, workflowName: string) {
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
      }).then(() => {
      });
  }

  private showWorkflowActivationModal(observer: Subscriber<boolean>) {
    const modal = this.confirmService.open(WorkflowActivationAlertComponent);
    const dialog = modal.componentInstance as WorkflowActivationAlertComponent;
    dialog.title = `"${this.currentWorkflow.Name}" activation`;
    dialog.action.subscribe((action: string) => {

      switch (action) {
        case 'cancel':
        case 'dismiss':
          modal.close();
          observer.next(false);
          break;

        case 'redirect':
          modal.close();
          const states = this.getNotCompletedOrderStates();
          const params: Params = {
            statuses: new Array(states).join(','),
          };
          this.router.navigate(['/orders'], { queryParams: params });
          break;

        default:
          modal.close();
          break;
      }
    });
  }

  private getNotCompletedOrderStates(): string[] {
    const exceptFinalStatuses = true;
    const states = this.orderWorkflowService.getAllStates(exceptFinalStatuses);
    return states;
  }
}
