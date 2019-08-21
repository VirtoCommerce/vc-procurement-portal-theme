import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


}
