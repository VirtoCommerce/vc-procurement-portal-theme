import { OrderWorkflowService } from '@services/order-workflow.service';
import { Component, OnInit } from '@angular/core';
import { MobileViewService } from '@services/mobile-view.service';
import { AuthorizationService } from '@services/authorization.service';
import { RoleEnum } from '@models/role';
import { ExtendedUser } from '@models/dto/iuser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isOpen = false;
  currentUser$: Observable<ExtendedUser>;

  constructor(
    private mobileSidebarService: MobileViewService,
    private authService: AuthorizationService,
    private ordersWorkflowService: OrderWorkflowService
  ) {
  }

  ngOnInit() {
    this.currentUser$ = this.authService.currentUser$;
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

  isAdmin(user: ExtendedUser) {
    return this.authService.checkUserPermission(user, RoleEnum.Admin);
  }

  public isOrdersApprovalEnabledForUser(currentUser: ExtendedUser): boolean {
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
