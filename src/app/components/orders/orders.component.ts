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
  displayedColumns: string[] = ['orderid', 'status', 'date','items', 'createdBy', 'assignedTo', 'total'];
  dataSource: MatTableDataSource<IOrder>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  @Input() isForApprove: boolean = false;

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    
    this.ordersService.getOrders().subscribe((data: any) => {
      //console.log(data);
      this.orders = data[1].results as IOrder[];
      console.log(this.orders[1].items.length);
      if (this.isForApprove){
        this.orders = this.orders.filter(order=>order.status==='Awaiting Approve')
      }
      this.dataSource = new MatTableDataSource(this.orders);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });

    // this.ordersService.getUsers().subscribe((data: any) => {
    //   console.log(data);
    //   this.users = data as User[];
    // });

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

