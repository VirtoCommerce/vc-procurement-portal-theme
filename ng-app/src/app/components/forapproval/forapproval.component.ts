import { Component, OnInit } from '@angular/core';
import { PaginationInfo } from 'src/app/models/inner/pagination-info';
// import { AppConfig } from 'src/app/services/app-config.service';
import { OrdersService } from 'src/app/services/orders.service';
import { PageSizeChangedArgs } from '../page-size-selector/page-size-selector.component';
import { IOrder } from 'src/app/models/iorder';
import settings_data from 'src/assets/config/config.dev.json';
import { IAppConfig } from 'src/app/models/iapp-config';

@Component({
  selector: 'app-forapproval',
  templateUrl: './forapproval.component.html',
  styleUrls: ['./forapproval.component.scss']
})
export class ForApprovalComponent implements OnInit {
  // paginationInfo = new PaginationInfo(AppConfig.settings.defaultPageSize);
  // pageSizes = AppConfig.settings.pageSizes;
  orders: IOrder[] = [];
  settings = settings_data as IAppConfig;
  paginationInfo = new PaginationInfo(this.settings.defaultPageSize);
  pageSizes = this.settings.pageSizes;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    console.log("forapproval component. getOrders");
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
        console.log('Orders ', this.orders);
      });
  }

  pageChanged() {
    this.getAllOrders();
  }

}
