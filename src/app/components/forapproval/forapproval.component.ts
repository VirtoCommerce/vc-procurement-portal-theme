import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../models/iorder';
import { User } from '../../models/user';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-forapproval',
  templateUrl: './forapproval.component.html',
  styleUrls: ['./forapproval.component.css']
})
export class ForApprovalComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
  }

}
