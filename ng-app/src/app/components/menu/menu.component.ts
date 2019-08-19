import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';
import { AuthenticationService } from '../../services';
import { User } from '../../models/user';
import { RoleEnum } from '../../models/role';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService

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

}
