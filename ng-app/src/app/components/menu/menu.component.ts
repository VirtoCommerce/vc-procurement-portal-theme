import { OrderWorkflowService } from '@services/order-workflow.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MobileViewService } from '@services/mobile-view.service';
import { AuthorizationService } from '@services/authorization.service';
import { RoleEnum } from '@models/role';
import { ExtendedUser } from '@models/dto/iuser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  private _workflowChangingSubscription: Subscription;

  isOpen = false;
  isAdmin: Promise<boolean>;
  currentUser: ExtendedUser;
  isForApprovalEnabled = true;
  constructor(
    private mobileSidebarService: MobileViewService,
    private authService: AuthorizationService,
    private ordersWorkflowService: OrderWorkflowService
  ) {
  }

  async ngOnInit() {
    this.isAdmin = this.authService.checkPermission(RoleEnum.Admin);
    this.currentUser = await this.authService.getCurrentUser();
    this.isForApprovalEnabled = this.isForApprovalEnabledForCurrentUser(this.currentUser);

    this._workflowChangingSubscription = this.subscribeWorkflowChanging();
  }

  ngOnDestroy(): void {
    if (this._workflowChangingSubscription != null) {
      this._workflowChangingSubscription.unsubscribe();
    }
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

  private isForApprovalEnabledForCurrentUser(currentUser: any): boolean {
    if (this.ordersWorkflowService.workflow.IsSystem) {
      return false;
    } else {
      const orderCreatorRoles = this.ordersWorkflowService.getOrderCreatorRoles();
      const result = currentUser.workflowRoles.some(role => orderCreatorRoles.some(creatorRole => creatorRole === role));
      return !result;
    }
  }

  private subscribeWorkflowChanging(): Subscription{
    const subscription = this.ordersWorkflowService.action.subscribe((action: string) => {
      if (action === 'workflow_changed') {
        this.isForApprovalEnabled = this.isForApprovalEnabledForCurrentUser(this.currentUser);
      }
    });

    return subscription;
  }
}
