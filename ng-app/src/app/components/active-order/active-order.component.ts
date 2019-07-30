import { Component, OnInit, Input, isDevMode } from '@angular/core';
import { ActiveOrderService } from '../../services/active-order.service';
import { Product } from '../../models/product';



import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services';
import { first } from 'rxjs/operators';
import { IActiveOrder, IActiveOrderCurrency } from '../../models/iactive-order';
import { Observable } from 'rxjs';
import { ILineItem, ICart } from 'src/app/models/icart';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.scss']
})
export class ActiveOrderComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  cart$: Observable<ICart>;

  constructor(
    private activeOrderService: ActiveOrderService,
  ) {
    // this.currentUser = this.authenticationService.currentUserValue;
  }


  ngOnInit() {
    this.cart$ = this.activeOrderService.Cart;
    this.cart$.subscribe();
    this.activeOrderService.refreshCart();
  }


  removeItem(item: ILineItem) {
    this.activeOrderService.removeItem(item.id).subscribe();
  }

  clear() {
    this.activeOrderService.clearAllItems().subscribe();
  }

  decrementQuantity(item: ILineItem) {
    if (item.quantity <= 1) { return; }
    item.quantity--;
    this.activeOrderService.ChangeItemQuantity(item.id, item.quantity).subscribe();
  }

  incrementQuantity(item: ILineItem) {
    item.quantity++;
    this.activeOrderService.ChangeItemQuantity(item.id, item.quantity).subscribe();
  }

  updateLineItemQuantity(lineItem: ILineItem) {
    //const lineItem = this.productLineItem;
    this.activeOrderService.ChangeItemQuantity(lineItem.id, lineItem.quantity).subscribe();
  }

  checkout(cart: ICart) {
    console.log(cart);
  }

}

