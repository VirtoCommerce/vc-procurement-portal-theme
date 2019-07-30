import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
// import { Store, select } from '@ngrx/store';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrder, IOrderItem, IOrderComment, OrderComment } from '../../../models/iorder';
import { OrdersService } from '../../../services/orders.service';
import { IApprovalWorkFlow, IApprovalWorkFlowStep } from '../../../models/iapproval-workflow';


@Component({
  selector: 'app-forapproval-details',
  templateUrl: './forapproval-details.component.html',
  styleUrls: ['./forapproval-details.component.scss']
})

export class ForApprovalDetailsComponent implements OnInit {
  isForApprove: boolean;
  id: any;
  private sub: any;
  order: IOrder;
  items: IOrderItem[];
  comments: IOrderComment[];
  comment: OrderComment;
  approvalWorkFlow: IApprovalWorkFlow;
  roles: IApprovalWorkFlowStep[];


  constructor(
    private ordersService: OrdersService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.ordersService.getOrders().subscribe((data: any) => {
      let orders = data as IOrder[];
      orders = orders.filter(order => order.id === this.id);
      this.order = orders[0];
      this.items = orders[0].items as IOrderItem[];
      //this.comments = orders[0].comments as IOrderComment[];
    });
    console.log("order: ", this.order);
  }

  Decline() {
    this.router.navigate(['/forapproval']);
  }

   Approve(comment: any) {
  //   this.ordersService.getApprovalWorkflow().subscribe((data: any) => {
  //     this.approvalWorkFlow = data[0] as IApprovalWorkFlow;
  //     this.roles = data[0].roles as IApprovalWorkFlowStep[];
  //     this.roles.sort((leftSide, rightSide): number => {
  //       if (leftSide.step < rightSide.step) return -1;
  //       if (leftSide.step > rightSide.step) return 1;
  //       return 0;
  //     });

  //     let currentRole = this.roles.filter(role => role.name === this.order.toRole);
  //     let currentId = currentRole[0].step;
  //     let nextRole = this.roles.filter(role => role.step === currentRole[0].step + 1);
  //     if (nextRole.length > 0) {
  //       this.order.toRole = nextRole[0].name;
  //       this.order.comments.push(new OrderComment("userId", "username", comment));
  //       this.ordersService.updateOrder(this.order).subscribe((data: IOrder) => {
  //         if (this.roles.filter(role => role.step === currentRole[0].step + 1).length > 0) {
  //           this.router.navigate(['/forapproval']);
  //         } else {
  //           this.router.navigate(['/activeorder']);
  //         }
  //       })
  //     } else {
  //       this.order.toRole = 'Completed';
  //       this.router.navigate(['/activeorder']);
  //     }

  //     // this.ordersService.fakeGetOrders().subscribe((data: any) => {
  //     //   let orders = data as IOrder[];
  //     //    this.order = orders[0] as IOrder;
  //     //    console.log("order refresh: ", this.order);
  //     // });

  //   });
  }
}
