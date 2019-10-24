import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { ActiveOrderService } from '@api/active-order.service';
import { AlertsService } from '@modules/alerts/alerts.service';
import { ConfirmService } from '@modules/confirm-modal/confirm-modal-service';
import { Subject } from 'rxjs';
import { ILineItem, ICart } from '@models/dto/icart';
import { shareReplay, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CheckoutModalComponent } from '@components/active-order/checkout-modal/checkout-modal.component';
import { WorkflowStorageService } from './workflow-storage.service';
import { OrdersService } from '@api/orders.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productQuantityChanging$ = new Subject<ILineItem>();
  private _blockAddingToCart = false;
  private cart: ICart;

  constructor(private readonly activeOrderService: ActiveOrderService,
              private confirmService: ConfirmService,
              private alertsService: AlertsService,
              private modalService: NgbModal,
              private workflowService: WorkflowStorageService,
              private orderService: OrdersService) {

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

  isInCart(productId: string): boolean {
    if (this.cart == null) {
      return false;
    }

    const item = this.findItemInCart(this.cart, productId);
    return item != null ? true : false;
  }

  getCartProductQuantity(productId?: string): number {
    const item = this.findItemInCart(this.cart, productId);
    if (item != null) {
        return item.quantity;
    } else {
      return 0;
    }
  }

  addProductToCart(productId: string) {
    if (!this.isInCart(productId) && !this._blockAddingToCart) {
      this._blockAddingToCart = true;
      this.activeOrderService.addItem(productId).subscribe(() => this._blockAddingToCart = false);
    }
  }

  isMoreThanInStock(newQuantity: number, inStock: number) {
    return newQuantity > inStock;
  }

  async changeQuantity(productId: string, value: number, byStep: boolean, inStock: number) {
    const lineItem = this.findItemInCart(this.cart, productId);
    if (!!lineItem) {
      if (byStep) {
        lineItem.quantity += value;
      } else {
        lineItem.quantity = value;
      }
    }

    if (lineItem.quantity < 1) {
      // by default = 1
      lineItem.quantity = 1;
      const dialogResult = await this.showRemoveConfirmation();
      if (dialogResult === true) {
        this.activeOrderService.removeItem(lineItem.id).subscribe();
        return;
      }
    }

    if (this.isMoreThanInStock(lineItem.quantity, inStock)) {
      this.alertsService.warn(`\"${lineItem.name}\" is not in stock in the requested quantity ${lineItem.quantity}. Available: ${inStock}`);
      this.cart.isValid = false;
    } else {
      this.cart.isValid = true;
      this.productQuantityChanging$.next(lineItem);
    }
  }

  async remove(lineItemId: string) {
    if (await this.showRemoveConfirmation()) {
      this.activeOrderService.removeItem(lineItemId).subscribe();
    }
  }

  async removeAll() {
    if (await this.showRemoveAllConfirmation()) {
      this.activeOrderService.clearAllItems().subscribe();
    }
  }

  async checkout() {
    const modalRef = this.modalService.open(CheckoutModalComponent, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    modalRef.componentInstance.cart = this.cart;
    await modalRef.result.then(() => {
      this.activeOrderService.createOrder().subscribe(async (orderInfo) => {
        const activeWorkflow = this.workflowService.getActiveWorkflow();
        if (activeWorkflow.IsSystem) {
          await this.orderService.changeOrderStatus(orderInfo.order.number, 'Completed');
        }
        this.alertsService.success(`Order is created successfully!`);
      });
    }, () => { });
  }

  private showRemoveConfirmation(): Promise<boolean> {
    const confirmOptions = {
      title: 'Line item removing',
      backdrop: 'static',
      message: 'Are you sure you want to remove this line item from the active order?'
    };

    return this.confirmService.confirm(confirmOptions).then(() => true, () => false);
  }

  private showRemoveAllConfirmation() {
    const confirmOptions = {
      title: 'Active order cleaning',
      backdrop: 'static',
      message: 'Are you sure you want to clear the active order?'
    };

    return this.confirmService.confirm(confirmOptions).then(() => true, () => false);
  }

  private findItemInCart(cart: ICart, productId: string): ILineItem {
    return cart.items.find(x => x.productId === productId);
  }
}
