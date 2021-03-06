import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { Subject, Observable, of, forkJoin } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, switchMap, map, catchError, finalize } from 'rxjs/operators';
import { CatalogService } from '@api/catalog.service';
import { IProduct } from '@models/dto/product';
import { ActiveOrderService } from '@api/active-order.service';
import { AlertsService } from '@modules/alerts/alerts.service';
import { FullScreenSpinnerService } from '@services/full-screen-spinner.service';

@Component({
  selector: 'app-bulk-order-manual',
  templateUrl: './bulk-order-manual.component.html',
  styleUrls: ['./bulk-order-manual.component.scss']
})
export class BulkOrderManualComponent implements OnInit, OnDestroy {
  public itemsForm: FormGroup;
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
    private alertsService: AlertsService,
    private fullScreenSpinner: FullScreenSpinnerService
  ) {
    // this.items.errors.itemsEmpty
    const itemsForms: FormGroup[] = [];
    for (let i = 0; i < this.defaultItemsCount; i++) {
      const newItemForm = this.createItemForm();
      itemsForms.push(newItemForm);
    }

    this.itemsForm = this.formBuilder.group({
      items: this.formBuilder.array(itemsForms, this.itemsEmptyValidator)
    });
  }

  ngOnInit() { }
  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  public clearItems() {
    this.items.clear();
  }

  public addItem() {
    const itemForm = this.createItemForm();
    this.items.insert(0, itemForm);
    this.validateAllFormFields(this.itemsForm);
  }

  public removeItem(index: number) {
    this.items.removeAt(index);
    this.validateAllFormFields(this.itemsForm);
  }

  public addItemsToCart() {
    const addToCartItems = (this.items.controls as FormGroup[]).map(itemForm => {
      const productId = itemForm.get('id').value;
      const stringQty = itemForm.get('qty').value;
      const productQuantity = parseInt(stringQty, 10);
      return { productId, productQuantity };
    });

    this.activeOrderService.addItems(addToCartItems)
      .subscribe(() => this.alertsService.success(`${this.items.controls.length} items successfully added to the active order.`));
  }

  // isPositiveNumberValidator(control: FormControl): {[s: string]: boolean} {
  //   control
  //   if
  //   return null;
  // }

  private itemsEmptyValidator(itemsForms: FormArray) {
    if (itemsForms == null || itemsForms.controls.length < 1) {
      return { itemsEmpty: true };
    }
    return null;
  }

  private uniqueSkuValidator(control: FormControl): { [s: string]: boolean } {
    const itemsForms = (control.parent || { parent: null }).parent as FormArray;
    if (itemsForms != null) {
      for (const itemForm of itemsForms.controls) {
        if (itemForm !== control.parent && itemForm.get('sku').value === control.value) {
          return { uniqueSku: true };
        }
      }
    }
    return null;
  }

  private qtyValidator(max: number): ValidatorFn { return (control: FormControl ): { [s: string]: boolean } => {
    const stringQty = control.value;
    const intQty = parseInt(stringQty, 10);
    if (isNaN(intQty)) {
      return { isNan: true };
    } else if ( intQty > max ) {
      return { max: true };
    }
    return null;
  };
}

  private getProduct(sku: string): Observable<IProduct> {
    this.fullScreenSpinner.suspend();
    return !sku ? of(null) : this.catalogService.getProductBySku(sku)
      .pipe(catchError(() => {
        console.log('Finding product by sku is failed');
        return of(null);
      }),
      finalize(() => this.fullScreenSpinner.proceed()));
  }


  private createItemForm(
    sku: string = '',
    productName: string = '',
    qty: string = '1'
  ) {
    const itemForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      availableQty: [1],
      sku: [sku, [Validators.required, this.uniqueSkuValidator]],
      productName: [productName],
      qty: [qty, [Validators.required, Validators.pattern('^[1-9]\\d*$' )]]
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
        if (p != null) {
          itemForm.get('id').setValue(p.id);
          itemForm.get('productName').setValue(p.name);
          const qtyValidators = [Validators.required, Validators.pattern('^[1-9]\\d*$')];
          if (p.trackInventory && p.inStock) {
            qtyValidators.push( this.qtyValidator(p.availableQuantity));
          } else {
            itemForm.get('sku').setErrors({ outOfStock: true });
          }
          itemForm.get('qty')
            .setValidators(qtyValidators);
          itemForm.get('qty').updateValueAndValidity();

        } else {
          itemForm.get('id').setValue(null);
          if (itemForm.controls.sku.value !== '') {
            itemForm.get('sku').setErrors({ skuExists: true });
          }
          itemForm.get('productName').setValue('');
          itemForm.get('qty').setValidators([
            Validators.required,
            Validators.min(1)]);
        }
      });

    if (sku) {
      itemForm.get('sku').markAsDirty();
    }
    itemForm.get('qty').markAsDirty();

    return itemForm;
  }


  private validateAllFormFields(formGroup: FormGroup | FormArray) {
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
