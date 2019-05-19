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
  selector: 'app-forapproval-details',
  templateUrl: './forapproval-details.component.html',
  styleUrls: ['./forapproval-details.component.css']
})

export class ForApprovalDetailsComponent implements OnInit {
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
  }

  ngOnInit() {
    console.log("for approval-details component. getOrders");
  }
}