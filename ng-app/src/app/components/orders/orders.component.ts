import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '@api/orders.service';
import { IOrder } from '@models/dto/iorder';
import { PaginationInfo } from '@models/inner/pagination-info';
import { PageSizeChangedArgs } from '@components/page-size-selector/page-size-selector.component';
import ConfigurationFile from 'src/assets/config/config.dev.json';
import { IAppConfig } from '@models/iapp-config';
import { OrderWorkflowService } from '@services/order-workflow.service';
import { BehaviorSubject, Observable, Subscription, Subject } from 'rxjs';
import { AuthorizationService } from '@services/authorization.service';
import { ActivatedRoute } from '@angular/router';
import { GenericSearchResult } from '@models/dto/common/generic-search-result';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  private configuration = ConfigurationFile as IAppConfig;
  private _routeParamsSubscription: Subscription;

  isForApproval: boolean;
  public startDate: Date;
  public endDate: Date;
  public selectedStatuses = new Set<string>();
  public orders: IOrder[] = [];
  public ordersLoaded$ = new BehaviorSubject(false);
  public pagination = new PaginationInfo(this.configuration.defaultPageSize);
  public pageSizes = this.configuration.pageSizes;

  dateChanging = new Subject<any>();

  constructor(
    private ordersService: OrdersService,
    private orderWorkflowService: OrderWorkflowService,
    private authorizationService: AuthorizationService,
    private route: ActivatedRoute
  ) {
    this.isForApproval = this.route.snapshot.routeConfig.path === 'forapproval' ? true : false;

    this.dateChanging.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.changeDate();
      });
  }

  async ngOnInit() {
    if (this.isForApproval) {
      this.selectedStatuses = new Set<string>(await this.getStatesByUserRoles());
      this.getOrders();
    } else {
      this.selectedStatuses = new Set<string>(this.getAllStatuses());
      this._routeParamsSubscription = this.route.queryParams.subscribe((params: any) => {
        if (params.statuses != null) {
          this.selectedStatuses = new Set<string>(params.statuses.split(','));
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
    return this.orderWorkflowService.getAllStatuses().map((state: any) => {
      return {
        checked: this.selectedStatuses.has(state),
        name: state
      };
    });
  }

  public getFilterTitle(): string {
    let result: string;

    if (this.selectedStatuses.size === this.getAllStatuses().length) {
      return 'All';
    }

    if (this.selectedStatuses.size === 0) {
      return 'All';
    }

    if (this.selectedStatuses.size > 1) {
      result = '...';
    } else {
      result = new Array(Array.from(this.selectedStatuses)).join(', ');
    }

    return result;
  }

  public changeActiveStatus(control: any, newStatus: string) {
    if (control.checked) {
      this.selectedStatuses.add(newStatus);
    } else {
      this.selectedStatuses.delete(newStatus);
    }

    this.getOrders();
  }

  public changePageSize(eventArgs: PageSizeChangedArgs) {
    this.pagination.pageSize = eventArgs.newPageSize;
    this.getOrders();
  }

  public changeDate() {
    const isStartDateValid = this.isDateValid(this.startDate);
    const isEndDateValid = this.isDateValid(this.endDate);

    if (isStartDateValid && isEndDateValid) {
      if (this.startDate > this.endDate) {
      } else {
        this.getOrders();
      }
    }
  }

  public getAssignedToRoles = (order: IOrder) => this.orderWorkflowService.getRolesTextByState(order.status);

  async getOrders() {
    //const task = this.buildOrdersTask();
    let statuses = Array.from(this.selectedStatuses);
    if (statuses.length === 0) {
      statuses = [];
    }
    const page = this.pagination.page;
    const pageSize = this.pagination.pageSize;
    const startDate = this.startDate;
    const endDate = this.endDate;
    const currentUser = await this.authorizationService.getCurrentUser();
    if (!currentUser) {
      throw Error('The current user isn\'t defined');
    }
    const statusesParam = statuses.length >= 1 ? statuses : null;
    this.ordersService.getOrders(page, pageSize, startDate, endDate, currentUser.storeId, null, statusesParam)
    //task
    .subscribe((data: any) => {
      this.orders = data.results as IOrder[];
      this.pagination.collectionSize = data.totalCount;
      this.ordersLoaded$.next(true);
    });
  }

  // private async  buildOrdersTask(): Observable<GenericSearchResult<IOrder>> {

  //   if (statuses.length >= 1) {
  //     return ;
  //   } else {
  //     return this.ordersService.getOrders(page, pageSize, startDate, endDate, currentUser.storeId, null);
  //   }
  // }

  private async getStatesByUserRoles(): Promise<string[]> {
    const currentUser = await this.authorizationService.getCurrentUser();
    if (currentUser != null) {
      const result = this.orderWorkflowService.getStatesByRoles(currentUser.workflowRoles);
      return result;
    } else {
      throw Error('The current user isn\'t defined');
    }
  }

  private getAllStatuses() {
    return this.orderWorkflowService.getAllStatuses();
  }

  private isDateValid(date: any): boolean {
    let isDateValid = true;
    if (date != null) {
      if (date instanceof Date) {
        isDateValid = true;
      } else {
        isDateValid = false;
      }
    }

    return isDateValid;
  }
}
