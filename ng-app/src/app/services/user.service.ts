import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  User,
  AddNewUser,
  EditUser,
  EditUserPassword,
  EditUserPhone
} from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AlertsService } from '../modules/alerts/alerts.service';
import { IUser } from '../models/dto/iuser';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient, private alertsService: AlertsService) {}

  getAll() {
    return this.http
      .get<User[]>(`/users`)
      .pipe(catchError(error => this.handleError(error)));
  }

  getById(id: number) {
    return this.http
      .get<User>(`/users/${id}`)
      .pipe(catchError(error => this.handleError(error)));
  }

  getUserName() {
    console.log('getUserName');
    const url = 'storefrontapi/account';
    return this.http
      .get<any>(url)
      .pipe(catchError(error => this.handleError(error)));
  }

  updateUser(user: EditUser) {
    const url = 'storefrontapi/account';
    return this.http
      .post(url, user)
      .pipe(catchError(error => this.handleError(error)));
  }

  updatePhoneNumber(phoneNumber: EditUserPhone) {
    const url = 'storefrontapi/account/phonenumber';
    return this.http
      .post(url, phoneNumber)
      .pipe(catchError(error => this.handleError(error)));
  }

  changeUserPassword(password: EditUserPassword) {
    const url = 'storefrontapi/account/password';
    return this.http
      .post(url, password)
      .pipe(catchError(error => this.handleError(error)));
  }

  deleteUser(userName: string) {
    return this.http
      .delete('storefrontapi/account/' + userName)
      .pipe(catchError(error => this.handleError(error)));
  }

  getCurrentUser() {
    console.log('getCurrentUser');
    return this.http.get<IUser>('storefrontapi/account?t=').pipe(
      tap(user => {
        this.log(`fetched user:` + user);
      }),
      catchError(error => this.handleError(error))
    );
  }

  registerNewUser(user: AddNewUser) {
    const url = 'storefrontapi/account/user';
    return this.http
      .post(url, user)
      .pipe(catchError(error => this.handleError(error)));
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
    console.log('User service: ' + message);
  }
}
