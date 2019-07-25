import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss']
})
export class SearchProductsComponent implements OnInit, OnDestroy {

  private searchText$ = new BehaviorSubject<string>('');
  private keyupSubs: Subscription;
  @Output()
  searchTextChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.keyupSubs = this.searchText$.pipe(
      debounceTime(250),
      distinctUntilChanged()
    )
    .subscribe(x => this.searchTextChanged.emit(x));
  }
  ngOnDestroy(): void {
    this.keyupSubs.unsubscribe();
  }


  search(text: string) {
    this.searchText$.next(text);
  }

}
