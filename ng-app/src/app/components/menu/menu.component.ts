import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';
import { MobileViewService } from 'src/app/services/mobile-view.service';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { RoleEnum } from 'src/app/models/role';
import { ExtendedUser } from 'src/app/models/dto/iuser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isOpen = false;
  isAdmin: Promise<boolean>;
  currentUser: ExtendedUser;
  constructor(
    private router: Router,
    private mobileSidebarService: MobileViewService,
    private authService: AuthorizationService
  ) {
  }

  async ngOnInit() {
    this.isAdmin = this.authService.checkPermission(RoleEnum.Admin);
    this.currentUser = await this.authService.getCurrentUser();
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

}
