import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Product } from '../../models/product';
import { CatalogService } from '../../services';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: Product[];

  displayedColumns: string[] = ['sku', 'name', 'id',];
  exampleDatabase: ExampleHttpDatabase | null;
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, private catalogService: CatalogService) {
    // console.log('url: ' + window["BASE_URL"]);
    // console.log('url: ' + window["BASE_URL2"]);
  }

  ngOnInit() {
    this.catalogService.getAllProducts1()
      .subscribe(products => this.products = products);

  }

  GetAllProducts(sort: string, order: string, page: number) {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.catalogService.getAllProducts(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(products => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = 20;
          return this.products;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(products => this.products = products);

  }

  Test() {
    this.exampleDatabase = new ExampleHttpDatabase(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.products;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }

}

export interface GithubApi {
  products: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  // image: string;
  id: string;
  sku: string;
  name: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
  url: string;
  constructor(private http: HttpClient) { }
  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    this.url = window.location.origin;
    const body = { keyword: "", start: "0", isFuzzySearch: true, pageSize: "" };

    const requestUrl = `${this.url}/B2B-store/storefrontapi/catalog/search`;

    // return this.http.post<GithubApi>(requestUrl,body,{
    //   //headers:  { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   withCredentials: true,
    //   // responseType: "arraybuffer",
    // });
    return this.http.post<GithubApi>(requestUrl, body);
  }

}
