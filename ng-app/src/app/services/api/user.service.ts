import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  EditUserPassword,
  EditUserPhone
} from '@models/user';
import { tap, catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AlertsService } from '@modules/alerts/alerts.service';
import { IUser, OrganizationUsersSearchCriteria, ExtendedUser, AddNewUserDto, EditUserDto } from '@models/dto/iuser';
import { GenericSearchResult } from '@models/dto/common/generic-search-result';
import { UserConverterService } from '@services/converters/user-converter.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient, private alertsService: AlertsService, private userConverter: UserConverterService) {}


  getOrganizationUsers(pageNumber: number, pageSize: number): Observable<GenericSearchResult<ExtendedUser>> {
    const url = 'storefrontapi/account/organization/users/search';
    const criteria = new OrganizationUsersSearchCriteria();
    criteria.pageNumber = pageNumber;
    criteria.pageSize = pageSize;
    return this.http
      .post<GenericSearchResult<any>>(url, criteria)
      .pipe(map(x => {
          x.results = x.results.map(u => this.userConverter.toExtendedUser(u));
          return x;
      }), catchError(error => this.handleError(error)));
  }

  updateUser(user: EditUserDto): Observable<any> {
    const url = 'storefrontapi/account';
    return this.http
      .post(url, user)
      .pipe(catchError(error => this.handleError(error)));
  }

  updatePhoneNumber(phoneNumber: EditUserPhone): Observable<any> {
    const url = 'storefrontapi/account/phonenumber';
    return this.http
      .post(url, phoneNumber)
      .pipe(catchError(error => this.handleError(error)));
  }

  changeUserPassword(password: EditUserPassword): Observable<any> {
    const url = 'storefrontapi/account/password';
    return this.http
      .post(url, password)
      .pipe(catchError(error => this.handleError(error)));
  }

  deleteUser(userName: string): Observable<any> {
    return this.http
      .delete('storefrontapi/account/' + userName)
      .pipe(catchError(error => this.handleError(error)));
  }

  getCurrentUser(): Observable<ExtendedUser> {
    console.log('getCurrentUser');
    return this.http.get<IUser>('storefrontapi/account?t=').pipe(
      map(x => this.userConverter.toExtendedUser(x)),
      tap(user => {
        this.log(`fetched user:` + user);
      }),
      catchError(error => this.handleError(error))
    );
  }

  registerNewUser(user: AddNewUserDto): Observable<any> {
    const url = 'storefrontapi/account/user';
    return this.http
      .post(url, user)
      .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: any): Observable<never> {
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
    console.log('User service: ' + message);
  }
}
