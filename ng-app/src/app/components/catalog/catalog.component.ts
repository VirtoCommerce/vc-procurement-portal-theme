import { Component, OnInit } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { CatalogService } from '../../services';
import { ActiveOrderService } from '../../services/active-order.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Category } from 'src/app/models/dto/category';
import { PaginationInfo } from 'src/app/models/inner/pagination-info';
import { PageSizeChangedArgs } from '../page-size-selector/page-size-selector.component';
//import { AppConfig } from 'src/app/services/app-config.service';
import settings_data from 'src/assets/config/config.dev.json';
import { IAppConfig } from 'src/app/models/iapp-config';
import { ICart } from 'src/app/models/dto/icart';
import { ProductConverterService } from 'src/app/services/converters/product-converter.service';
import { ProductDetails } from 'src/app/models/product';
import { MobileViewService } from 'src/app/services/mobile-view.service';
import { CategoriesComponent } from './categories/categoires.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  products: ProductDetails[];
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
  showMobileSearch = false;

  constructor(
    private catalogService: CatalogService,
    private activeOrderService: ActiveOrderService,
    private productConverter: ProductConverterService,
    private mobileSidebarService: MobileViewService
  ) {
    // this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.Init();
    this.cart$ = this.activeOrderService.Cart;
    this.cart$.subscribe();
  }

  pageChanged() {
    this.getPproducts();
  }

  openMobileCategories(mobileCategoies: CategoriesComponent ) {
    this.mobileSidebarService.openSidebar(mobileCategoies);
  }

  openMobileSearch() {
    this.mobileSidebarService.openMobileSearch();
    this.showMobileSearch = !this.showMobileSearch;
  }

  closeMobileSearch() {
    this.mobileSidebarService.closeMobileSearch();
    this.showMobileSearch = !this.showMobileSearch;
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
      this.products = data.products.map(product => this.productConverter.toProductDetails(product));
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


