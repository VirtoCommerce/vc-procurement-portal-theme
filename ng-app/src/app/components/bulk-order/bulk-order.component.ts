import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActiveOrderService } from '@api/active-order.service';
import { ICart } from 'src/app/models/dto/icart';

type tabs = 'manualy' | 'csv';

@Component({
  selector: 'app-bulk-order',
  templateUrl: './bulk-order.component.html',
  styleUrls: ['./bulk-order.component.scss']
})
export class BulkOrderComponent implements OnInit {
  cart$: Observable<ICart>;

  selectedTab: tabs = 'manualy'; // manualy or csv

  constructor(
    private activeOrderService: ActiveOrderService
  ) {

  }

  setSelectedTab(tabName: tabs) {
    this.selectedTab = tabName;
  }

  ngOnInit() {
    this.cart$ = this.activeOrderService.Cart;
    this.cart$.subscribe();
    this.activeOrderService.refreshCart();
  }

}


