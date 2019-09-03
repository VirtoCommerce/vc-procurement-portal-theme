import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogService } from '../../services';
import { ActiveOrderService } from '../../services/active-order.service';
import { User } from '../../models/user';
import { Category } from 'src/app/models/dto/category';
import { PaginationInfo } from 'src/app/models/inner/pagination-info';
import { PageSizeChangedArgs } from '../page-size-selector/page-size-selector.component';
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
  private searchText = '';
  products: ProductDetails[];
  categories$: Observable<Category[]>;
  cart$: Observable<ICart>;
  selectedCategory: Category = null;
  settings = settings_data as IAppConfig;
  pagination = new PaginationInfo(this.settings.defaultPageSize);

  showMobileSearch = false;

  currentUser: User;
  userFromApi: User;

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
  }

  pageChanged() {
    this.getProducts();
  }

  openMobileCategories(mobileCategories: CategoriesComponent) {
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
