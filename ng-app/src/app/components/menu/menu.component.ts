import { OrderWorkflowService } from '@services/order-workflow.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MobileViewService } from '@services/mobile-view.service';
import { AuthorizationService } from '@services/authorization.service';
import { RoleEnum } from '@models/role';
import { ExtendedUser } from '@models/dto/iuser';
import { Subject } from 'rxjs';
import { LocationStrategy } from '@angular/common';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  isLoaded = false;
  isOpen = false; // for mobile popup menu
  isCompanyEnabled = false;
  isForApprovalEnabled = false;
  currentUser: ExtendedUser;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private location: LocationStrategy,
    private mobileSidebarService: MobileViewService,
    private authService: AuthorizationService,
    private ordersWorkflowService: OrderWorkflowService
  ) {
  }

  async ngOnInit() {
    this.currentUser = await this.authService.getCurrentUser();
    this.refreshEnablers();
    this.isLoaded = true;
    this.authService.currentUser$.pipe(takeUntil(this.unsubscribe$)).subscribe(( user ) => {
      this.currentUser = user;
      this.refreshEnablers();
    });
    this.ordersWorkflowService.action.pipe(takeUntil(this.unsubscribe$)).subscribe((action: string) => {
      if (action === 'workflow_changed') {
        this.refreshEnablers();
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }


  get logoutPath(): string {
    const logoutPath = this.location.prepareExternalUrl('/account/logout');
    return logoutPath;
  }


  refreshEnablers() {
    this.isCompanyEnabled = this.isAdmin(this.currentUser);
    this.isForApprovalEnabled = this.isOrdersApprovalEnabledForUser(this.currentUser);
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

  private isOrdersApprovalEnabledForUser(currentUser: ExtendedUser): boolean {
    if (this.ordersWorkflowService.workflow.IsSystem) {
      return false;
    } else {
      const orderCreatorRoles = this.ordersWorkflowService.getOrderCreatorRoles();
      const result = currentUser.workflowRoles.some(role => orderCreatorRoles.some(creatorRole => creatorRole === role));
      return !result;
    }
  }
}
