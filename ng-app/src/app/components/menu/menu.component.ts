import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';
import { MobileViewService } from 'src/app/services/mobile-view.service';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { of, Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isOpen = false;
  isAdmin: Observable<boolean>;
  constructor(
    private router: Router,
    private mobileSidebarService: MobileViewService,
    private authService: AuthorizationService
  ) {
   }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin;
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

}
