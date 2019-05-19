import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IOrder, IOrderItem, IOrderComment } from '../../../models/iorder';
import { OrdersService } from '../../../services/orders.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})

export class OrderDetailsComponent implements OnInit {
  isForApprove: boolean;
  id: any;
  private sub: any;
  order: IOrder;
  items: IOrderItem[];
  comments: IOrderComment[];


  constructor(
    private ordersService: OrdersService,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params['id'];
    let test = activateRoute.snapshot.params['isApproval'];
    console.log("Test: " + test);
  }

  ngOnInit() {
    console.log("order-details component. getOrders");
    this.ordersService.getOrders().subscribe((data: any) => {
      let orders = data[1].results as IOrder[];
      orders = orders.filter(order => order.id === this.id)
      this.order = orders[0] as IOrder;
      this.items = orders[0].items as IOrderItem[];
      this.comments = orders[0].comments as IOrderComment[];
      //console.log("Order items: " + this.order.items.length);
      console.log("Order items: " + this.items.length);
      // console.log("Order role: " + this.order.toRole);
      // console.log("Order comments: " + this.order.comments.length);
    });
  }
}