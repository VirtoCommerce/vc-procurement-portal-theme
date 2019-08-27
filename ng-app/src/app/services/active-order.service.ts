import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map, startWith, switchMap } from 'rxjs/operators';

import { Subject } from 'rxjs';
import { ICart, ChangeCartItemQty } from '../models/dto/icart';

@Injectable({ providedIn: 'root' })
export class ActiveOrderService {
  headers: HttpHeaders;
  Cart = new Subject<ICart>();

  constructor(private http: HttpClient) {
    this.refreshCart();
  }

  refreshCart() {
    // todo
    this.getCart();

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
    const url = 'storefrontapi/cart/createorder';
    return this.http.post<any>(url, body).pipe(tap(x => this.refreshCart()));
  }

  clearAllItems() {
    console.log('Clear');
    const url = 'storefrontapi/cart/clear';
    const body = '{}';
    return this.http.post<any>(url, body).pipe(tap(x => this.refreshCart()));
  }

  addItem(productId: string, productQuantity: number = 1) {
    console.log('Add');
    const body = { id: productId, quantity: productQuantity };
    const url = 'storefrontapi/cart/items';
    return this.http.post<any>(url, body).pipe( tap(x => this.refreshCart()));
  }

  removeItem(lineItemId: string) {
    console.log('Remove');
    const url = 'storefrontapi/cart/items?lineItemId=' + lineItemId;
    return this.http.delete(url).pipe(tap(x => this.refreshCart()));
  }

  changeItemQuantity(lineItemId: string, quantity: number) {
      const url = 'storefrontapi/cart/items';
      //const body = '{"lineItemId":"' + lineItemId + '","quantity":"' + quantity + '"}';
      const body = new ChangeCartItemQty(lineItemId, quantity);
      return this.http.put<any>(url, body).pipe(tap(x => this.refreshCart()));
  }

}
