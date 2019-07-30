import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// import { Store, select } from '@ngrx/store';
import { OrdersService } from '../../services/orders.service';
import { IOrder } from '../../models/iorder';
import { User } from '../../models/user';

import { AuthenticationService } from '../../services';
import { PaginationInfo } from 'src/app/models/inner/pagination-info';
import { PageSizeChangedArgs } from '../page-size-selector/page-size-selector.component';
// import { AppConfig } from 'src/app/services/app-config.service';
import settings_data from 'src/assets/config/config.dev.json';
import { IAppConfig } from 'src/app/models/iapp-config';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  orders: IOrder[] = [];
  users: User[] = [];
  displayedColumns: string[] = [
    'orderid',
    'status',
    'date',
    'items',
    'createdBy',
    'assignedTo',
    'total'
  ];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  @Input() isForApprove = false;
  @Input() role: string;

  // paginationInfo = new PaginationInfo(AppConfig.settings.defaultPageSize);
  // pageSizes = AppConfig.settings.pageSizes;
  settings = settings_data as IAppConfig;
  paginationInfo = new PaginationInfo(this.settings.defaultPageSize);
  pageSizes = this.settings.pageSizes;

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    console.log('orders component. getOrders');
    this.getAllOrders();
  }

  pageSizeChanged(eventArgs: PageSizeChangedArgs) {
    this.paginationInfo.pageSize = eventArgs.newPageSize;
    this.getAllOrders();
  }

  getAllOrders() {
    this.ordersService
      .getOrders(this.paginationInfo.page, this.paginationInfo.pageSize)
      .subscribe((data: any) => {
        this.orders = data.results as IOrder[];
        this.paginationInfo.collectionSize = data.totalCount;
      });
  }

  pageChanged() {
    this.getAllOrders();
  }
}

export class OrderError implements OnInit {
  ngOnInit() {}

  constructor(public payload: any) {
    console.log(payload);
  }
}

export class GetOrdersSuccess implements OnInit {
  ngOnInit() {}

  constructor(public payload: any) {
    console.log('GetHeroesSuccess: ' + payload);
  }
}
