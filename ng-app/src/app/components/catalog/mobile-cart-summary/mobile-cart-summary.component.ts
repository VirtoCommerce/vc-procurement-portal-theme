import { Component, OnInit, Input } from '@angular/core';
import { ICart } from 'src/app/models/dto/icart';
import { ActiveOrderService } from 'src/app/services/active-order.service';
import { ActiveOrderMobileComponent } from '../../active-order/active-order-mobile/active-order-mobile.component';
import { MobileViewService } from 'src/app/services/mobile-view.service';


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
