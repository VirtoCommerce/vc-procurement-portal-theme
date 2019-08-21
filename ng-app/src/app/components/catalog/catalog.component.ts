import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { IProduct } from '../../models/dto/product';
import { CatalogService } from '../../services';
import { ActiveOrderService } from '../../services/active-order.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { User } from '../../models/user';
import { Category } from 'src/app/models/dto/category';
import { PaginationInfo } from 'src/app/models/inner/pagination-info';
import { PageSizeChangedArgs } from '../page-size-selector/page-size-selector.component';
//import { AppConfig } from 'src/app/services/app-config.service';
import settings_data from 'src/assets/config/config.dev.json';
import { IAppConfig } from 'src/app/models/iapp-config';
import { ICart } from 'src/app/models/dto/icart';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  products: IProduct[];
  categories$: Observable<Category[]>;
  cart$: Observable<ICart>;
  selectedCategory: Category = null;
  private searchText = '';
  settings = settings_data as IAppConfig;
  // paginationInfo = new PaginationInfo(AppConfig.settings.defaultPageSize);
  // pageSizes = AppConfig.settings.pageSizes;
  paginationInfo = new PaginationInfo(this.settings.defaultPageSize);
  pageSizes = this.settings.pageSizes;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  currentUser: User;
  userFromApi: User;

  constructor(
    private catalogService: CatalogService,
    private activeOrderService: ActiveOrderService
  ) {  }

  ngOnInit() {
    this.Init();
    this.cart$ = this.activeOrderService.Cart;
    this.cart$.subscribe();
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


