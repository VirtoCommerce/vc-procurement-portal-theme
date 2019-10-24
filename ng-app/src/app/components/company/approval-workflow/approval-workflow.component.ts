import { WorkflowPreviewComponent } from '@components/common/modals/workflow-preview/workflow-preview.component';
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
import { AlertsService } from '@modules/alerts/alerts.service';
import { ExtendedUser } from '@models/dto/iuser';

@Component({
  selector: 'app-approval-workflow',
  templateUrl: './approval-workflow.component.html',
  styleUrls: ['./approval-workflow.component.scss']
})
export class ApprovalWorkflowComponent implements OnInit {
  private _workflowChanging = false;
  public currentWorkflow: any;
  public workflowItems;

  constructor(private orderWorkflowService: OrderWorkflowService,
              private authService: AuthorizationService,
              private confirmService: ConfirmService,
              private ordersService: OrdersService,
              private alertService: AlertsService,
              private router: Router) { }

  async ngOnInit() {
    this.initWorkflow();
  }

  public onBeforeChange(workflowName: string, isActive: boolean): Observable<boolean> {
    return new Observable((observer) => {
      if (this._workflowChanging) {
        observer.next(false);
        return;
      }

      this._workflowChanging = true;
      this.isWorkflowChangeable().then(result => {
        if (result) {
          this.showConfirmModal(observer, workflowName, isActive);
        } else {
          this.showWorkflowActivationModal(observer, workflowName);
        }
      }).then(() => {
        this._workflowChanging = false;
      });
    });
  }


  public async onChange(event: any, workflowName: string) {
    const currentUser = await this.authService.getCurrentUser();
    if (event === true) {
      this.orderWorkflowService.changeWorkflow(workflowName, currentUser.userName, event);
    } else {
      this.orderWorkflowService.disableWorkflow(workflowName, currentUser.userName);
    }

    this.initWorkflow();
  }


  public clickPreviewWorkflowImage(workflow: any) {
    const options: NgbModalOptions = {
      backdrop: true,
      size: 'lg'
    };
    const modal = this.confirmService.open(WorkflowPreviewComponent, options);
    const dialog = modal.componentInstance as WorkflowPreviewComponent;
    dialog.title = `"${workflow.Name}"`;
    dialog.workflowImageUrl = workflow.ImageUrl;
    dialog.action.subscribe((action: string) => {
      if (action === 'dismiss') {
        modal.close();
      }
    });
  }

  public downloadWorkflowJson(workflowName: string) {
    const filename = `${workflowName}.json`;
    const content = JSON.stringify(this.orderWorkflowService.workflow);
    const element = document.createElement('a');
    const fileType = 'text/json';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(content)}`);
    element.setAttribute('download', filename);
    element.dispatchEvent(new MouseEvent('click'));
  }

  private initWorkflow() {
    this.workflowItems = this.orderWorkflowService.getWorkflowItems();
    this.currentWorkflow = this.orderWorkflowService.workflow;
  }

  private async isWorkflowChangeable(): Promise<boolean> {
    if (this.currentWorkflow.IsSystem) {
      return true;
    }

    let ordersCount = 0;
    const states = this.getNotCompletedOrderStates();
    if (states.length > 0) {
      const currentUser = await this.authService.getCurrentUser();
      const orders = await this.ordersService.getOrders(null, null, null, null, currentUser.storeId, null, states).toPromise();
      ordersCount = orders.totalCount;
    } else {
      ordersCount = 0;
    }
    return ordersCount === 0 ? true : false;
  }

  private showConfirmModal(observer: Subscriber<boolean>, workflowName: string, isActive: boolean) {
    const activateDeactivateTitle = isActive ? 'Deactivation' : 'Activation';
    const activateDeactivateWord = isActive ? 'deactivate' : 'activate';
    const activatedDeactivatedWord = isActive ? 'deactivated' : 'activated';
    const confirmOptions = {
      title: `Workflow ${activateDeactivateTitle}`,
      message: `Are you sure you want to ${activateDeactivateWord} "${workflowName}"?`
    };
    this.confirmService
      .confirm(confirmOptions)
      .then(() => {
        observer.next(true);
        this.alertService.info(`Workflow "${workflowName}" has been ${activatedDeactivatedWord} at ${new Date()}`);
      }, () => {
        observer.next(false);
      }).then(() => {
      });
  }

  private showWorkflowActivationModal(observer: Subscriber<boolean>, workflowName: string) {
    const modal = this.confirmService.open(WorkflowActivationAlertComponent);
    const dialog = modal.componentInstance as WorkflowActivationAlertComponent;
    dialog.title = `"${workflowName}" activation`;
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
    const exceptInitialStatuses = true;
    const states = this.orderWorkflowService.getAllStates(exceptFinalStatuses, exceptInitialStatuses);
    return states;
  }
}
