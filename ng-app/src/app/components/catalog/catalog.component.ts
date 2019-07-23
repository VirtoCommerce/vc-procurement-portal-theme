import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { Product } from '../../models/product';
import { CatalogService, AuthenticationService } from '../../services';
import { CatalogSearch } from '../../models/ProductSearch';
import { CaruselComponent } from './carusel/carusel.component';
import { ProductProperties } from '../../models/product-properties';
import { ProductPrice } from '../../models/product-price';
import { AddedProduct } from '../../models/added-product';
import { ActiveOrderService } from '../../services/active-order.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { first } from 'rxjs/operators';
import { Category } from 'src/app/models/category';
import { PageMetaData } from 'src/app/models/common/page-meta-data';
import { PaginationInfo } from 'src/app/models/inner/pagination-info';
import { PageSizeChangedArgs } from '../page-size-selector/page-size-selector.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  products: Product[];
  categories$: Observable<Category[]>;
  paginationInfo = new PaginationInfo();


  filterByCategory: string;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


  onLoad: AddedProduct;

  currentUser: User;
  userFromApi: User;

  constructor(
    private catalogService: CatalogService,
    private activeOrderService: ActiveOrderService,
    private userService: UserService,
    private authenticationService: AuthenticationService

  ) {
    // this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
     this.loadData();
  }

  pageChanged() {
    this.getPproducts();
  }

  pageSizeChanged(eventArgs: PageSizeChangedArgs) {
    this.paginationInfo.pageSize = eventArgs.newPageSize;
    this.getPproducts();
  }

  getPproducts() {
    this.catalogService.getAllProducts(this.paginationInfo.page, this.paginationInfo.pageSize).subscribe((data) => {
      this.products = data.products;
      //this.pagingInfo = data.metaData;
      this.paginationInfo.page = data.metaData.pageNumber;
      this.paginationInfo.collectionSize = data.metaData.totalItemCount;
    });
  }

  loadData() {
    //this.blockUI.start('Loading...');
    this.categories$ = this.catalogService.getAllCategories();
    this.getPproducts();
  }

  setFilterByCategory(filterByCategory: string) {
    // this.dataSource.filter = filterByCategory;
  }

  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}


