import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';


import { ActiveOrderService } from '../../services/active-order.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';

type tabs = 'manualy' | 'csv';

@Component({
  selector: 'app-bulk-order',
  templateUrl: './bulk-order.component.html',
  styleUrls: ['./bulk-order.component.scss']
})
export class BulkOrderComponent implements OnInit {

  selectedTab: tabs = 'manualy'; // manualy or csv

  constructor(
    private activeOrderService: ActiveOrderService
  ) {

  }

  setSelectedTab(tabName: tabs) {
    this.selectedTab = tabName;
  }

  ngOnInit() {
  }

}


