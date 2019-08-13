import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  } from 'events';
import { map, catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/models/dto/product';
import { CatalogService } from 'src/app/services';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bulk-order-item',
  templateUrl: './bulk-order-item.component.html',
  styleUrls: ['./bulk-order-item.component.scss']
})
export class BulkOrderItemComponent implements OnInit {

  @Input()
  itemForm: FormGroup;
  @Input()
  index: number;
  @Output()
  removeClicked = new EventEmitter<number>();


  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
  }

  onRemove() {
    this.removeClicked.emit(this.index);
  }

  get id() { return this.itemForm.get('id'); }

  get sku() { return this.itemForm.get('sku'); }

  get productName() { return this.itemForm.get('productName'); }

  get qty() { return this.itemForm.get('qty'); }


  suggestedProductsFormatter = (item: {name: string}) => item.name;

  searchProductsSuggestionsByName = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(term =>
      this.getSuggestedProducts(term).pipe(
       )
    )
  )

  suggestedProductSelected(event: NgbTypeaheadSelectItemEvent) {
    event.preventDefault();
    if ( !!event.item ) {
      const product = event.item as IProduct;
      this.id.setValue(product.id);
      this.sku.setValue(product.sku);
      this.productName.setValue(product.name);
    }
  }

  private getSuggestedProducts(keyword: string): Observable<IProduct[]> {
    return this.catalogService.getAllProducts(1, 20, null, keyword)
      .pipe(map(x => x.products),
        catchError(() => {
          console.log('Suggested products loading is failed');
          return of([]);
      })
    );
  }

}
