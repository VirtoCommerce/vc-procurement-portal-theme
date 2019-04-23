import { Component, OnInit, Input } from '@angular/core';
import { ActiveOrderService } from '../../../services/active-order.service';


@Component({
  selector: 'app-active-order-total',
  templateUrl: './active-order-total.component.html',
  styleUrls: ['./active-order-total.component.css']
})
export class ActiveOrderTotalComponent implements OnInit {
  @Input() isSummary: boolean = false;
  @Input() countItems: string;
  @Input() subTotal: string;
  @Input() shipping: string;
  @Input() total: string;

  constructor(
    private activeOrderService: ActiveOrderService
  ) { }

  ngOnInit() {

  }
}

