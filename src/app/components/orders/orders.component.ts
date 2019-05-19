import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { OrdersService } from '../../services/orders.service';
import { Hero } from '../../models/hero';
import { IOrder } from '../../models/iorder';
import { IOrders } from '../../models/iorders';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Order } from '../../models/order';
import { User } from '../../models/user';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  orders: IOrder[] = [];
  users: User[] = [];
  displayedColumns: string[] = ['orderid', 'status', 'date', 'items', 'createdBy', 'assignedTo', 'total'];
  dataSource: MatTableDataSource<IOrder>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  @Input() isForApprove: boolean = false;

  constructor(
    private ordersService: OrdersService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("orders component. getOrders");
    this.ordersService.getOrders().subscribe((data: any) => {
      this.orders = data[1].results as IOrder[];
      if (this.isForApprove) {
        this.orders = this.orders.filter(order => order.status === 'Awaiting Approve')
      }
      this.dataSource = new MatTableDataSource(this.orders);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  Details(id: string) {
    if (this.isForApprove) {
      this.router.navigate(['/forapproval-details', id]);
    } else {
      this.router.navigate(['/order-details', id]);
    }

  }
}


export class OrderError implements OnInit {
  ngOnInit() {
  }

  constructor(public payload: any) {
    console.log(payload);
  }
}

export class GetOrdersSuccess implements OnInit {
  ngOnInit() {
  }

  constructor(public payload: any) {
    console.log('GetHeroesSuccess: ' + payload);
  }
}

