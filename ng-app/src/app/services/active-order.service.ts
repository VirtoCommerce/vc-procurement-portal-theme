import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap, catchError, map, startWith, switchMap } from 'rxjs/operators';



import { IActiveOrder } from '../models/iactive-order';
import { Subject } from 'rxjs';
import { ICart } from '../models/icart';

@Injectable({ providedIn: 'root' })
export class ActiveOrderService {

  headers: HttpHeaders;

  Cart = new Subject<ICart>();


  constructor(private http: HttpClient) {
    this.refresh();
  }


  private refresh() {
    // todo
    this.getCart();

  }

  getTotal(t: string) {
    // let url = window['BASE_URL'] + 'storefrontapi/cart/itemscount?t=' + Date.now();
    // this.http.get<any>(url).subscribe(
    //   (data: any) => {
    //   },
    //   error => console.log('Error data: ' + error)
    // );
    // url = window['BASE_URL'] + 'storefrontapi/cart/itemscount?t=' + Date.now();
    // this.http.get<any>(url).subscribe(
    //   (data: any) => {
    //   },
    //   error => console.log('Error data: ' + error)
    // );
    // if (t === '') {
    //   console.log('t1=' + t);
    //   let url = window['BASE_URL'] + 'storefrontapi/cart?t=' + Date.now();
    //   return this.http.get(url);
    // }
    // else {
    //   console.log('t2=' + t);
    //   let url = window['BASE_URL'] + 'storefrontapi/cart/itemscount?t=' + t;
    //   this.http.get<any>(url).subscribe(
    //     (data: any) => {
    //     },
    //     error => console.log('Error data: ' + error)
    //   );;
    //   url = window['BASE_URL'] + 'storefrontapi/cart?t=' + Date.now();
    //   return this.http.get(url);
    // }
  }


  getCart() {
    const url = 'storefrontapi/cart';
    this.http.get<ICart>(url)
    .subscribe(x =>
      this.Cart.next(x) );
  }

  createOrder() {
    console.log('createOrder');
    const body = {};
    const url = window['BASE_URL'] + 'storefrontapi/cart/createorder';
    return this.http.post<any>(url, body);
  }

  ClearAllItems() {
    console.log('Clear');
    const url = 'storefrontapi/cart/clear';
    const body = '{}';
    return this.http.post<any>(url, body);
  }

  AddItem(productId: string) {
    console.log('Add');
    const body = { id: productId, quantity: 1 };
    const url = 'storefrontapi/cart/items';
    return this.http.post<any>(url, body);
  }

  RemoveItem(productId: string) {
    console.log('Remove');
    const url = 'storefrontapi/cart/items?lineItemId=' + productId;
    return this.http.delete(url);
  }

  ChangeItemQuantity(id: string, quantity: number) {
    console.log('Change');
    if (id === 'undefined') {
      //console.log("1) Change id=" + id);
    } else {
      //console.log("2) Change id=" + id);
      const url = window['BASE_URL'] + 'storefrontapi/cart/items';
      const body = '{"lineItemId":"' + id + '","Quantity":"' + quantity + '"}';
      return this.http.put<any>(url, body);
    }
  }

}
