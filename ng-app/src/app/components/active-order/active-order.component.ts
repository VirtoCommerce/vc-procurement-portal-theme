import { CartService } from '@services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { ILineItem, ICart } from '@models/dto/icart';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.scss']
})
export class ActiveOrderComponent implements OnInit {
  @Input() cart: ICart;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  public removeItem(item: ILineItem) {
    this.cartService.remove(item.id);
  }

  public removeAll() {
    this.cartService.removeAll();
  }

  public checkout() {
    this.cartService.checkout();
  }
}
