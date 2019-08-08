import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';


import { ActiveOrderService } from '../../services/active-order.service';


@Component({
  selector: 'app-bulk-order',
  templateUrl: './bulk-order.component.html',
  styleUrls: ['./bulk-order.component.scss']
})
export class BulkOrderComponent implements OnInit {

  constructor(
    private activeOrderService: ActiveOrderService
  ) {

  }

  ngOnInit() {
  }

}


