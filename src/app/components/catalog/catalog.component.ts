import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Product } from '../../models/product';
import { CatalogService } from '../../services';
import { CatalogSearch } from '../../models/ProductSearch';
import { Category, CategorySearch } from '../../models/category';
import { CaruselComponent } from './carusel/carusel.component';
import { ProductProperties } from '../../models/product-properties';
import { ProductPrice } from '../../models/product-price';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
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

  constructor(private http: HttpClient, private catalogService: CatalogService) {

  }

  ngOnInit() {
    this.catalogService.getAllCategories()
      .subscribe(
        (data: CategorySearch) => {
          this.categories = data.categories;
        },
        error => console.log(error)
      );

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
            product.categoryId = data.products[i].catalogId;
            product.url = data.products[i].catalogId;
            product.image = data.products[i].images[0].url;
            productProperties.productId = data.products[i].id;
            productProperties.name = data.products[i].name;
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

  }

  setFilterByCategory(filterByCategory: string) {
    //console.log(filterByCategory);
    //this.dataSource.filter = filterByCategory;//.trim().toLowerCase();
  }

  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}

// function createNewUser(id: number): Product {
//   // const name =
//   //     NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//   //     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }

