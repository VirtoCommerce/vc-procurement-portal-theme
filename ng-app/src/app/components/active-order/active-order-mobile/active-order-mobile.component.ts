import { Component, OnInit, Input } from '@angular/core';
import { ICart, ILineItem } from '@models/dto/icart';
import { IToggleable } from '@models/itoggleable';
import { MobileViewService } from '@services/mobile-view.service';
import { CartService } from '@services/cart.service';
import { CustomSpinnerComponent } from '@components/blockUI/custom-spinner/custom-spinner.component';

@Component({
  selector: 'app-active-order-mobile',
  templateUrl: './active-order-mobile.component.html',
  styleUrls: ['./active-order-mobile.component.scss']
})
export class ActiveOrderMobileComponent implements OnInit, IToggleable {
  @Input() cart: ICart;
  isOpen = false;
  customSpinner = CustomSpinnerComponent;

  constructor(
    private mobileSidebarService: MobileViewService,
    private cartService: CartService
  ) { }

  get canCheckout() {
    return this.cart.isValid && this.cart.itemsCount > 0;
  }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  closeSidebar() {
    this.mobileSidebarService.closeSidebar(this);
  }

  removeItem(item: ILineItem) {
    this.cartService.remove(item);
  }

  removeAll() {
    this.cartService.removeAll();
  }

  checkout() {
    this.cartService.checkout().then(() => this.closeSidebar());
  }
}
