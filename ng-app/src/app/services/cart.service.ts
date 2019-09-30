import { Injectable } from '@angular/core';
import { ActiveOrderService } from '@api/active-order.service';
import { AlertsService } from '@modules/alerts/alerts.service';
import { ConfirmService } from '@modules/confirm-modal/confirm-modal-service';
import { Subject } from 'rxjs';
import { ILineItem, ICart } from '@models/dto/icart';
import { shareReplay, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productQuantityChanging$ = new Subject<ILineItem>();
  private _blockAddingToCart = false;
  private cart: ICart;

  constructor(private readonly activeOrderService: ActiveOrderService,
              private confirmService: ConfirmService,
              private alertsService: AlertsService) {

    this.productQuantityChanging$.pipe(
      shareReplay(),
      debounceTime(300),
      distinctUntilChanged())
      .subscribe(async (product: ILineItem) => {
        this.activeOrderService.changeItemQuantity(product.id, product.quantity).subscribe();
      });

    this.activeOrderService.Cart.subscribe((cart: ICart) => {
      this.cart = cart;
    });
  }

  public isInCart(productId: string): boolean {
    if (this.cart == null) {
      return false;
    }

    const product = this.findProductInCart(this.cart, productId);
    return product != null ? true : false;
  }

  public inCartQuantity(productId: string): number {
    if (this.isInCart(productId)) {
      return this.findProductInCart(this.cart, productId).quantity;
    }

    return 0;
  }

  public addProductToCart(productId: string) {
    if (!this.isInCart(productId) && !this._blockAddingToCart) {
      this._blockAddingToCart = true;
      this.activeOrderService.addItem(productId).subscribe(() => this._blockAddingToCart = false);
    }
  }

  public isMoreThanInStock(newQuantity: number, inStock: number) {
    return newQuantity > inStock;
  }

  public async changeQuantity(productId: string,
                              value: number,
                              byStep: boolean,
                              inStock: number) {
    const product = this.findProductInCart(this.cart, productId);
    if (this.isInCart(productId)) {
      if (byStep) {
        product.quantity += value;
      } else {
        product.quantity = +value;
      }
    }

    if (product.quantity < 1) {
      // by default = 1
      product.quantity = 1;
      const dialogResult = await this.showApproveDeletionConfirmation(product.quantity);
      if (dialogResult === true) {
        this.activeOrderService.removeItem(product.id).subscribe();
        return;
      }
    }

    if (this.isMoreThanInStock(product.quantity, inStock)) {
      this.alertsService.warn(`\"${product.name}\" is not in stock in the requested quantity ${product.quantity}. Available: ${inStock}`);
      this.cart.isValid = false;
    } else {
      this.cart.isValid = true;
      this.productQuantityChanging$.next(product);
    }
  }

  public remove(lineItemId: string) {
    this.activeOrderService.removeItem(lineItemId).subscribe();
  }

  private showApproveDeletionConfirmation(newQuantity: number): Promise<boolean> {
    const confirmOptions = {
      title: 'Line item removing',
      backdrop: 'static',
      message: 'Are you sure you want to remove this line item from the active order?'
    };

    return this.confirmService.confirm(confirmOptions).then(() => true, () => false);
  }

  private findProductInCart(cart: ICart, productId: string): ILineItem {
    return cart.items.find(x => x.productId === productId);
  }
}
