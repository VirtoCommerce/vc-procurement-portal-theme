import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductSearchCriteria, SearchProductsResult, IProduct } from '@models/dto/product';
import { LocationStrategy } from '@angular/common';
import { Observable, of } from 'rxjs';
import { CategorySearchCriteria, SearchCategoriesResult } from '@models/dto/category';

declare var BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,  private location: LocationStrategy) {
  }

  private adjustUrl(url: string): string {
    return this.location.prepareExternalUrl(url);
  }

  // CATALOG

  searchProducts(searchCriteria: ProductSearchCriteria): Observable<SearchProductsResult> {
    let url = 'storefrontapi/catalog/search';
    url = this.adjustUrl(url);
    return this.http.post<SearchProductsResult>(url, searchCriteria);
  }

  searchCategories(searchCriteria: CategorySearchCriteria): Observable<SearchCategoriesResult> {
    let url = 'storefrontapi/categories/search';
    url = this.adjustUrl(url);
    return this.http.post<SearchCategoriesResult>(url, searchCriteria);
  }


  getProducts(productIds: string[]): Observable<IProduct[]> {
    if (!productIds || !productIds.length) {
      return of([]);
    }
    //const url = 'storefrontapi/products?productIds=' + productId;
    let url = 'storefrontapi/products';
    url = this.adjustUrl(url);
    const params = new HttpParams().set('productIds', productIds.join(', '));
    return this.http.get<IProduct[]>(url, {params});
  }




}
