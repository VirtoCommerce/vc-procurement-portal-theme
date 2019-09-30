import { CartService } from '@services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { ICart } from '@models/dto/icart';

@Component({
  selector: 'app-change-product-quantity',
  templateUrl: './change-product-quantity.component.html',
  styleUrls: ['./change-product-quantity.component.scss'],
})
export class ChangeProductQuantityComponent implements OnInit {
  @Input() isProductPage = false;
  @Input() cart: ICart;
  @Input() productId: string;
  @Input() inStock: number;
  public quantity = 0;

  constructor(private cartValidationService: CartService) {
  }

  ngOnInit() {
  }

  public addProductToCart() {
    this.cartValidationService.addProductToCart(this.productId);
  }

  public async changeQuantity(value: number, byStep: boolean) {
    await this.cartValidationService.changeQuantity(this.productId, value, byStep, this.inStock);
  }

  public isInCart() {
    const isInCart = this.cartValidationService.isInCart(this.productId);
    if (isInCart) {
      this.initQuantity();
    }

    return isInCart;
  }

  public isMoreThanInStock(quantity: number): boolean {
    return this.cartValidationService.isMoreThanInStock(quantity, this.inStock);
  }

  private initQuantity() {
    this.quantity = this.cartValidationService.inCartQuantity(this.productId);
  }

}
