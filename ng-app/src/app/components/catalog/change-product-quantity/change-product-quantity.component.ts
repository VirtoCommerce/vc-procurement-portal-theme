import { CartService } from '@services/cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-change-product-quantity',
  templateUrl: './change-product-quantity.component.html',
  styleUrls: ['./change-product-quantity.component.scss'],
})
export class ChangeProductQuantityComponent implements OnInit {
  @Input() isProductPage = false;
  @Input() productId: string;
  @Input() inStock: number;
  quantity = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  addProductToCart() {
    this.cartService.addProductToCart(this.productId);
  }

  onKeydown(event: any) {
    if (event.key === 'Enter') {
      this.textChanged(event.target.value);
    }
  }

  async textChanged(textValue: string) {
    const value = parseInt(textValue, 10);
    if (!isNaN(value)) {
      await this.cartService.changeQuantity(this.productId, value, false, this.inStock);
    }
  }

  async increment() {
    await this.cartService.changeQuantity(this.productId, 1, true, this.inStock);
  }
  async decrement() {
    await this.cartService.changeQuantity(this.productId, -1, true, this.inStock);
  }

  // private async changeQuantity(value: number, byStep: boolean) {
  //     await this.cartService.changeQuantity(this.productId, value, byStep, this.inStock);
  // }

  isInCart() {
    const isInCart = this.cartService.isInCart(this.productId);
    if (isInCart) {
      this.initQuantity();
    }

    return isInCart;
  }

  isMoreThanInStock(): boolean {
    return this.cartService.isMoreThanInStock(this.quantity, this.inStock);
  }

  private initQuantity() {
    this.quantity = this.cartService.getCartProductQuantity(this.productId);
  }

}
