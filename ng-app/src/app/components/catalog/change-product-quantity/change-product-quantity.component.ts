import { AlertsService } from './../../../modules/alerts/alerts.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActiveOrderService } from '@api/active-order.service';
import { ICart, ILineItem } from '@models/dto/icart';
import { ConfirmService } from '@modules/confirm-modal/confirm-modal-service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-change-product-quantity',
  templateUrl: './change-product-quantity.component.html',
  styleUrls: ['./change-product-quantity.component.scss'],
})
export class ChangeProductQuantityComponent implements OnInit, OnDestroy {
  private _blockQuantityChanging = false;
  private _blockAddingToCart = false;
  private quantityChangingSubscription$: Subscription;
  private cartSubscription$: Subscription;
  @Input() isProductPage = false;
  @Input() cart: ICart;
  @Input() productId: string;
  public product: ILineItem;
  public productQuantityChanging$ = new Subject<number>();
  public quantity = 0;

  constructor(private readonly activeOrderService: ActiveOrderService,
              private confirmService: ConfirmService,
              private alertsService: AlertsService) {
  }

  ngOnInit() {
    this.quantityChangingSubscription$ = this.productQuantityChanging$.pipe(
      shareReplay(),
      debounceTime(300),
      distinctUntilChanged())
      .subscribe(async newQuantity => {
        if (!this._blockQuantityChanging) {
          this.activeOrderService.changeItemQuantity(this.product.id, newQuantity).subscribe();
        }
      });

    this.product = this.findProductInCart(this.cart, this.productId);
    this.quantity = this.getProductQuantityInCart(this.product);

    this.cartSubscription$ = this.activeOrderService.Cart.subscribe((cart: ICart) => {
      this.product = this.findProductInCart(cart, this.productId);
      this.quantity = this.getProductQuantityInCart(this.product);
    });
  }

  public addProductToCart() {
    if (!this.isInCart(this.product) && !this._blockAddingToCart) {
      this._blockAddingToCart = true;
      this.activeOrderService.addItem(this.productId).subscribe(() => this._blockAddingToCart = false);
    }
  }

  public async changeQuantity(value: number, byStep: boolean) {
    if (this.isInCart(this.product)) {
      if (byStep) {
        this.quantity += value;
      } else {
        this.quantity = +value;
      }
    }

    if (this.quantity < 1) {
      if (await this.showApproveDeletionConfirmation(this.quantity)) {
        this.activeOrderService.removeItem(this.product.id).subscribe();
        return;
      } else {
        // rollback the initial product quantity
        this.quantity = this.product.quantity;
        return;
      }
    }

    if (this.isMoreThanInStock(this.quantity)) {
      this.alertsService.warn(`\"${this.product.name}\" is not in stock in the requested quantity ${this.quantity}. Available: ${this.product.inStockQuantity}`);
    } else {
      this.productQuantityChanging$.next(this.quantity);
    }
  }

  ngOnDestroy(): void {
    if (this.quantityChangingSubscription$ != null) {
      this.quantityChangingSubscription$.unsubscribe();
      this.quantityChangingSubscription$ = null;
    }

    if (this.cartSubscription$ != null) {
      this.cartSubscription$.unsubscribe();
      this.cartSubscription$ = null;
    }
  }

  private showApproveDeletionConfirmation(newQuantity: number): Promise<boolean> {
    if (newQuantity < 1) {
      const confirmOptions = {
        title: 'Line item removing',
        backdrop: 'static',
        message: 'Are you sure you want to remove this line item from the active order?'
      };

      this._blockQuantityChanging = true;
      return this.confirmService.confirm(confirmOptions).then(() => true, () => false).finally(() => {
        this._blockQuantityChanging = false;
      });
    }
  }

  private isInCart(product: ILineItem): boolean {
    return product != null ? true : false;
  }

  private isMoreThanInStock(newQuantity: number) {
    return newQuantity > this.product.inStockQuantity;
  }

  private getProductQuantityInCart(product: ILineItem): number {
    if (this.isInCart(product)) {
      return this.product.quantity;
    } else {
      return 0;
    }
  }

  private findProductInCart(cart: ICart, productId: string): ILineItem {
    return this.product = cart.items.find(x => x.productId === productId);
  }
}
