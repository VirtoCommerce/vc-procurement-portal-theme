import { Component, OnInit } from '@angular/core';
import { ActiveOrderService } from '../../../services/active-order.service';


@Component({
  selector: 'app-active-order-total',
  templateUrl: './active-order-total.component.html',
  styleUrls: ['./active-order-total.component.css']
})
export class ActiveOrderTotalComponent implements OnInit {
  countItems: number;
  constructor(
    private activeOrderService: ActiveOrderService
  ) {  }

  ngOnInit() {
    this.activeOrderService.getCountItems()
      .subscribe(
        (data: any) => {
          //var myObj = JSON.parse(data);
          this.countItems = data;
        }
      );

  }
}

