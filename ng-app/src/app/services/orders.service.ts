import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IOrder, OrderSearchCriteria } from '../models/dto/iorder';
import { AlertsService } from '../modules/alerts/alerts.service';
import { GenericSearchResult } from '../models/dto/common/generic-search-result';


@Injectable({ providedIn: 'root' })
export class OrdersService {
  private baseUrl = 'storefrontapi/orders';

  constructor(private http: HttpClient, private alertsService: AlertsService) { }

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

    const url = this.baseUrl + '/search';
    return this.http.post<GenericSearchResult<IOrder>>(url, searchCriteria).pipe(
      tap(orders => {
        this.log(`fetched ordersUrl:` + orders);
      }),
      catchError(error => this.handleError(error))
    );
  }

  getOrder(OrderNumber: string) {
    return this.http.get(this.baseUrl + `/${OrderNumber}`).pipe(
      tap(order => {
        this.log(`fetched ordersUrl:` + order);
      }),
      catchError(error => this.handleError(error))
    );
  }

  updateOrder(order: IOrder): Observable<IOrder> {
    return this.http
      .post<IOrder>(this.baseUrl, order)
      .pipe(catchError(error => this.handleError(error)));
  }

  async changeOrderStatus(orderNumber: string, newStatus: string): Promise<IOrder> {
    const url = this.baseUrl + `/${orderNumber}/status`;
    const payload = { newStatus };
    return await this.http.put<any>(url, payload)
    .pipe(catchError(error => this.handleError(error)))
    .toPromise();
  }

  private handleError(error: any) {
    if (error.status === 500) {
      this.alertsService.error(
        `An error occurred with code ${error.status} while trying to execute a request to the server`, { dismissTimeout: 0 }
      );
    } else if (error.status === 400) {
      this.alertsService.warn(
        `An error occurred with code ${error.status} while trying to execute a request to the server`, { dismissTimeout: 0 }
      );
    }
    return throwError(error);
  }

  private log(message: string) {
    console.log('Orders service: ' + message);
  }
}
