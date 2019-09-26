import { Injectable } from '@angular/core';
import { tap, catchError, finalize } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { ICart, ChangeCartItemQty, AddCartItem } from '@models/dto/icart';
import { AlertsService } from '@modules/alerts/alerts.service';
import { FullScreenSpinnerService } from '@services/full-screen-spinner.service';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class ActiveOrderService {

  Cart = new Subject<ICart>();

  constructor(private http: HttpService, private alertsService: AlertsService, private fullScreenSpinner: FullScreenSpinnerService) {
    this.refreshCart();
  }

  refreshCart() {
    this.getCart();
  }

  getCart() {
    this.http
      .getCart()
      .pipe(finalize(() => this.fullScreenSpinner.proceed()))
      .subscribe(x => this.Cart.next(x),
        catchError(error => this.handleError(error))
      );
  }

  createOrder() {
    console.log('Create order');
    return this.http.createOrder().pipe(
      tap(() => this.refreshCart()),
      catchError(error => this.handleError(error))
    );
  }

  clearAllItems() {
    console.log('Clear cart');
    return this.http.clearAllCartItems().pipe(
      tap(() => this.refreshCart()),
      catchError(error => this.handleError(error))
    );
  }

  addItem(productId: string, productQuantity: number = 1) {
    console.log('Add item to cart');
    this.fullScreenSpinner.suspend();
    const addItemDto =  new AddCartItem(productId, productQuantity);
    return this.http.addItemToCart(addItemDto).pipe(
      tap(x => this.refreshCart()),
      catchError(error => this.handleError(error))
    );
  }

  removeItem(lineItemId: string) {
    console.log('Remove item from cart');
    this.fullScreenSpinner.suspend();
    return this.http.removeItemFromCart(lineItemId).pipe(
      tap(x => this.refreshCart()),
      catchError(error => this.handleError(error))
    );
  }

  changeItemQuantity(lineItemId: string, quantity: number) {
    console.log('Item qty changing ');
    this.fullScreenSpinner.suspend();
    const changeItemQtyDto = new ChangeCartItemQty(lineItemId, quantity);
    return this.http.changeItemQuantity(changeItemQtyDto).pipe(
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
