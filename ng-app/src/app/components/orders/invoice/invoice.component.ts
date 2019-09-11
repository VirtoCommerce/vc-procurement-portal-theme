import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrdersService } from '@api/orders.service';
import { IOrder, IOrderItem } from '@models/dto/iorder';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  order: IOrder;
  items: IOrderItem[];
  constructor(
    private orderService: OrdersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.route.params);
    this.route.paramMap.pipe(switchMap(params => this.orderService.getOrder(params.get('id'))))
    .subscribe((data: any) => {
      this.order = data as IOrder;
      this.items = data.items;
    });
  }

  getInvoicePdf(orderNumber: string) {
    const url = 'storefrontapi/orders/' + `${orderNumber}` + '/invoice';
    window.open(url, '_blank');
  }
}
