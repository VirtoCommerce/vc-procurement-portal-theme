import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { IOrder, IOrderItem } from '../../models/iorder';
import { Product } from '../../models/product';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})

export class OrderItemsComponent implements OnInit {

  @Input() isForApprove: boolean = false;
  @Input() items: IOrderItem[];
  id: any;
  displayedColumns: string[] = ['image', 'name', 'price',];
  dataSource: MatTableDataSource<IOrderItem>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() order: IOrder;

  constructor(
    private ordersService: OrdersService,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    // this.items = this.order.items as IOrderItem[];
    // console.log("items: "+ this.items.length);
    this.dataSource = new MatTableDataSource(this.items);
    this.dataSource.paginator = this.paginator;

    // this.ordersService.getOrders().subscribe((data: any) => {
    //   let orders = data[1].results as IOrder[];
    //   orders = orders.filter(order => order.id === this.id)
    //   this.items = orders[0].items as IOrderItem[];
    //   console.log('Length: ' + this.items.length);
    //   this.dataSource = new MatTableDataSource(this.items);
    //   this.dataSource.paginator = this.paginator;
    //   //this.dataSource.sort = this.sort;
    // });
  }
}