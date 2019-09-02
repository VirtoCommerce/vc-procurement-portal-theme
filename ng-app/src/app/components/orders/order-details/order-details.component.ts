import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { IOrder, IOrderItem, IOrderComment } from '../../../models/dto/iorder';
import { OrdersService } from '../../../services/orders.service';
import { ActiveOrderService } from 'src/app/services/active-order.service';
import { OrderWorkflowService } from 'src/app/services/order-workflow.service';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { OrderStateTransitionResult } from 'src/app/models/order-state-transition-result';
import { IUser } from 'src/app/models/dto/iuser';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  isForApprove: boolean;
  id: any;
  order: IOrder;
  items: IOrderItem[];
  comments: IOrderComment[];
  subTotal: string;
  shipping: string;
  total: string;
  createdBy: string;
  status: string;
  currentUser: IUser;
  orderStateTransitions: OrderStateTransitionResult[];

  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private readonly activeOrderService: ActiveOrderService,
    private orderWorkflowService: OrderWorkflowService,
    private authorizationService: AuthorizationService
  ) { }

  async ngOnInit() {
    this.currentUser = await this.authorizationService.getCurrentUser();
    this.route.paramMap
      .pipe(switchMap(params => this.ordersService.getOrder(params.get('id'))))
      .subscribe((data: any) => {
        this.order = data as IOrder;
        this.items = data.items;
        this.subTotal = this.order.subTotal.formattedAmount;
        this.shipping = this.order.shippingTotal.formattedAmount;
        this.total = this.order.total.formattedAmount;
        this.createdBy = this.order.createdBy;
        this.status = this.order.status;

        this.orderStateTransitions = this.orderWorkflowService.getRoleTransitions(this.order.status, this.currentUser.role.name);
      });
  }

  toggleAccordion(event) {
    event.target.parentElement.classList.toggle('accordion__item--active');
  }

  addProductToCart() {
    this.items.forEach(item => {
      this.activeOrderService.addItem(item.productId, item.quantity).subscribe();
    });
  }
}
