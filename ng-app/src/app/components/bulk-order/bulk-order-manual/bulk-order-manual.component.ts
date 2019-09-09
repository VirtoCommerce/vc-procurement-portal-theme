import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Subject, Observable, iif, of, forkJoin } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, switchMap, exhaust, exhaustMap, every, map, filter, tap, catchError } from 'rxjs/operators';
import { CatalogService } from 'src/app/services';
import { IProduct } from 'src/app/models/dto/product';
import { ActiveOrderService } from 'src/app/services/active-order.service';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { AlertsService } from 'src/app/modules/alerts/alerts.service';

@Component({
  selector: 'app-bulk-order-manual',
  templateUrl: './bulk-order-manual.component.html',
  styleUrls: ['./bulk-order-manual.component.scss']
})
export class BulkOrderManualComponent implements OnInit, OnDestroy {
  itemsForm: FormGroup;

  sugesstedProducts: IProduct[];

  // itemsForms: FormGroup[] = [];
  private defaultItemsCount = 4;
  private unsubscribe = new Subject();

  get items() {
    return this.itemsForm.get('items') as FormArray;
  }

  get itemsIsEmpty() {
    return this.items.controls.length === 0;
  }

  constructor(
    private formBuilder: FormBuilder,
    private catalogService: CatalogService,
    private activeOrderService: ActiveOrderService,
    private alertsService: AlertsService
  ) {
    const itemsForms: FormGroup[] = [];
    for (let i = 0; i < this.defaultItemsCount; i++) {
      const newItemForm = this.createItemForm();
      itemsForms.push(newItemForm);
    }

    this.itemsForm = this.formBuilder.group({
      items: this.formBuilder.array(itemsForms, this.itemsEmptyValidator )
    });
  }

  ngOnInit() {}
  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  clearItems() {
    this.items.clear();

  }

  addItem() {
    const itemForm = this.createItemForm();
    this.items.insert(0, itemForm);
    this.validateAllFormFields(this.itemsForm);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
    this.validateAllFormFields(this.itemsForm);
  }

  addItemsToCart() {
    const addToCartRequests =  (this.items.controls as FormGroup[]).map( itemForm => {
      const productId = itemForm.get('id').value;
      const quantity = itemForm.get('qty').value;
      return this.activeOrderService.addItem(productId, quantity);
    });

    forkJoin(addToCartRequests)
    .subscribe(() => this.alertsService.success(`${this.items.controls.length} items successfully added to the active order.`) );
  }

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

  private itemsEmptyValidator(itemsForms: FormArray) {
    if (itemsForms == null || itemsForms.controls.length < 1) {
      return { itemsEmpty: true };
    }
    return null;
  }

  // sku unique validator
  private uniqueSkuValidator(control: FormControl): { [s: string]: boolean } {
    const itemsForms = (control.parent || { parent: null }).parent as FormArray;
    if (itemsForms != null) {
      for (const itemForm of itemsForms.controls) {
        if (  itemForm !== control.parent && itemForm.get('sku').value === control.value) {
          return { uniqueSku: true };
        }
      }
    }
    return null;
  }

  private getProduct(sku: string): Observable<IProduct> {
    return !sku ? of(null) : this.catalogService.getProductBySku(sku)
    .pipe(catchError(() => {
      console.log('Finding product by sku is failed');
      return of(null);
    } ));
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

  private createItemForm(
    sku: string = '',
    productName: string = '',
    qty: number = 1
  ) {
    const itemForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      availableQty: [1],
      sku: [sku, [Validators.required, this.uniqueSkuValidator]],
      productName: [productName],
      qty: [qty, [Validators.required, Validators.min(1)]]
    });

    itemForm.get('sku').valueChanges
      .pipe(
        takeUntil(this.unsubscribe),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(x => this.getProduct(x))
      )
      .subscribe(p => {
        itemForm.get('id').setValue(null);
        // itemForm.get('sku').setValidators([Validators.required, this.uniqueSkuValidator]);
        if (p != null) {
          itemForm.get('id').setValue(p.id);
          itemForm.get('productName').setValue(p.name);
          const skuValidators = [Validators.required];
          if (p.trackInventory && p.inStock) {
            skuValidators.push(Validators.min(1), Validators.max(p.availableQuantity));
          } else {
            itemForm.get('sku').setErrors({ outOfStock: true });
          }
          itemForm.get('qty')
            .setValidators(skuValidators);
          itemForm.get('qty').updateValueAndValidity();

        } else {
          itemForm.get('id').setValue(null);
          if (itemForm.controls.sku.value !== '') {
            itemForm.get('sku').setErrors({ skuExists: true });
          }
          itemForm.get('productName').setValue('');
          itemForm.get('qty').setValidators( [
            Validators.required,
            Validators.min(1)]);
        }
      });

    // itemForm.get('sku').updateValueAndValidity();

    if (sku) {
      itemForm.get('sku').markAsDirty();
    }
    itemForm.get('qty').markAsDirty();

    return itemForm;
  }


 private  validateAllFormFields(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.updateValueAndValidity({ onlySelf: true });
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.validateAllFormFields(control);
      }
    });
  }


}
