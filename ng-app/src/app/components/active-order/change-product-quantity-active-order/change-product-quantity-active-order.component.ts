import { CartService } from '@services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { ILineItem } from '@models/dto/icart';
import { MobileViewService } from '@services/mobile-view.service';
import { ActiveOrderMobileComponent } from '@components/active-order/active-order-mobile/active-order-mobile.component';

@Component({
  selector: 'app-change-product-quantity-active-order',
  templateUrl: './change-product-quantity-active-order.component.html',
  styleUrls: ['./change-product-quantity-active-order.component.scss']
})
export class ChangeProductQuantityActiveOrderComponent implements OnInit {
  @Input() lineItem: ILineItem;
  @Input() activeOrderMobileSidebar: ActiveOrderMobileComponent;

  constructor(private cartService: CartService,
              private mobileSidebarService: MobileViewService,
              ) {
  }

  ngOnInit() {
  }

  removeItem(item: ILineItem) {
    if (this.activeOrderMobileSidebar) {
      this.mobileSidebarService.closeSidebar(this.activeOrderMobileSidebar);
    }

    this.cartService.remove(item.id);
  }

  public async changeQuantity(value: number, byStep: boolean) {
    await this.cartService.changeQuantity(this.lineItem.productId, value, byStep, this.lineItem.inStockQuantity);
  }

  public isMoreThanInStock(): boolean {
    return this.cartService.isMoreThanInStock(this.lineItem.quantity, this.lineItem.inStockQuantity);
  }
}
