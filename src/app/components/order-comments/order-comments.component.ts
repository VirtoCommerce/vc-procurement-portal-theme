import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { IOrder, IOrderComment } from '../../models/iorder';

@Component({
  selector: 'app-order-comments',
  templateUrl: './order-comments.component.html',
  styleUrls: ['./order-comments.component.css']
})

export class OrderCommentsComponent implements OnInit {
  @Input() isForApprove: boolean = false;
  id: any;
  // items: IOrderComment[];
  @Input() comments: IOrderComment[];
  @Input() order: IOrder;

  
  constructor(
    private ordersService: OrdersService,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    // this.ordersService.getOrders().subscribe((data: any) => {
    //   let orders = data[1].results as IOrder[];
    //   orders = orders.filter(order => order.id === this.id)
    //   console.log("Order length: " + orders.length);
    //   this.comments = orders[0].comments as IOrderComment[];
    //   console.log("???: " + (orders[0].comments as IOrderComment[]).length);
    //   this.items = orders[0].comments as IOrderComment[];
    // });
  }
}