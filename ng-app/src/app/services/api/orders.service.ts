import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IOrder, OrderSearchCriteria } from '@models/dto/iorder';
import { AlertsService } from '@modules/alerts/alerts.service';
import { GenericSearchResult } from '@models/dto/common/generic-search-result';
import { HttpService } from './http.service';


@Injectable({ providedIn: 'root' })
export class OrdersService {

  constructor(private http: HttpService, private alertsService: AlertsService) { }

  getOrders(
    pageNumber: number = 1,
    pageSize: number = 10,
    startDate: Date = null,
    endDate: Date = null,
    status: string = '',
    statuses?: string[]
  ): Observable<GenericSearchResult<IOrder>> {
    const searchCriteria = new OrderSearchCriteria();
    searchCriteria.pageNumber = pageNumber;
    searchCriteria.pageSize = pageSize;
    searchCriteria.StartDate = startDate;
    searchCriteria.EndDate = endDate;
    if (status === 'All') {
      searchCriteria.Status = '';
    } else {
      searchCriteria.Status = status;
    }

    if (statuses != null) {
      searchCriteria.Statuses = statuses;
    }

    return this.http.searchOrders(searchCriteria).pipe(
      tap(orders => {
        this.log(`fetched orders:` + orders);
      }),
      catchError(error => this.handleError(error))
    );
  }

  getOrder(orderNumber: string) {
    return this.http.getOrderByNumber(orderNumber).pipe(
      tap(order => {
        this.log(`fetched order:` + order);
      }),
      catchError(error => this.handleError(error))
    );
  }

  updateOrder(order: IOrder): Observable<IOrder> {
    return this.http.updateOrder(order)
      .pipe(catchError(error => this.handleError(error)));
  }

  async changeOrderStatus(orderNumber: string, newStatus: string): Promise<IOrder> {
    return await this.http.changeOrderStatus(orderNumber, newStatus)
    .pipe(catchError(error => this.handleError(error)))
    .toPromise();
  }

  private handleError(error: any) {
    if (error.status >= 500) {
      this.alertsService.error(
        `An error occurred with code ${error.status} while trying to execute a request to the server`, { keepAfterRouteChange: true, dismissTimeout: 0 }
      );
    } else if (error.status >= 400 && error.status < 500) {
      this.alertsService.warn(
        `An error occurred with code ${error.status} while trying to execute a request to the server`, { keepAfterRouteChange: true, dismissTimeout: 0 }
      );
    }
    return throwError(error);
  }

  private log(message: string) {
    console.log('Orders service: ' + message);
  }
}
