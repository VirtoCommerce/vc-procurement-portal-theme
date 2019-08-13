import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
//import { Store, select } from '@ngrx/store';
import { catchError, map, tap, pluck, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IOrder, IOrderItem, IOrderComment } from '../../../models/dto/iorder';
import { OrdersService } from '../../../services/orders.service';
import { ActiveOrderService } from 'src/app/services/active-order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  isForApprove: boolean;
  id: any;
  private sub: any;
  order: IOrder;
  items: IOrderItem[];
  comments: IOrderComment[];
  subTotal: string;
  shipping: string;
  total: string;
  createdBy: string;
  status: string;

  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private readonly activeOrderService: ActiveOrderService
  ) {}

  ngOnInit() {
    // this.ordersService.getOrders().subscribe((data: any) => {
    //   let orders = data.results as IOrder[];
    //   orders = orders.filter(order => order.id === this.id);
    //   this.order = orders[0] as IOrder;
    //   this.items = orders[0].items as IOrderItem[];
    //   this.comments = orders[0].comments as IOrderComment[];
    // });
    console.log(this.route.params);
    this.route.paramMap
      .pipe(switchMap(params => this.ordersService.getOrder(params.get('id'))))
      .subscribe((data: any) => {
        this.order = data as IOrder;
        this.items = data.items;
        this.subTotal = this.order.subTotal.formattedAmount;
        this.shipping = this.order.shippingTotal.formattedAmount;
        this.total = this.order.total.formattedAmount;
        this.createdBy = this.order.createdBy;
        this.status = this.order.status;
        console.log('Order: ', this.order);
        console.log('Items: ', this.items);
      });
  }

  toggleAccordion(event) {
    event.target.parentElement.classList.toggle('accordion__item--active');
  }

  addProductToCart() {
    this.items.forEach(item => {
      this.activeOrderService.addItem(item.productId, item.quantity).subscribe();
    });
  }
}
