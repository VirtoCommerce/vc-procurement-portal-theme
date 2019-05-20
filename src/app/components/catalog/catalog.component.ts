import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { merge, Observable, of as observableOf } from 'rxjs';
//import { merge } from 'rxjs/observable/merge';

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
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  products: Product[];
  categories: Category[];
  displayedColumns: string[] = ['image', 'name', 'price',];
  dataSource: MatTableDataSource<Product>;
  filterByCategory: string;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.LoadFakeData();
  }

  LoadData() {
    this.blockUI.start("Loading...");
    this.catalogService.getAllCategories()
      .subscribe(
        (data: CategorySearch) => {
          this.categories = data.categories;
          //console.log("STOP! Catlog component, ngOnInit getAllCategories");
          //this.blockUI.stop();
        },
        error => {
          console.log("Catalog component, error:" + error);
          this.blockUI.stop();
        }
      );

    this.activeOrderService.removeForTable.subscribe(() => {
      this.catalogService.getAllProducts()
        .subscribe(
          (data: CatalogSearch) => {
            this.products = new Array<Product>();
            for (var i in data.products) {
              let product = new Product();
              let productProperties = new ProductProperties();
              let priceProduct = new ProductPrice();
              product.id = data.products[i].id;
              product.sku = data.products[i].sku;
              product.catalogId = data.products[i].catalogId;
              product.categoryId = data.products[i].categoryId;
              product.url = data.products[i].catalogId;
              product.image = data.products[i].images[0].url;
              productProperties.productId = data.products[i].id;
              productProperties.name = data.products[i].name;
              product.name = data.products[i].name;
              productProperties.sku = data.products[i].sku;
              productProperties.nameProperty1 = data.products[i].properties[0].name;
              productProperties.valueProperty1 = data.products[i].properties[0].value;
              productProperties.nameProperty2 = data.products[i].properties[2].name;
              productProperties.valueProperty2 = data.products[i].properties[2].value;
              for (var j in this.categories) {
                if (data.products[i].categoryId == this.categories[j].id) {
                  productProperties.category = this.categories[j].name;
                  break;
                }
              }
              priceProduct.productId = product.id;
              priceProduct.currency = data.products[i].price.currency.symbol;
              priceProduct.price = data.products[i].price.salePrice.amount;
              priceProduct.count = 0;
              product.price = data.products[i].price.salePrice.amount;
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
    })

    this.activeOrderService.load.subscribe((onLoad: AddedProduct[]) => {
      //console.log("START! Catalog component, ngOnInit - load");
      //this.blockUI.start("Loading products...");
      this.catalogService.getAllProducts()
        .subscribe(
          (data: CatalogSearch) => {
            // console.log("STOP! Catlog component, ngOnInit getAllProducts");
            this.blockUI.stop();
            this.products = new Array<Product>();
            for (var i in data.products) {
              let product = new Product();
              let productProperties = new ProductProperties();
              let priceProduct = new ProductPrice();
              product.id = data.products[i].id;
              product.sku = data.products[i].sku;
              product.catalogId = data.products[i].catalogId;
              product.categoryId = data.products[i].categoryId;
              product.url = data.products[i].catalogId;
              product.image = data.products[i].images[0].url;
              productProperties.productId = data.products[i].id;
              productProperties.name = data.products[i].name;
              product.name = data.products[i].name;
              productProperties.sku = data.products[i].sku;
              productProperties.nameProperty1 = data.products[i].properties[0].name;
              productProperties.valueProperty1 = data.products[i].properties[0].value;
              productProperties.nameProperty2 = data.products[i].properties[2].name;
              productProperties.valueProperty2 = data.products[i].properties[2].value;
              for (var j in this.categories) {
                if (data.products[i].categoryId == this.categories[j].id) {
                  productProperties.category = this.categories[j].name;
                  break;
                }
              }
              priceProduct.productId = product.id;
              priceProduct.currency = data.products[i].price.currency.symbol;
              priceProduct.price = data.products[i].price.salePrice.amount;
              priceProduct.count = 0;
              for (let _product of onLoad) {
                if (_product.productid === product.id) {
                  priceProduct.count = _product.count;
                  priceProduct.id = _product.id;
                }
              }

              product.price = data.products[i].price.salePrice.amount;


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

    })
  }

  LoadFakeData() {
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.userFromApi = user;
    });

    this.catalogService.getFakeCategories().subscribe((data: any) => {
      this.categories = data;
    });

    this.activeOrderService.removeForTable.subscribe(() => {
      this.catalogService.getFakeProducts()
        .subscribe(
          (data: CatalogSearch) => {
            console.log('Fake 1');
            this.products = new Array<Product>();
            for (var i in data.products) {
              let product = new Product();
              let productProperties = new ProductProperties();
              let priceProduct = new ProductPrice();
              product.id = data[i].id;
              product.sku = data[i].sku;
              product.catalogId = data[i].catalogId;
              product.categoryId = data[i].categoryId;
              product.url = data[i].catalogId;
              product.image = data[i].images[0].url;
              productProperties.productId = data[i].id;
              productProperties.name = data[i].name;
              product.name = data[i].name;
              productProperties.sku = data[i].sku;
              productProperties.nameProperty1 = data[i].properties[0].name;
              productProperties.valueProperty1 = data[i].properties[0].value;
              productProperties.nameProperty2 = data[i].properties[2].name;
              productProperties.valueProperty2 = data[i].properties[2].value;
              for (var j in this.categories) {
                if (data[i].categoryId == this.categories[j].id) {
                  productProperties.category = this.categories[j].name;
                  break;
                }
              }
              priceProduct.productId = product.id;
              priceProduct.currency = data[i].price.currency.symbol;
              priceProduct.price = data[i].price.salePrice.amount;
              priceProduct.count = 0;
              product.price = data[i].price.salePrice.amount;
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
      this.catalogService.getFakeProducts()
        .subscribe(
          (data: any) => {
            console.log('Fake 2');
            this.products = new Array<Product>();
            for (var i in data) {
              let product = new Product();
              let productProperties = new ProductProperties();
              let priceProduct = new ProductPrice();
              product.id = data[i].id;
              product.sku = data[i].sku;
              product.catalogId = data[i].catalogId;
              product.categoryId = data[i].categoryId;
              product.url = data[i].catalogId;
              //product.image = data[i].images[0].url;
              productProperties.productId = data[i].id;
              productProperties.name = data[i].name;
              product.name = data[i].name;
              productProperties.sku = data[i].sku;
              priceProduct.productId = product.id;
              priceProduct.currency = data[i].price.currency.symbol;
              priceProduct.price = data[i].price.salePrice.amount;
              priceProduct.count = 0;
              for (let _product of onLoad) {
                if (_product.productid === product.id) {
                  priceProduct.count = _product.count;
                  priceProduct.id = _product.id;
                }
              }

              product.price = data[i].price.salePrice.amount;


              product.productProperties = productProperties;
              product.productPrice = priceProduct;
              this.products.push(product);
            }
            console.log("this.products: " + this.products.length);
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


