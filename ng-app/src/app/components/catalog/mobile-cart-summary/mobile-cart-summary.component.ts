import { Component, OnInit, Input } from '@angular/core';
import { ICart } from 'src/app/models/dto/icart';
import { Observable } from 'rxjs';
import { ActiveOrderService } from 'src/app/services/active-order.service';

@Component({
  selector: 'app-mobile-cart-summary',
  templateUrl: './mobile-cart-summary.component.html',
  styleUrls: ['./mobile-cart-summary.component.scss']
})
export class MobileCartSummaryComponent implements OnInit {
  cart$: Observable<ICart>;

  constructor(private activeOrderService: ActiveOrderService) { }

  ngOnInit() {
    this.cart$ = this.activeOrderService.Cart;
    this.cart$.subscribe();
  }

}
