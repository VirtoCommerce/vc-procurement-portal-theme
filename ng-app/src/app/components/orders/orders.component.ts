import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { Product } from "../../models/product";
import { Observable } from "rxjs";
// import { Store, select } from '@ngrx/store';
import { OrdersService } from "../../services/orders.service";
import { IOrder } from "../../models/iorder";
import { IOrders } from "../../models/iorders";
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Order } from "../../models/order";
import { User } from "../../models/user";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services";
import { PaginationInfo } from "src/app/models/inner/pagination-info";
import { PageSizeChangedArgs } from "../page-size-selector/page-size-selector.component";
import { AppConfig } from "src/app/services/app-config.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  orders: IOrder[] = [];
  users: User[] = [];
  displayedColumns: string[] = [
    "orderid",
    "status",
    "date",
    "items",
    "createdBy",
    "assignedTo",
    "total"
  ];
  dataSource: MatTableDataSource<IOrder>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  @Input() isForApprove = false;
  @Input() role: string;
  paginationInfo = new PaginationInfo(AppConfig.settings.defaultPageSize);
  pageSizes = AppConfig.settings.pageSizes;

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    console.log("orders component. getOrders");
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
        //this.dataSource = new MatTableDataSource(this.orders);
        //this.dataSource.paginator = this.paginator;
        //this.dataSource.sort = this.sort;
        //this.paginationInfo.page = data.metaData.pageNumber;
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
    console.log("GetHeroesSuccess: " + payload);
  }
}
