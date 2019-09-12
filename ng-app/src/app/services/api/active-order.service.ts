import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, finalize } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { ICart, ChangeCartItemQty, AddCartItem } from '@models/dto/icart';
import { AlertsService } from '@modules/alerts/alerts.service';
import { FullScreenSpinnerService } from '@services/full-screen-spinner.service';

@Injectable({ providedIn: 'root' })
export class ActiveOrderService {
  headers: HttpHeaders;
  Cart = new Subject<ICart>();

  constructor(private http: HttpClient, private alertsService: AlertsService, private fullScreenSpinner: FullScreenSpinnerService) {
    this.refreshCart();
  }

  refreshCart() {
    this.getCart();
  }

  getCart() {
    const url = 'storefrontapi/cart';
    this.http
      .get<ICart>(url)
      .pipe(finalize(() => this.fullScreenSpinner.proceed()))
      .subscribe(x => this.Cart.next(x),
        catchError(error => this.handleError(error))
      );
  }

  createOrder() {
    console.log('createOrder');
    const url = 'storefrontapi/cart/createorder';
    return this.http.post<any>(url, {}).pipe(
      tap(() => this.refreshCart()),
      catchError(error => this.handleError(error))
    );
  }

  clearAllItems() {
    console.log('Clear');
    const url = 'storefrontapi/cart/clear';
    return this.http.post<any>(url, {}).pipe(
      tap(() => this.refreshCart()),
      catchError(error => this.handleError(error))
    );
  }

  addItem(productId: string, productQuantity: number = 1) {
    console.log('Add');
    this.fullScreenSpinner.suspend();
    const addItemDto =  new AddCartItem(productId, productQuantity);
    const url = 'storefrontapi/cart/items';
    return this.http.post<any>(url, addItemDto).pipe(
      tap(x => this.refreshCart()),
      catchError(error => this.handleError(error))
    );
  }

  removeItem(lineItemId: string) {
    console.log('Remove');
    this.fullScreenSpinner.suspend();
    const url = 'storefrontapi/cart/items?lineItemId=' + lineItemId;
    return this.http.delete(url).pipe(
      tap(x => this.refreshCart()),
      catchError(error => this.handleError(error))
    );
  }

  changeItemQuantity(lineItemId: string, quantity: number) {
    this.fullScreenSpinner.suspend();
    const url = 'storefrontapi/cart/items';
    const changeItemQtyDto = new ChangeCartItemQty(lineItemId, quantity);
    return this.http.put<any>(url, changeItemQtyDto).pipe(
      tap(x => this.refreshCart()),
      catchError(error => this.handleError(error))
    );
  }

  private handleError(error: any) {
    this.fullScreenSpinner.proceed();
    if (error.status >= 500) {
      this.alertsService.error(
        `An error occurred with code ${error.status} while trying to execute a request to the server`,
        { keepAfterRouteChange: true, dismissTimeout: 0 }
      );
    } else if (error.status >= 400 && error.status < 500) {
      this.alertsService.warn(
        `An error occurred with code ${error.status} while trying to execute a request to the server`,
        { keepAfterRouteChange: true, dismissTimeout: 0 }
      );
    }
    return throwError(error);
  }
}
