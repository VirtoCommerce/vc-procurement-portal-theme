import { CartService } from '@services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { ILineItem, ICart } from '@models/dto/icart';
import { CustomSpinnerComponent } from '@components/blockUI/custom-spinner/custom-spinner.component';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.scss']
})
export class ActiveOrderComponent implements OnInit {
  @Input() cart: ICart;
  customSpinner = CustomSpinnerComponent;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  get canCheckout() {
    return this.cart.isValid && this.cart.itemsCount > 0;
  }

  public removeItem(item: ILineItem) {
    this.cartService.remove(item);
  }

  public removeAll() {
    this.cartService.removeAll();
  }

  public checkout() {
    this.cartService.checkout();
  }
}
