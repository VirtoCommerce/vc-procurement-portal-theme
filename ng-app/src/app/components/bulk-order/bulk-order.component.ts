import { Component, OnInit, ViewChild, Input } from '@angular/core';



import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';


import { CatalogService } from '../../services';
import { ActiveOrderService } from '../../services/active-order.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-bulk-order',
  templateUrl: './bulk-order.component.html',
  styleUrls: ['./bulk-order.component.scss']
})
export class BulkOrderComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  categories: Category[];


  constructor(
    private catalogService: CatalogService,
    private activeOrderService: ActiveOrderService
  ) {

  }

  ngOnInit() {
    // console.log("START! Bulk order, ngOnInit");
    // this.blockUI.start('Loading categories...');
    // this.catalogService.getAllCategories()
    //   .subscribe(
    //     (data: CategorySearch) => {
    //       this.categories = data.categories;
    //       // console.log("STOP! Bulk  order , ngOnInit");
    //       this.blockUI.stop();
    //     },
    //     error => {
    //       console.log(error);
    //       this.blockUI.stop();
    //     }
    //   );
  }

}


