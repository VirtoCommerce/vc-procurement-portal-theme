import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { IOrder, IOrderItem, IOrderComment } from '@models/dto/iorder';
import { OrdersService } from '@api/orders.service';
import { ActiveOrderService } from '@api/active-order.service';
import { OrderWorkflowService } from '@services/order-workflow.service';
import { AuthorizationService } from '@services/authorization.service';
import { OrderStateTransitionResult } from '@models/order-state-transition-result';
import { ExtendedUser } from '@models/dto/iuser';
import { AlertsService } from '@modules/alerts/alerts.service';
import { forkJoin, Observable } from 'rxjs';
import { ICart } from '@models/dto/icart';
import { IAction } from '@components/common/action-panel/iaction';

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
  orderStatusActions: IAction[];
  cart$: Observable<ICart>;

  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private readonly activeOrderService: ActiveOrderService,
    private orderWorkflowService: OrderWorkflowService,
    private authorizationService: AuthorizationService,
    private alertsService: AlertsService
  ) { }

  async ngOnInit() {
    this.cart$ = this.activeOrderService.Cart;
    this.cart$.subscribe();
    this.activeOrderService.refreshCart();
    this.currentUser = await this.authorizationService.getCurrentUser() as ExtendedUser;
    this.route.paramMap
      .pipe(switchMap(params => this.ordersService.getOrder(params.get('id'))))
      .subscribe((data: any) => {
        this.order = data;
        this.items = data.items;
        this.subTotal = this.order.subTotal.formattedAmount;
        this.shipping = this.order.shippingTotal.formattedAmount;
        this.total = this.order.total.formattedAmount;
        this.createdBy = this.order.createdBy;
        this.status = this.order.status;
        this.orderStatusActions = this.getOrderStatusActions(this.order.status);
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

  public async onOrderStatusChanged(newStatus: string) {
    const oldStatus = this.order.status;

    if (this.order.status === newStatus) {
      return;
    }

    this.orderStatusActions = this.getOrderStatusActions(newStatus);

    try {
      await this.ordersService.changeOrderStatus(this.order.number, newStatus);
      this.order.status = newStatus;

      // I think this is superfluous thing
      this.status = this.order.status;
      this.alertsService.success(`Order status have been successfully updated`);
    } catch (error) {
      this.order.status = oldStatus;
      this.orderStatusActions = this.getOrderStatusActions(oldStatus);
    }
  }

  public isInvoiceButtonVisible(): boolean {
    return this.orderWorkflowService.isContainsSuccessfulAttribute(this.order.status);
  }

  public getAssignedToRoles = () => {
    if (this.order != null) {
      return this.orderWorkflowService.getRolesTextByState(this.order.status);
    }
  }

  private getOrderStatusActions(status: string): IAction[] {
    // TODO: now we getting only 1 role. shall we draw buttons for all roles?
    // check it! if there are contradictions?
    const role = this.currentUser.workflowRoles[0];
    const transitions = this.orderWorkflowService.getRoleTransitions(
      status,
      role
    );
    if (transitions == null) {
      return [];
    }

    return transitions.map((stateTransition: OrderStateTransitionResult) => {
      if (stateTransition == null) {
        return;
      }
      return {
        id: stateTransition.newState,
        title: stateTransition.trigger,
        disabled: false
      } as IAction;
    });
  }
}
