import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { merge, Observable, of as observableOf } from 'rxjs';
//import { merge } from 'rxjs/observable/merge';

import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Product } from '../../models/product';
import { CatalogService } from '../../services';
import { CatalogSearch } from '../../models/ProductSearch';
import { Category, CategorySearch } from '../../models/category';

import { ProductProperties } from '../../models/product-properties';
import { ProductPrice } from '../../models/product-price';
import { AddedProduct } from '../../models/added-product';
import { ActiveOrderService } from '../../services/active-order.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-bulk-order',
  templateUrl: './bulk-order.component.html',
  styleUrls: ['./bulk-order.component.css']
})
export class BulkOrderComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  categories: Category[];
  onLoad: AddedProduct;

  constructor(
    private http: HttpClient,
    private catalogService: CatalogService,
    private activeOrderService: ActiveOrderService
  ) {

  }

  ngOnInit() {
    // console.log("START! Bulk order, ngOnInit");
    this.blockUI.start("Loading categories...");
    this.catalogService.getAllCategories()
      .subscribe(
        (data: CategorySearch) => {
          this.categories = data.categories;
          // console.log("STOP! Bulk  order , ngOnInit");
          this.blockUI.stop();
        },
        error => {
          console.log(error);
          this.blockUI.stop();
        }
      );
  }


}


