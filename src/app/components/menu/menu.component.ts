import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';
import { AuthenticationService } from '../../services';
import { User } from '../../models/user';
import { Role } from '../../models/role';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
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
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
