import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';
import { MobileViewService } from 'src/app/services/mobile-view.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isOpen = false;
  constructor(
    private router: Router,
    private mobileSidebarService: MobileViewService
  ) { }

  ngOnInit() {
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
