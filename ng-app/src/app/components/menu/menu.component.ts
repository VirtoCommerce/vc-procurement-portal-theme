import { OrderWorkflowService } from '@services/order-workflow.service';
import { Component, OnInit } from '@angular/core';
import { MobileViewService } from '@services/mobile-view.service';
import { AuthorizationService } from '@services/authorization.service';
import { RoleEnum } from '@models/role';
import { ExtendedUser } from '@models/dto/iuser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isOpen = false;
  isAdmin: Promise<boolean>;
  currentUser: ExtendedUser;
  isOrdersApprovalEnabled = true;
  constructor(
    private mobileSidebarService: MobileViewService,
    private authService: AuthorizationService,
    private ordersWorkflowService: OrderWorkflowService
  ) {
  }

  async ngOnInit() {
    this.isAdmin = this.authService.checkPermission(RoleEnum.Admin);
    this.currentUser = await this.authService.getCurrentUser();
    this.isOrdersApprovalEnabled = this.isOrdersApprovalEnabledForUser(this.currentUser);
  }

  openMobileMenu() {
    this.mobileSidebarService.openSidebar(this);
  }

  closeMobileMenu() {
    this.mobileSidebarService.closeSidebar(this);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.authService.logout();
  }

  public getLoggedUserName(): string {
    let result: string;
    if (this.currentUser != null) {
      if (this.currentUser.userName != null) {
        result = `(${this.currentUser.userName})`;
      }
    }

    return result;
  }

  private isOrdersApprovalEnabledForUser(currentUser: ExtendedUser): boolean {
    let result = true;
    const orderCreatorRoles = this.ordersWorkflowService.getOrderCreatorRoles();
    currentUser.workflowRoles.forEach(role => {
      if (result) {
        result = !orderCreatorRoles.some(creatorRole => creatorRole === role);
      }
    });

    return result;
  }
}
