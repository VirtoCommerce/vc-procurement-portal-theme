import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';
import { AuthenticationService } from '../../services';
import { User } from '../../models/user';
import { RoleEnum } from '../../models/role';
import { MobileViewService } from 'src/app/services/mobile-view.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  currentUser: User;
  isOpen = false;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private mobileSidebarService: MobileViewService

  ) { }

  ngOnInit() {
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === RoleEnum.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
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

}
