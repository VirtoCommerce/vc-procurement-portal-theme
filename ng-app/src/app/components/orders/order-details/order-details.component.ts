import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { IOrder, IOrderItem, IOrderComment } from '../../../models/dto/iorder';
import { OrdersService } from '../../../services/orders.service';
import { ActiveOrderService } from 'src/app/services/active-order.service';
import { OrderWorkflowService } from 'src/app/services/order-workflow.service';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { OrderStateTransitionResult } from 'src/app/models/order-state-transition-result';
import { ExtendedUser } from 'src/app/models/dto/iuser';
import { AlertsService } from 'src/app/modules/alerts/alerts.service';
import { forkJoin, Observable } from 'rxjs';
import { ICart } from 'src/app/models/dto/icart';

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
  currentUser: ExtendedUser;
  orderStateTransitions: OrderStateTransitionResult[];
  cart$: Observable<ICart>;

  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private readonly activeOrderService: ActiveOrderService,
    private orderWorkflowService: OrderWorkflowService,
    private authorizationService: AuthorizationService,
    private alertsService: AlertsService
  ) {}

  async ngOnInit() {
    this.cart$ = this.activeOrderService.Cart;
    this.cart$.subscribe();
    this.activeOrderService.refreshCart();
    this.currentUser = await this.authorizationService.getCurrentUser() as ExtendedUser;
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
        this.orderStateTransitions = this.getRoleTransitions(this.order.status);
      });
  }

  toggleAccordion(event) {
    event.target
      .closest('.accordion__item')
      .classList.toggle('accordion__item--active');
  }

  addProductToCart() {
    forkJoin(
      this.items.map(item =>
        this.activeOrderService.addItem(item.productId, item.quantity)
      )
    ).subscribe(() =>
      this.alertsService.success(
        `Products have been successfully added to the cart`
      )
    );
  }

  public async onTransitionButtonClick(trigger: string) {
    const newStatus = trigger;
    const oldStatus = this.order.status;

    if (this.order.status === trigger) {
      return;
    }

    this.orderStateTransitions = this.getRoleTransitions(newStatus);

    try {
      await this.ordersService.changeOrderStatus(this.order.number, newStatus);
      this.order.status = newStatus;

      // I think this is superfluous thing
      this.status = this.order.status;
      this.alertsService.success(`Order status have been successfully updated`);
    } catch (error) {
      this.order.status = oldStatus;
      this.orderStateTransitions = this.getRoleTransitions(oldStatus);
    }
  }

  private getRoleTransitions(status: string): OrderStateTransitionResult[] {
    // TODO: now we getting only 1 role. shall we draw buttons for all roles?
    // check it! if there are contradictions?
    const role = this.currentUser.workflowRoles[0];
    return this.orderWorkflowService.getRoleTransitions(
      status,
      role
    );
  }
}
