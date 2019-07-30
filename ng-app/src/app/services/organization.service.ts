import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  getUserOrganization() {
    console.log('getUserOrganization');
    return this.http.get('storefrontapi/account/organization/current?t=').pipe(
        tap(
            organization => {
                this.log(`fetched organization:` + organization);
            }),
        catchError(this.handleError('organization', []))
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
    console.log('Organization service: ' + message);
}

}
