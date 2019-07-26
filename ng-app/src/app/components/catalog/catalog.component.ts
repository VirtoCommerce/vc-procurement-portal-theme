import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { Product } from '../../models/product';
import { CatalogService, AuthenticationService } from '../../services';
import { ActiveOrderService } from '../../services/active-order.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { first } from 'rxjs/operators';
import { Category } from 'src/app/models/category';
import { PaginationInfo } from 'src/app/models/inner/pagination-info';
import { PageSizeChangedArgs } from '../page-size-selector/page-size-selector.component';
import { AppConfig } from 'src/app/services/app-config.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  products: Product[];
  categories$: Observable<Category[]>;
  selectedCategory: Category = null;
  private searchText = '';
  paginationInfo = new PaginationInfo(AppConfig.settings.defaultPageSize);
  pageSizes = AppConfig.settings.pageSizes;


  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

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

    this.Init();
  }

  pageChanged() {
    this.getPproducts();
  }

  pageSizeChanged(eventArgs: PageSizeChangedArgs) {
    this.paginationInfo.pageSize = eventArgs.newPageSize;
    this.getPproducts();
  }

  categoryChanged(category: Category) {
    this.selectedCategory = category;
    this.getPproducts();
  }

  getPproducts() {
    const categoryId = this.selectedCategory ? this.selectedCategory.id : null;
    this.catalogService.getAllProducts(this.paginationInfo.page, this.paginationInfo.pageSize, categoryId, this.searchText).subscribe((data) => {
      this.products = data.products;
      this.paginationInfo.page = data.metaData.pageNumber;
      this.paginationInfo.collectionSize = data.metaData.totalItemCount;
    });
  }

  searchByText(searchText: string) {
    this.searchText = searchText;
    this.getPproducts();
  }


  private Init() {
    //this.blockUI.start('Loading...');
    this.categories$ = this.catalogService.getAllCategories();
    this.getPproducts();
  }

}


