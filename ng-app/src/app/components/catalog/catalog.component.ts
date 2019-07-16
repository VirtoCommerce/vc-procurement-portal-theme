import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { Product } from '../../models/product';
import { CatalogService, AuthenticationService } from '../../services';
import { CatalogSearch } from '../../models/ProductSearch';
import { Category, CategorySearch } from '../../models/category';
import { CaruselComponent } from './carusel/carusel.component';
import { ProductProperties } from '../../models/product-properties';
import { ProductPrice } from '../../models/product-price';
import { AddedProduct } from '../../models/added-product';
import { ActiveOrderService } from '../../services/active-order.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  products: Product[];
  categories: Category[];
  displayedColumns: string[] = ['image', 'name', 'price'];
  dataSource: MatTableDataSource<Product>;
  filterByCategory: string;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  test: any;

  onLoad: AddedProduct;

  currentUser: User;
  userFromApi: User;

  constructor(
    private http: HttpClient,
    private catalogService: CatalogService,
    private activeOrderService: ActiveOrderService,
    private userService: UserService,
    private authenticationService: AuthenticationService

  ) {
    // this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
     this.LoadData();
  }

  LoadData() {
    this.blockUI.start('Loading...');
    this.catalogService.getAllCategories()
      .subscribe(
        (data: CategorySearch) => {
          this.categories = data.categories;
          //console.log("STOP! Catlog component, ngOnInit getAllCategories");
          //this.blockUI.stop();
        },
        error => {
          console.log('Catalog component, error:' + error);
          this.blockUI.stop();
        }
      );

    this.activeOrderService.removeForTable.subscribe(() => {
      this.catalogService.getAllProducts()
        .subscribe(
          (data: CatalogSearch) => {
            this.products = new Array<Product>();
            for (const i of data.products) {
              const product = new Product();
              const productProperties = new ProductProperties();
              const priceProduct = new ProductPrice();
              product.id = i.id;
              product.sku = i.sku;
              product.catalogId = i.catalogId;
              product.categoryId = i.categoryId;
              product.url = i.catalogId;
              product.image = i.images[0].url;
              productProperties.productId = i.id;
              productProperties.name = i.name;
              product.name = i.name;
              productProperties.sku = i.sku;
              productProperties.nameProperty1 = i.properties[0].name;
              productProperties.valueProperty1 = i.properties[0].value;
              productProperties.nameProperty2 = i.properties[2].name;
              productProperties.valueProperty2 = i.properties[2].value;
              for (const cat of this.categories) {
                if (i.categoryId === cat.id) {
                  productProperties.category = cat.name;
                  break;
                }
              }
              priceProduct.productId = product.id;
              priceProduct.currency = i.price.currency.symbol;
              priceProduct.price = i.price.salePrice.amount;
              priceProduct.count = 0;
              product.price = i.price.salePrice.amount;
              product.productProperties = productProperties;
              product.productPrice = priceProduct;
              this.products.push(product);
            }
            this.dataSource = new MatTableDataSource(this.products);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          },
          error => console.log(error)
        );
    });

    this.activeOrderService.load.subscribe((onLoad: AddedProduct[]) => {
      //console.log("START! Catalog component, ngOnInit - load");
      //this.blockUI.start("Loading products...");
      this.catalogService.getAllProducts()
        .subscribe(
          (data: CatalogSearch) => {
            // console.log("STOP! Catlog component, ngOnInit getAllProducts");
            this.blockUI.stop();
            this.products = new Array<Product>();
            for (const p of data.products) {
              const product = new Product();
              const productProperties = new ProductProperties();
              const priceProduct = new ProductPrice();
              product.id = p.id;
              product.sku = p.sku;
              product.catalogId = p.catalogId;
              product.categoryId = p.categoryId;
              product.url = p.catalogId;
              product.image = p.images[0].url;
              productProperties.productId = p.id;
              productProperties.name = p.name;
              product.name = p.name;
              productProperties.sku = p.sku;
              productProperties.nameProperty1 = p.properties[0].name;
              productProperties.valueProperty1 = p.properties[0].value;
              productProperties.nameProperty2 = p.properties[2].name;
              productProperties.valueProperty2 = p.properties[2].value;
              for (const cat of this.categories) {
                if (p.categoryId === cat.id) {
                  productProperties.category = cat.name;
                  break;
                }
              }
              priceProduct.productId = product.id;
              priceProduct.currency = p.price.currency.symbol;
              priceProduct.price = p.price.salePrice.amount;
              priceProduct.count = 0;
              for (const _product of onLoad) {
                if (_product.productid === product.id) {
                  priceProduct.count = _product.count;
                  priceProduct.id = _product.id;
                }
              }

              product.price = p.price.salePrice.amount;


              product.productProperties = productProperties;
              product.productPrice = priceProduct;
              this.products.push(product);
            }
            this.dataSource = new MatTableDataSource(this.products);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          },
          error => {
            this.blockUI.stop();
            console.log(error);
          }
        );

    });
  }

  setFilterByCategory(filterByCategory: string) {
    this.dataSource.filter = filterByCategory;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


