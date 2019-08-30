import { Component, OnInit, HostBinding, Renderer2 } from '@angular/core';
import { ActiveOrderService } from 'src/app/services/active-order.service';
import { ICart, ILineItem } from 'src/app/models/dto/icart';
import { Observable } from 'rxjs';
import { CheckoutModalComponent } from '../checkout-modal/checkout-modal.component';
import { ConfirmService } from 'src/app/modules/confirm-modal/confirm-modal-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IToggleable } from 'src/app/models/itoggleable';
import { MobileViewService } from 'src/app/services/mobile-view.service';

@Component({
  selector: 'app-active-order-mobile',
  templateUrl: './active-order-mobile.component.html',
  styleUrls: ['./active-order-mobile.component.scss']
})
export class ActiveOrderMobileComponent implements OnInit, IToggleable {
  cart$: Observable<ICart>;
  isOpen = false;

  constructor(
    private activeOrderService: ActiveOrderService,
    private modalService: NgbModal,
    private confirmService: ConfirmService,
    private mobileSidebarService: MobileViewService
  ) {}

  ngOnInit() {
    this.cart$ = this.activeOrderService.Cart;
    this.cart$.subscribe();
    this.activeOrderService.refreshCart();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  closeSidebar() {
    this.mobileSidebarService.closeSidebar(this);
  }

  removeItem(item: ILineItem) {
    this.closeSidebar();
    const confirmOptions = {
      title: 'Line item removing',
      message:
        'Are you sure you want to remove this line item from the active order?'
    };
    this.confirmService
      .confirm(confirmOptions)
      .then(() => this.activeOrderService.removeItem(item.id).subscribe(), () => { });
  }

  clear() {
    this.closeSidebar();
    const confirmOptions = {
      title: 'Active order cleaning',
      message: 'Are you sure you want to clear the active order?'
    };
    this.confirmService
      .confirm(confirmOptions)
      .then(() => this.activeOrderService.clearAllItems().subscribe(), () => { });
  }

  checkout(cart: ICart) {
    this.closeSidebar();
    const modalRef = this.modalService.open(CheckoutModalComponent, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    modalRef.componentInstance.cart = cart;
    modalRef.result.then(result => {
      this.activeOrderService.createOrder().subscribe();
    }, () => { });
  }
}
