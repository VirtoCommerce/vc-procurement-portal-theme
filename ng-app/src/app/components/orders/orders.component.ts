import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrdersService } from '@api/orders.service';
import { IOrder } from '@models/dto/iorder';
import { PaginationInfo } from '@models/inner/pagination-info';
import { PageSizeChangedArgs } from '@components/page-size-selector/page-size-selector.component';
import ConfigurationFile from 'src/assets/config/config.dev.json';
import { IAppConfig } from '@models/iapp-config';
import { OrderWorkflowService } from '@services/order-workflow.service';
import { BehaviorSubject } from 'rxjs';
import { AuthorizationService } from '@services/authorization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  @Input() isForApprove = false;
  @Input() role: string;

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  startDate: Date;
  endDate: Date;
  status = 'All';
  validFilterDate = true;
  orders: IOrder[] = [];
  ordersLoaded$ = new BehaviorSubject(false);
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  configuration = ConfigurationFile as IAppConfig;
  pagination = new PaginationInfo(this.configuration.defaultPageSize);
  pageSizes = this.configuration.pageSizes;

  constructor(
    private ordersService: OrdersService,
    private orderWorkflowService: OrderWorkflowService,
    private authorizationService: AuthorizationService,
    private route: ActivatedRoute
  ) {
  }

  async ngOnInit() {
    this.getOrders();
  }

  public pageChanged() {
    this.getOrders();
  }

  public getStatuses() {
    return ['All', ...this.orderWorkflowService.getAllStates()];
  }

  public changeActiveStatus(newStatus: string) {
    if (this.status !== newStatus) {
      this.status = newStatus;
      this.getOrders();
    }
  }

  public pageSizeChanged(eventArgs: PageSizeChangedArgs) {
    this.pagination.pageSize = eventArgs.newPageSize;
    this.getOrders();
  }

  public filterOrdersByDate() {
    if (this.startDate > this.endDate) {
      this.validFilterDate = false;
    } else {
      this.validFilterDate = true;
      this.getOrders();
    }
  }

  private getOrders() {
    if (this.isForApprovalRoute()) {
      this.getForApprovalOrders();
    } else {
      this.getOtherOrders();
    }
  }

  private getOtherOrders() {
    this.ordersService
      .getOrders(this.pagination.page, this.pagination.pageSize, this.startDate, this.endDate, this.status)
      .subscribe((data: any) => {
        this.orders = data.results;
        this.pagination.collectionSize = data.totalCount;
        this.ordersLoaded$.next(true);
      });
  }

  private async getForApprovalOrders() {
    const currentUser = await this.authorizationService.getCurrentUser();
    if (currentUser != null) {
      const states = this.orderWorkflowService.getStatesByRoles(currentUser.workflowRoles);
      if (states.length > 0) {
        this.ordersService
          .getOrders(this.pagination.page, this.pagination.pageSize, this.startDate, this.endDate, null, states)
          .subscribe((data: any) => {
            this.orders = data.results as IOrder[];
            this.pagination.collectionSize = data.totalCount;
            this.ordersLoaded$.next(true);
          });
      }
    } else {
      throw Error('The current user isn\'t defined');
    }
  }

  private isForApprovalRoute(): boolean {
    return this.route.snapshot.routeConfig.path === 'forapproval' ? true : false;
  }

  getAssignedToRoles = (order: IOrder) => this.orderWorkflowService.getRolesTextByState(order.status);
}
