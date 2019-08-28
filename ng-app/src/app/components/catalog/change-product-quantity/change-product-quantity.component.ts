import { Component, OnInit, Input, OnDestroy, ElementRef } from '@angular/core';
import { ActiveOrderService } from 'src/app/services/active-order.service';
import { ICart, ILineItem } from 'src/app/models/dto/icart';
import { ConfirmService } from 'src/app/modules/confirm-modal/confirm-modal-service';
import { Subject, Subscription, EMPTY } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { element } from 'protractor';


@Component({
  selector: 'app-change-product-quantity',
  templateUrl: './change-product-quantity.component.html',
  styleUrls: ['./change-product-quantity.component.scss']
})
export class ChangeProductQuantityComponent implements OnInit, OnDestroy {

  @Input()
  cart: ICart;
  @Input()
  productId: string;


  productQuantity$ = new Subject<number>();
  private quantitySub: Subscription;

  constructor(private readonly activeOrderService: ActiveOrderService, private confirmService: ConfirmService) {
   }

  ngOnInit() {
    this.quantitySub = this.productQuantity$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(quantity => {
        console.log('New quantity: ', quantity);
        this.updateLineItemQuantity(+quantity);
        return EMPTY;
      })
    ).subscribe();
  }

  get productLineItem() {
    return this.getProductLineItem(this.productId);
  }

  removeItem(item: ILineItem) {
    const confirmOptions = { title: 'Line item removing', message: 'Are you sure you want to remove this line item from the active order?' };
    this.confirmService.confirm(confirmOptions).then(() => this.activeOrderService.removeItem(item.id).subscribe(), () => { } );
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
      this.removeItem(lineItem);
      return;
    }
    lineItem.quantity--;
    this.activeOrderService.changeItemQuantity(lineItem.id, lineItem.quantity).subscribe();
  }

  incrementQuantity(lineItem: ILineItem) {
    lineItem.quantity++;
    this.activeOrderService.changeItemQuantity(lineItem.id, lineItem.quantity).subscribe();
  }

  onChangeQuantity(quantityText: string) {
    const quantity = +quantityText;
    if (quantity) {
      this.productQuantity$.next(quantity);
    }
  }

  updateLineItemQuantity(quantity: number) {
    const lineItem = this.productLineItem;
    this.activeOrderService.changeItemQuantity(lineItem.id, quantity).subscribe();
  }

  ngOnDestroy(): void {
    if (this.quantitySub) {
      this.quantitySub.unsubscribe();
      this.quantitySub = null;
    }

  }


}
