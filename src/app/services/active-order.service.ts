import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { AddedProduct } from '../models/added-product';
import { Product } from '../models/product';
import { Post } from '../models/Post';

@Injectable({ providedIn: 'root' })
export class ActiveOrderService {

  headers: HttpHeaders;
  options: RequestOptions;

  private catalogUrl = 'api/activeOrder';  // URL to web api

  onRemoveForActiveOrder = false;
  onRemoveForTable = false;
  onAdd = false;
  onLoad: AddedProduct[];
  @Output() removeForActiveOrder: EventEmitter<boolean> = new EventEmitter();
  @Output() removeForTable: EventEmitter<boolean> = new EventEmitter();
  @Output() add: EventEmitter<boolean> = new EventEmitter();
  @Output() load: EventEmitter<AddedProduct[]> = new EventEmitter();

  afterRemovedForActiveOrder() {
    this.onRemoveForActiveOrder = !this.onRemoveForActiveOrder;
    this.removeForActiveOrder.emit(this.onRemoveForActiveOrder)
  }

  afterRemovedForTable() {
    console.log("afterRemovedForTable");
    this.onRemoveForTable = !this.onRemoveForTable;
    this.removeForTable.emit(this.onRemoveForTable)
  }

  afterAdded() {
    console.log("afterAdded");
    this.onAdd = !this.onAdd;
    this.add.emit(this.onAdd);
  }

  afterLoad(addedProduct: AddedProduct[]) {
    console.log("afterLoad");
    this.onLoad = addedProduct;
    //console.log('Active order service: ' + addedProduct.length);
    // console.log("STOP! Catlog component, ngOnInit getAllProducts");
    // this.blockUI.stop();
    this.load.emit(this.onLoad);
  }

  constructor(
    private http: HttpClient) {
  }



  getUserName() {
    console.log("getUserName");
    const url = window["BASE_URL"] + 'storefrontapi/account';
    return this.http.get<Post>(url);
  }

  getTotal(t: string) {
    console.log("getTotal t=" + t);
    let url = window["BASE_URL"] + 'storefrontapi/cart/itemscount?t=' + Date.now();
    this.http.get<any>(url).subscribe(
      (data: any) => {
      },
      error => console.log("Error data: " + error)
    );
    url = window["BASE_URL"] + 'storefrontapi/cart/itemscount?t=' + Date.now();
    this.http.get<any>(url).subscribe(
      (data: any) => {
      },
      error => console.log("Error data: " + error)
    );
    if (t === "") {
      console.log('t1=' + t);
      let url = window["BASE_URL"] + 'storefrontapi/cart?t=' + Date.now();
      return this.http.get(url);
    }
    else {
      console.log('t2=' + t);
      let url = window["BASE_URL"] + 'storefrontapi/cart/itemscount?t=' + t;
      this.http.get<any>(url).subscribe(
        (data: any) => {
        },
        error => console.log("Error data: " + error)
      );;
      url = window["BASE_URL"] + 'storefrontapi/cart?t=' + Date.now();
      return this.http.get(url);
    }
  }

  createOrder() {
    console.log("createOrder");
    const body = {};
    const url = window["BASE_URL"] + 'storefrontapi/cart/createorder';
    return this.http.post<any>(url, body);
  }

  Clear() {
    console.log("Clear");
    const url = window["BASE_URL"] + 'storefrontapi/cart/clear';
    const body = "{}";
    return this.http.post<any>(url, body);
  }

  Add(productId: string) {
    console.log("Add");
    const body = { id: productId, quantity: 1 };
    const url = window["BASE_URL"] + 'storefrontapi/cart/items';
    return this.http.post<Post>(url, body);
  }

  Remove(productId: string) {
    console.log("Remove");
    const url = window["BASE_URL"] + 'storefrontapi/cart/items?lineItemId=' + productId;
    return this.http.delete(url);
  }

  Change(id: string, quantity: number) {
    console.log("Change");
    if (id === "undefined") {
      //console.log("1) Change id=" + id);
    } else {
      //console.log("2) Change id=" + id);
      const url = window["BASE_URL"] + 'storefrontapi/cart/items';
      const body = '{"lineItemId":"' + id + '","Quantity":"' + quantity + '"}';
      return this.http.put<Post>(url, body);
    }
  }

}