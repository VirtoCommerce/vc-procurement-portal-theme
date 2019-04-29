import { Component, OnInit, Input } from '@angular/core';
import { ActiveOrderService } from '../../../services/active-order.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-active-order-total',
  templateUrl: './active-order-total.component.html',
  styleUrls: ['./active-order-total.component.css']
})
export class ActiveOrderTotalComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
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

  clear() {
    this.blockUI.start("Loading...");
    this.activeOrderService.Clear()
      .subscribe(
        (data: any) => {
          console.log('afterRemovedForActiveOrder 1');
          this.activeOrderService.afterRemovedForActiveOrder();
        },
        error => console.log("Clear:" + error)
      );

  }
}

