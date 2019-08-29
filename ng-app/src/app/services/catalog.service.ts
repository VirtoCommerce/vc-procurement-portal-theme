import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map, startWith, switchMap } from 'rxjs/operators';
import {
  SearchCategoriesResult,
  Category,
  CategorySearchCriteria,
  CategoryResponseGroup
} from '../models/dto/category';
import {
  ProductSearchCriteria,
  IProduct,
  SearchProductsResult,
  ItemResponseGroup
} from '../models/dto/product';
import { ProductConverterService } from './converters/product-converter.service';
import { ProductDetails } from '../models/product';
import { AlertsService } from '../modules/alerts/alerts.service';

// import { IProductSearch, ICatalogSearch } from '../models/ProductSearch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CatalogService {
  constructor(
    private http: HttpClient,
    private productConverter: ProductConverterService,
    private aletsService: AlertsService
  ) {}

  getAllProducts(
    pageNumber: number,
    pageSize: number,
    categoryId: string,
    keyword: string
  ): Observable<SearchProductsResult> {
    // const body = { keyword: "", start: "0", isFuzzySearch: true, pageSize: "1000" };
    const searchCriteria = new ProductSearchCriteria();
    searchCriteria.pageNumber = pageNumber;
    searchCriteria.pageSize = pageSize;
    searchCriteria.keyword = keyword;
    searchCriteria.outline = categoryId;
    searchCriteria.responseGroup = ItemResponseGroup.ItemLarge;
    const url = 'storefrontapi/catalog/search';
    return this.http
      .post<SearchProductsResult>(url, searchCriteria)
      .pipe(catchError(error => this.handleError(error)));
  }

  getAllCategories(): Observable<Category[]> {
    // const searchCriteria = { keyword: "", start: "0", isFuzzySearch: true, pageSize: "1000" };
    const searchCriteria = new CategorySearchCriteria();
    searchCriteria.pageSize = 1000;
    searchCriteria.responseGroup = CategoryResponseGroup.Info;
    const url = 'storefrontapi/categories/search';
    return this.http.post<SearchCategoriesResult>(url, searchCriteria).pipe(
      map(x => x.categories),
      catchError(error => this.handleError(error))
    );
  }

  getProduct(productId: string): Observable<ProductDetails> {
    const url = 'storefrontapi/products?productIds=' + productId;
    return this.http.get<IProduct[]>(url).pipe(
      map(x => x.map(p => this.productConverter.toProductDetails(p))),
      map(x => (x.length > 0 ? x[0] : null)),
      catchError(error => this.handleError(error))
    );
  }

  getProductBySku(sku: string): Observable<IProduct> {
    const searchCriteria = new ProductSearchCriteria();
    searchCriteria.keyword = sku;
    searchCriteria.pageSize = 2;
    searchCriteria.responseGroup = ItemResponseGroup.ItemLarge;
    const url = 'storefrontapi/catalog/search';
    return this.http.post<SearchProductsResult>(url, searchCriteria).pipe(
      map(x => {
        if (x.metaData.totalItemCount === 1 && x.products[0].sku === sku) {
          return x.products[0];
        }
        return null;
      }),
      catchError(error => this.handleError(error))
    );
  }

  private handleError(error: any) {
    if (error.status === 500) {
      this.aletsService.error(
        `An error occurred with code ${error.status} while trying to execute a request to the server`
      );
    } else if (error.status === 400) {
      this.aletsService.warn(
        `An error occurred with code ${error.status} while trying to execute a request to the server`
      );
    }
    return throwError(error);
  }
}

export interface CatalogSearch {
  products: IProduct[];
}
