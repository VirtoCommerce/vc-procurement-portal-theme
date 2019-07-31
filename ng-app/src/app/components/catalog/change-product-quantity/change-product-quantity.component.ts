import { Component, OnInit, Input } from '@angular/core';
import { ActiveOrderService } from 'src/app/services/active-order.service';
import { ICart, ILineItem } from 'src/app/models/icart';
import { IProduct } from 'src/app/models/product';


@Component({
  selector: 'app-change-product-quantity',
  templateUrl: './change-product-quantity.component.html',
  styleUrls: ['./change-product-quantity.component.scss']
})
export class ChangeProductQuantityComponent implements OnInit {

  @Input()
  cart: ICart;
  @Input()
  product: IProduct;

  productQuantity: number;

  constructor(private readonly activeOrderService: ActiveOrderService) { }

  ngOnInit() {

  }

  get productLineItem() {
    return this.getProductLineItem(this.product.id);
  }

  private getProductLineItem(productId: string): ILineItem {
     const lineItem = this.cart.items.find(x => x.productId === productId);
     return lineItem;
  }

  addProductToCart() {
    this.activeOrderService.AddItem(this.product.id).subscribe();
  }


  decrementQuantity(lineItem: ILineItem) {
    if (lineItem.quantity <= 1) {
      return;
    }
    lineItem.quantity--;
    this.activeOrderService.ChangeItemQuantity(lineItem.id, lineItem.quantity).subscribe();
  }

  incrementQuantity(lineItem: ILineItem) {
    lineItem.quantity++;
    this.activeOrderService.ChangeItemQuantity(lineItem.id, lineItem.quantity).subscribe();
  }

  updateLineItemQuantity() {
    const lineItem = this.productLineItem;
    this.activeOrderService.ChangeItemQuantity(lineItem.id, lineItem.quantity).subscribe();
  }


}
