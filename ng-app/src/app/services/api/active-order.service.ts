import { Injectable } from '@angular/core';
import { tap, catchError, finalize } from 'rxjs/operators';
import { Subject, throwError, forkJoin } from 'rxjs';
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
    this.loadCart()
    .subscribe(x => this.Cart.next(x));
  }

  loadCart() {
    return this.http
      .getCart()
      .pipe(
        // finalize(() => this.fullScreenSpinner.proceed()),
        catchError(error => this.handleError(error))
        );
  }

  setCart( cart: ICart) {
    this.Cart.next(cart);
  }

  createOrder() {
    console.log('Create order');
    return this.http.createOrder().pipe(
      catchError(error => this.handleError(error))
    );
  }

  clearAllItems() {
    console.log('Clear cart');
    return this.http.clearAllCartItems().pipe(
      catchError(error => this.handleError(error))
    );
  }


  addItems(items: {productId: string, productQuantity: number}[]) {
    console.log(`Add ${items.length} items to cart`);
    const requests = items.map(x => this.http.addItemToCart(new AddCartItem(x.productId, x.productQuantity)));
    return forkJoin(requests).pipe(
      finalize(() => this.refreshCart()),
      catchError(error => this.handleError(error))
      );
  }

  addItem(productId: string, productQuantity: number = 1) {
    console.log('Add item to cart');
    const addItemDto =  new AddCartItem(productId, productQuantity);
    return this.http.addItemToCart(addItemDto).pipe(
      catchError(error => this.handleError(error))
    );
  }

  removeItem(lineItemId: string) {
    console.log('Remove item from cart');
    return this.http.removeItemFromCart(lineItemId).pipe(
      catchError(error => this.handleError(error))
    );
  }

  changeItemQuantity(lineItemId: string, quantity: number) {
    console.log('Item qty changing ');
    const changeItemQtyDto = new ChangeCartItemQty(lineItemId, quantity);
    return this.http.changeItemQuantity(changeItemQtyDto).pipe(
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
