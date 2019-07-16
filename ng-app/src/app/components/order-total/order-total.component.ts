import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrls: ['./order-total.component.scss']
})

export class OrderTotalComponent implements OnInit {

  @Input() isForApprove: boolean = false;
  @Input() subTotal: string = '$20.00';
  @Input() shipping: string = 'Free';
  @Input() total: string = '$20.00';
  @Input() createdBy: string = 'Pavlov P.';
  @Input() status: string = 'Completed';
  @Input() assignedTo: string = 'Ivanov P.';

  constructor(
  ) {
  }

  ngOnInit() {

  }
}
