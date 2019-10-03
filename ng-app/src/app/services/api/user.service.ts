import { Injectable } from '@angular/core';

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
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpService, private alertsService: AlertsService, private userConverter: UserConverterService) {}


  getOrganizationUsers(pageNumber: number, pageSize: number): Observable<GenericSearchResult<ExtendedUser>> {
    const criteria = new OrganizationUsersSearchCriteria();
    criteria.pageNumber = pageNumber;
    criteria.pageSize = pageSize;
    return this.http.getOrganizationUsers(criteria).pipe(map(x => {
          const results = x.results.map(u => this.userConverter.toExtendedUser(u));
          return { results, totalCount: x.totalCount};
      }), catchError(error => this.handleError(error)));
  }

  updateUser(user: EditUserDto): Observable<any> {
    return this.http
      .updateUser(user)
      .pipe(catchError(error => this.handleError(error)));
  }

  updatePhoneNumber(phoneNumber: EditUserPhone): Observable<any> {
    if (phoneNumber.phoneNumber !== '') {
      return this.http
      .updateCurrentUserPhoneNumber(phoneNumber)
      .pipe(catchError(error => this.handleError(error)));
    } else {
      return this.http
      .removeCurrentUserPhoneNumber()
      .pipe(catchError(error => this.handleError(error)));
    }

  }

  changeUserPassword(password: EditUserPassword): Observable<any> {
    return this.http
      .changeCurrentUserPassword(password)
      .pipe(catchError(error => this.handleError(error)));
  }

  deleteUser(userName: string): Observable<any> {
    return this.http.deleteUser(userName)
      .pipe(catchError(error => this.handleError(error)));
  }

  getCurrentUser(): Observable<ExtendedUser> {
    return this.http.getCurrentUser().pipe(
      map(x => this.userConverter.toExtendedUser(x)),
      tap(user => {
        this.log(`fetched user:` + user);
      }),
      catchError(error => this.handleError(error))
    );
  }

  registerNewUser(user: AddNewUserDto): Observable<any> {
    return this.http
      .registerNewUser(user)
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
