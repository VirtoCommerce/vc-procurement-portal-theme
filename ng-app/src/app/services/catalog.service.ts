import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { CategorySearch } from '../models/category';
//import { IProductSearch, ICatalogSearch } from '../models/ProductSearch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CatalogService {


  //dataSearch: CatalogSearch[] = [];
  isLoadingResults = true;
  data: ProductSearch[];

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getAllProducts() {
    //const url = window.location.origin;
    const body = { keyword: "", start: "0", isFuzzySearch: true, pageSize: "1000" };
    const url = window["BASE_URL"] + 'storefrontapi/catalog/search';
    return this.http.post<CatalogSearch>(url, body);
  }

  getAllCategories() {
    const body = { keyword: "", start: "0", isFuzzySearch: true, pageSize: "1000" };
    const url = window["BASE_URL"] + 'storefrontapi/categories/search';
    return this.http.post<CategorySearch>(url, body);
  }


}


export interface CatalogSearch {
  products: ProductSearch[];
}

export interface ProductSearch {
  id: string;
  name: string;
}