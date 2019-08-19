import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, AddNewUser, EditUser, EditUserPassword, EditUserPhone } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/dto/iuser';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

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

  updateUser(user: EditUser) {
    const url = 'storefrontapi/account';
    return this.http.post(url, user);
  }

  updatePhoneNumber(phoneNumber: EditUserPhone) {
    const url = 'storefrontapi/account/phonenumber';
    return this.http.post(url, phoneNumber);
  }

  changeUserPassword(password: EditUserPassword) {
    const url = 'storefrontapi/account/password';
    return this.http.post(url, password);
  }

  deleteUser(userName: string) {
    return this.http.delete('storefrontapi/account/' + userName);
  }

  getCurrentUser() {
    console.log('getCurrentUser');
    return this.http.get<User>('storefrontapi/account?t=').pipe(
      tap(user => {
        this.log(`fetched user:` + user);
      }),
      catchError(this.handleError('user', []))
    );
  }

  registerNewUser(user: AddNewUser) {
    const url = 'storefrontapi/account/user';
    return this.http.post(url, user);
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
