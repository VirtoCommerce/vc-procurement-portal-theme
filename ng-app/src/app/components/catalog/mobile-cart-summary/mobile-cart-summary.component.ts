import { Component, OnInit, Input } from '@angular/core';
import { ICart } from '@models/dto/icart';
import { ActiveOrderService } from '@api/active-order.service';
import { ActiveOrderMobileComponent } from '@components/active-order/active-order-mobile/active-order-mobile.component';
import { MobileViewService } from '@services/mobile-view.service';


@Component({
  selector: 'app-mobile-cart-summary',
  templateUrl: './mobile-cart-summary.component.html',
  styleUrls: ['./mobile-cart-summary.component.scss']
})
export class MobileCartSummaryComponent implements OnInit {
  @Input() activeOrderMobileSidebar: ActiveOrderMobileComponent;
  @Input()
  cart: ICart;

  openSidebar() {
    this.mobileSidebarService.openSidebar(this.activeOrderMobileSidebar);
  }

  constructor(private activeOrderService: ActiveOrderService, private mobileSidebarService: MobileViewService) { }

  ngOnInit() {
  }

}
