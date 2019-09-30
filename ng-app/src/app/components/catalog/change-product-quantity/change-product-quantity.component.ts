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
  public quantity = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  public addProductToCart() {
    this.cartService.addProductToCart(this.productId);
  }

  public async changeQuantity(value: number, byStep: boolean) {
    await this.cartService.changeQuantity(this.productId, value, byStep, this.inStock);
  }

  public isInCart() {
    const isInCart = this.cartService.isInCart(this.productId);
    if (isInCart) {
      this.initQuantity();
    }

    return isInCart;
  }

  public isMoreThanInStock(): boolean {
    return this.cartService.isMoreThanInStock(this.quantity, this.inStock);
  }

  private initQuantity() {
    this.quantity = this.cartService.inCartQuantity(this.productId);
  }

}
