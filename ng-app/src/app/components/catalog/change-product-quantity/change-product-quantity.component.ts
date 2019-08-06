import { Component, OnInit, Input } from '@angular/core';
import { ActiveOrderService } from 'src/app/services/active-order.service';
import { ICart, ILineItem } from 'src/app/models/dto/icart';
import { IProduct } from 'src/app/models/dto/product';


@Component({
  selector: 'app-change-product-quantity',
  templateUrl: './change-product-quantity.component.html',
  styleUrls: ['./change-product-quantity.component.scss']
})
export class ChangeProductQuantityComponent implements OnInit {

  @Input()
  cart: ICart;
  @Input()
  productId: string;

  productQuantity: number;

  constructor(private readonly activeOrderService: ActiveOrderService) { }

  ngOnInit() {

  }

  get productLineItem() {
    return this.getProductLineItem(this.productId);
  }

  private getProductLineItem(productId: string): ILineItem {
     const lineItem = this.cart.items.find(x => x.productId === productId);
     return lineItem;
  }

  addProductToCart() {
    this.activeOrderService.addItem(this.productId).subscribe();
  }


  decrementQuantity(lineItem: ILineItem) {
    if (lineItem.quantity <= 1) {
      return;
    }
    lineItem.quantity--;
    this.activeOrderService.changeItemQuantity(lineItem.id, lineItem.quantity).subscribe();
  }

  incrementQuantity(lineItem: ILineItem) {
    lineItem.quantity++;
    this.activeOrderService.changeItemQuantity(lineItem.id, lineItem.quantity).subscribe();
  }

  updateLineItemQuantity() {
    const lineItem = this.productLineItem;
    this.activeOrderService.changeItemQuantity(lineItem.id, lineItem.quantity).subscribe();
  }


}
