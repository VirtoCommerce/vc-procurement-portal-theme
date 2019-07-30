import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`/users/${id}`);
    }

    getUserName() {
      console.log('getUserName');
      const url = 'storefrontapi/account';
      return this.http.get<any>(url);
    }

    getCurrentUser(){
      console.log('getCurrentUser');
      return this.http.get<User>('storefrontapi/account?t=').pipe(
        tap(
            user => {
                this.log(`fetched user:` + user);
            }),
        catchError(this.handleError('user', []))
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
      console.log('User service: ' + message);
  }

}
