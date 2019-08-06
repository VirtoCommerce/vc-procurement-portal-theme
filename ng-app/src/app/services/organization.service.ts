import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OrganizationService {
  constructor(private http: HttpClient) {}

  getUserOrganization() {
    console.log("getUserOrganization");
    return this.http.get("storefrontapi/account/organization/current?t=").pipe(
      tap(organization => {
        this.log(`fetched organization:` + organization);
      }),
      catchError(this.handleError("organization", []))
    );
  }

  getOrganizationUsers(pageNumber: number, pageSize: number) {
    const url = 'storefrontapi/account/organization/users/search';
    const body = { pageNumber: pageNumber, start: (pageNumber - 1) * pageSize, pageSize: pageSize};
    return this.http.post<any>(url,body);
  }

  updateOrganization(
    newName: string
  ) {
    console.log('updating org with new name: ', newName)
    const url = 'storefrontapi/account/organization';
    const body = {
      name: newName
    };
    return this.http.put<any>(url, body);
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
    console.log("Organization service: " + message);
  }
}
