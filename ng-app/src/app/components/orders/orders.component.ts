import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrdersService } from '../../services/orders.service';
import { IOrder } from '../../models/dto/iorder';
import { User } from '../../models/user';
import { PaginationInfo } from 'src/app/models/inner/pagination-info';
import { PageSizeChangedArgs } from '../page-size-selector/page-size-selector.component';
import ConfigurationFile from 'src/assets/config/config.dev.json';
import { IAppConfig } from 'src/app/models/iapp-config';
import { OrderWorkflowService } from 'src/app/services/order-workflow.service';

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
  users: User[] = [];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  configuration = ConfigurationFile as IAppConfig;
  pagination = new PaginationInfo(this.configuration.defaultPageSize);
  pageSizes = this.configuration.pageSizes;

  constructor(
    private ordersService: OrdersService,
    private orderWorkflowService: OrderWorkflowService
  ) { }

  ngOnInit() {
    this.getAllOrders();
  }

  changeActiveStatus(status: string) {
    this.status = status;
    this.getAllOrders();
  }

  pageSizeChanged(eventArgs: PageSizeChangedArgs) {
    this.pagination.pageSize = eventArgs.newPageSize;
    this.getAllOrders();
  }

  filterOrdersByDate() {
    if (this.startDate > this.endDate) {
      this.validFilterDate = false;
    } else {
      this.validFilterDate = true;
      this.getAllOrders();
    }
  }

  getAllOrders() {
    this.ordersService
      .getOrders(this.pagination.page, this.pagination.pageSize, this.startDate, this.endDate, this.status)
      .subscribe((data: any) => {
        this.orders = data.results as IOrder[];
        this.pagination.collectionSize = data.totalCount;
      });
  }

  pageChanged() {
    this.getAllOrders();
  }

  getWorkflowRolesByOrderStatus(orderStatus: string): string {
    const roles = this.orderWorkflowService.getRolesByState(orderStatus);
    if (roles && roles.length > 0) {
      const result = new Array(roles).join(', ');
      return result;
    }

    throw Error(`The predefined roles for \'${orderStatus}\' order status aren't been found in the workflow file.`);
  }
}
