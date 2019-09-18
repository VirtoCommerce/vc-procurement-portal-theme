import { Component, OnInit } from '@angular/core';
import { OrdersService } from '@api/orders.service';
import { IOrder } from '@models/dto/iorder';
import { PaginationInfo } from '@models/inner/pagination-info';
import { PageSizeChangedArgs } from '@components/page-size-selector/page-size-selector.component';
import ConfigurationFile from 'src/assets/config/config.dev.json';
import { IAppConfig } from '@models/iapp-config';
import { OrderWorkflowService } from '@services/order-workflow.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AuthorizationService } from '@services/authorization.service';
import { ActivatedRoute } from '@angular/router';
import { GenericSearchResult } from '@models/dto/common/generic-search-result';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  private _isForApproval: boolean;
  private configuration = ConfigurationFile as IAppConfig;
  private _routeParamsSubscription: Subscription;

  public startDate: Date;
  public endDate: Date;
  public statuses: string[] = ['All'];
  public selectedStatusFilter: string;
  public orders: IOrder[] = [];
  public ordersLoaded$ = new BehaviorSubject(false);
  public pagination = new PaginationInfo(this.configuration.defaultPageSize);
  public pageSizes = this.configuration.pageSizes;

  constructor(
    private ordersService: OrdersService,
    private orderWorkflowService: OrderWorkflowService,
    private authorizationService: AuthorizationService,
    private route: ActivatedRoute
  ) {
    this._isForApproval = this.route.snapshot.routeConfig.path === 'forapproval' ? true : false;
  }

  async ngOnInit() {
    if (this._isForApproval) {
      this.statuses = await this.getStatesByUserRoles();
      this.getOrders();
    } else {
      this.statuses = this.getStatusFilters();
      this._routeParamsSubscription = this.route.queryParams.subscribe((params: any) => {
        if (params.statuses != null) {
          this.statuses = params.statuses.split(',');
        }
        this.getOrders();
      });
    }
  }

  ngOnDestroy() {
    if (this._routeParamsSubscription != null) {
      this._routeParamsSubscription.unsubscribe();
    }
  }

  public getStatusFilters() {
    return ['All', ...this.orderWorkflowService.getAllStates()];
  }

  public changeActiveStatus(newStatus: string) {
    if (this.selectedStatusFilter !== newStatus) {
      this.selectedStatusFilter = newStatus;
      this.statuses = [newStatus];
      this.getOrders();
    }
  }

  public changePageSize(eventArgs: PageSizeChangedArgs) {
    this.pagination.pageSize = eventArgs.newPageSize;
    this.getOrders();
  }

  public changeDate() {
    if (this.startDate > this.endDate) {
    } else {
      this.getOrders();
    }
  }

  public getAssignedToRoles = (order: IOrder) => this.orderWorkflowService.getRolesTextByState(order.status);

  private getOrders() {
    const task = this.buildOrdersTask();
    task.subscribe((data: any) => {
      this.orders = data.results as IOrder[];
      this.pagination.collectionSize = data.totalCount;
      this.ordersLoaded$.next(true);
    });
  }

  private buildOrdersTask(): Observable<GenericSearchResult<IOrder>> {
    const statuses = this.statuses;
    const page = this.pagination.page;
    const pageSize = this.pagination.pageSize;
    const startDate = this.startDate;
    const endDate = this.endDate;

    if (statuses == null) {
      return this.ordersService.getOrders(page, pageSize, startDate, endDate, null);
    }

    if (statuses.length === 1) {
      return this.ordersService.getOrders(page, pageSize, startDate, endDate, statuses[0]);
    }

    if (statuses.length > 1) {
      return this.ordersService.getOrders(page, pageSize, startDate, endDate, null, statuses);
    }
  }

  private async getStatesByUserRoles(): Promise<string[]> {
    const currentUser = await this.authorizationService.getCurrentUser();
    if (currentUser != null) {
      const result = this.orderWorkflowService.getStatesByRoles(currentUser.workflowRoles);
      return result;
    } else {
      throw Error('The current user isn\'t defined');
    }
  }
}
