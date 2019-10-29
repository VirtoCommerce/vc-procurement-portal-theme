import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogService } from '@api/catalog.service';
import { ActiveOrderService } from '@api/active-order.service';
import { Category } from '@models/dto/category';
import { PaginationInfo } from '@models/inner/pagination-info';
import { PageSizeChangedArgs } from '@components/page-size-selector/page-size-selector.component';
import settings_data from 'src/assets/config/config.dev.json';
import { IAppConfig } from '@models/iapp-config';
import { ICart } from '@models/dto/icart';
import { ProductConverterService } from '@services/converters/product-converter.service';
import { ProductDetails } from '@models/product';
import { MobileViewService } from '@services/mobile-view.service';
import { CategoriesMobileComponent } from './categories-mobile/categories-mobile.component';
import { DisabledBlockComponent } from '@components/blockUI/disabled-block/disabled-block.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  disabledBlockTemplate = DisabledBlockComponent;
  private searchText = '';
  products: ProductDetails[];
  categories$: Observable<Category[]>;
  cart$: Observable<ICart>;
  selectedCategory: Category = null;
  settings = settings_data as IAppConfig;
  pagination = new PaginationInfo( 5 );  // (this.settings.defaultPageSize);

  showMobileSearch = false;

  constructor(
    private catalogService: CatalogService,
    private activeOrderService: ActiveOrderService,
    private productConverter: ProductConverterService,
    private mobileSidebarService: MobileViewService,
  ) {
  }

  ngOnInit() {
    this.Init();
    this.cart$ = this.activeOrderService.Cart;
    this.cart$.subscribe();
    this.activeOrderService.refreshCart();
  }

  pageChanged() {
    this.getProducts();
  }

  openMobileCategories(mobileCategories: CategoriesMobileComponent) {
    this.mobileSidebarService.openSidebar(mobileCategories);
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
    this.pagination.pageSize = eventArgs.newPageSize;
    this.getProducts();
  }

  categoryChanged(category: Category) {
    this.selectedCategory = category;
    this.getProducts();
  }

  getProducts() {
    const page = this.pagination.page;
    const pageSize = this.pagination.pageSize;
    const categoryId = this.selectedCategory ? this.selectedCategory.id : null;
    const searchText = this.searchText;

    this.catalogService.getAllProducts(page, pageSize, categoryId, searchText).subscribe((data) => {
      this.products = data.products.map(product => this.productConverter.toProductDetails(product));
      this.pagination.page = data.metaData.pageNumber;
      this.pagination.collectionSize = data.metaData.totalItemCount;

    });
  }

  searchByText(searchText: string) {
    if (this.searchText !== searchText) {
      this.searchText = searchText;
      this.getProducts();
    }
  }

  private Init() {
    this.getProducts();
    this.getCategories();
  }

  private getCategories() {
    this.categories$ = this.catalogService.getAllCategories();
  }
}
