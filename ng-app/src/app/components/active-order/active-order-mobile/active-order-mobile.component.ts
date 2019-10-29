import { Component, OnInit, Input } from '@angular/core';
import { ICart, ILineItem } from '@models/dto/icart';
import { IToggleable } from '@models/itoggleable';
import { MobileViewService } from '@services/mobile-view.service';
import { CartService } from '@services/cart.service';

@Component({
  selector: 'app-active-order-mobile',
  templateUrl: './active-order-mobile.component.html',
  styleUrls: ['./active-order-mobile.component.scss']
})
export class ActiveOrderMobileComponent implements OnInit, IToggleable {
  @Input() cart: ICart;
  isOpen = false;

  constructor(
    private mobileSidebarService: MobileViewService,
    private cartService: CartService
  ) { }

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
    this.cartService.checkout();
  }
}
