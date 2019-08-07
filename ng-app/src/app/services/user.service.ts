import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../models/user";
import { tap, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { IUser } from '../models/dto/iuser';

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`/users`);
  }

  getById(id: number) {
    return this.http.get<User>(`/users/${id}`);
  }

  updateUser(newFirstName: string, newLastName: string, newEmail: string) {
    const url = "storefrontapi/account";
    const body = {
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail
    };
    return this.http.post<any>(url, body);
  }

  deleteUser(userName: string) {
    return this.http.delete('storefrontapi/account/' + userName);
  }

  getCurrentUser() {
    console.log("getCurrentUser");
    return this.http.get<User>("storefrontapi/account?t=").pipe(
      tap(user => {
        this.log(`fetched user:` + user);
      }),
      catchError(this.handleError("user", []))
    );
  }

  registerNewUser(user) {
    const url = 'storefrontapi/account/user';
    const body = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      organizationId: user.organizationId,
      password: user.password,
      role: user.role,
      //storeId: user.storeId,
      userName: user.userName
    };
    return this.http.post<any>(url, body);
  }

  private handleError<T>(operation = "operation", result?: T) {
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
    console.log("User service: " + message);
  }
}
