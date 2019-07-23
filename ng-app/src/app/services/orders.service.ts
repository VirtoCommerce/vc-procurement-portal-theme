import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IOrder, OrderSearchCriteria } from '../models/iorder';
import { IOrders } from '../models/iorders';


@Injectable({ providedIn: 'root' })
export class OrdersService {
    private heroesUrl = 'api/heroes';
    private ordersUrl = 'storefrontapi/orders/search';
    private usersUrl = 'api/users';
    private approvalWorkflowUrl = 'api/approvalWorkflow';

    constructor(
        private http: HttpClient) { }

    getOrders(pageNumber: number = 1, pageSize: number = 10) {
      const searchCriteria = new OrderSearchCriteria();
      searchCriteria.pageNumber = pageNumber;
      searchCriteria.pageSize = pageSize;
        return this.http.post(this.ordersUrl,searchCriteria).pipe(
            tap(
                orders => {
                    this.log(`fetched ordersUrl:` + orders);
                }),
            catchError(this.handleError('ordersUrl', []))
        );
    }

    updateOrder(order: IOrder): Observable<IOrder> {
        return this.http.post<IOrder>(this.ordersUrl, order);
    }

    getApprovalWorkflow() {
        return this.http.get(this.approvalWorkflowUrl).pipe(
            tap(
                workflow => {
                    this.log(`fetched approvalWorkflowUrl:` + workflow);
                }),
            catchError(this.handleError('Error approvalWorkflowUrl', []))
        );

    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }


    private log(message: string) {
        console.log('Orders service: ' + message);
    }
}
