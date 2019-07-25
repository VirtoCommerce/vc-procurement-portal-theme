import { Component, OnInit } from '@angular/core';
import { PaginationInfo } from 'src/app/models/inner/pagination-info';
import { AppConfig } from 'src/app/services/app-config.service';
import { OrdersService } from 'src/app/services/orders.service';
import { PageSizeChangedArgs } from '../page-size-selector/page-size-selector.component';
import { IOrder } from 'src/app/models/iorder';

@Component({
  selector: 'app-forapproval',
  templateUrl: './forapproval.component.html',
  styleUrls: ['./forapproval.component.scss']
})
export class ForApprovalComponent implements OnInit {
  paginationInfo = new PaginationInfo(AppConfig.settings.defaultPageSize);
  pageSizes = AppConfig.settings.pageSizes;
  orders: IOrder[] = [];

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
