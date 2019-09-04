import { Component, OnInit } from '@angular/core';
import { PaginationInfo } from 'src/app/models/inner/pagination-info';
import { OrdersService } from 'src/app/services/orders.service';
import { PageSizeChangedArgs } from '../page-size-selector/page-size-selector.component';
import { IOrder } from 'src/app/models/dto/iorder';
import ConfigurationFile from 'src/assets/config/config.dev.json';
import { IAppConfig } from 'src/app/models/iapp-config';
import { OrderWorkflowService } from 'src/app/services/order-workflow.service';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-forapproval',
  templateUrl: './forapproval.component.html',
  styleUrls: ['./forapproval.component.scss']
})
export class ForApprovalComponent implements OnInit {
  orders: IOrder[] = [];
  configuration = ConfigurationFile as IAppConfig;
  pagination = new PaginationInfo(this.configuration.defaultPageSize);
  pageSizes = this.configuration.pageSizes;
  startDate: Date;
  endDate: Date;
  status = 'All';

  constructor(private ordersService: OrdersService, private orderWorkflowService: OrderWorkflowService, private authorizationService: AuthorizationService) { }

  async ngOnInit() {
    await this.getAllOrders();
  }

  async pageSizeChanged(eventArgs: PageSizeChangedArgs) {
    this.pagination.pageSize = eventArgs.newPageSize;
    await this.getAllOrders();
  }

  async getAllOrders() {
    const currentUser = await this.authorizationService.getCurrentUser();
    if (currentUser != null) {

      // todo: get roles of the current user (not platform roles)
      const currentRoles = this.orderWorkflowService.getWorkflowRoles();

      const states = this.orderWorkflowService.getStatesByRoles(currentRoles);
      if (states.length > 0) {
        this.ordersService
          .getOrders(this.pagination.page, this.pagination.pageSize, this.startDate, this.endDate, null, states)
          .subscribe((data: any) => {
            this.orders = data.results as IOrder[];
            this.pagination.collectionSize = data.totalCount;
          });
      }
    } else {
      throw Error('The current user isn\'t defined');
    }
  }

  async pageChanged() {
    await this.getAllOrders();
  }
}
