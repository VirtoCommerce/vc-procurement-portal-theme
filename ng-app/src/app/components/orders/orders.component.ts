import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrdersService } from '../../services/orders.service';
import { IOrder } from '../../models/dto/iorder';
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
        this.orders = data.results;
        this.pagination.collectionSize = data.totalCount;
      });
  }

  pageChanged() {
    this.getAllOrders();
  }
}
