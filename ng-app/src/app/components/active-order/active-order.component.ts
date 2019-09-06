import { Component, OnInit, Input } from '@angular/core';
import { ActiveOrderService } from '../../services/active-order.service';
import { ILineItem, ICart } from 'src/app/models/dto/icart';
import { ConfirmService } from 'src/app/modules/confirm-modal/confirm-modal-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';
import { AlertsService } from 'src/app/modules/alerts/alerts.service';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.scss']
})
export class ActiveOrderComponent implements OnInit {
  @Input()
  cart: ICart;

  constructor(
    private activeOrderService: ActiveOrderService,
    private confirmService: ConfirmService,
    private modalService: NgbModal,
    private aletsService: AlertsService
    ) {}

  ngOnInit() {    
  }

  removeItem(item: ILineItem) {
    const confirmOptions = { title: 'Line item removing', message: 'Are you sure you want to remove this line item from the active order?' };
    this.confirmService.confirm(confirmOptions).then(() => this.activeOrderService.removeItem(item.id).subscribe(), () => { });
  }

  clear() {
    const confirmOptions = { title: 'Active order cleaning', message: 'Are you sure you want to clear the active order?' };
    this.confirmService.confirm(confirmOptions).then(() => this.activeOrderService.clearAllItems().subscribe(), () => { } );
  }

  decrementQuantity(item: ILineItem) {
    if (item.quantity <= 1) {
      this.removeItem(item);
      return;
    }
    item.quantity--;
    this.activeOrderService
      .changeItemQuantity(item.id, item.quantity)
      .subscribe();
  }

  incrementQuantity(item: ILineItem) {
    item.quantity++;
    this.activeOrderService
      .changeItemQuantity(item.id, item.quantity)
      .subscribe();
  }

  updateLineItemQuantity(lineItem: ILineItem) {
    this.activeOrderService
      .changeItemQuantity(lineItem.id, lineItem.quantity)
      .subscribe();
  }

  checkout(cart: ICart) {
    const modalRef = this.modalService.open(CheckoutModalComponent, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    modalRef.componentInstance.cart = cart;
    modalRef.result.then(result => {
      this.activeOrderService.createOrder().subscribe(() => this.aletsService.success(`Order is created successfuly!`));
    }, () => { });
  }
}
