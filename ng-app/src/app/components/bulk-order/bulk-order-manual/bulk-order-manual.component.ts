import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import {
  takeUntil,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  exhaust,
  exhaustMap
} from 'rxjs/operators';
import { CatalogService } from 'src/app/services';
import { IProduct } from 'src/app/models/dto/product';

@Component({
  selector: 'app-bulk-order-manual',
  templateUrl: './bulk-order-manual.component.html',
  styleUrls: ['./bulk-order-manual.component.scss']
})
export class BulkOrderManualComponent implements OnInit, OnDestroy {
  newItemForm: FormGroup;
  itemsForm: FormGroup;
  //itemsForms: FormGroup[] = [];
  private defaultItemsCount = 1;
  private unsubscribe = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private catalogService: CatalogService
  ) {
    this.newItemForm = this.formBuilder.group(
      {
        sku: [''],
        productName: [''],
        qty: [1, [Validators.min(1)]]
      }
    );

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

    itemForm.controls.sku.valueChanges
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
          itemForm
            .get('qty')
            .setValidators([
              Validators.required,
              Validators.min(1),
              Validators.max(50)
            ]);
        } else {
          itemForm.get('id').setValue(null);
          itemForm.get('sku').setErrors(Validators.required);
          itemForm.get('productName').setValue('');
        }
      });

    return itemForm;
  }

  itemsEmptyValidator(itemsForms: FormArray) {
    if (itemsForms == null || itemsForms.controls.length < 1) {
      return { itemsEmpty: true };
    }
    return null;
  }

  // валидатор
  //  idSettedValidator(control: FormControl): {[s: string]: boolean} {
  //   if (control.value != null) {
  //       return { 'idRequired': true};
  //   }
  //   return null;
  // }
  // sku unique validator
  uniqueSkuValidator(control: FormControl): { [s: string]: boolean } {
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
    return this.catalogService.getProductBySku(sku);
  }

  get items() {
    return this.itemsForm.get('items') as FormArray;
  }

  addItem() {
    console.log(this.newItemForm);
    const itemForm = this.createItemForm(
      this.newItemForm.get('sku').value,
      this.newItemForm.get('productName').value,
      this.newItemForm.get('qty').value
    );
    // this.itemsForms.push(newItemForm);
    this.items.push(itemForm);
    // to on valueChanges
    itemForm.get('sku').patchValue(this.newItemForm.get('sku').value);
    //itemForm.updateValueAndValidity();
    itemForm.markAsTouched();
    this.itemsForm.updateValueAndValidity();
  }

  removeItem(index: number) {
    // const ix = this.itemsForm.controls.items.indexOf(itemForm);
    // if (ix > -1) {
    //   this.items.splice(ix, 1);
    // }
    this.items.removeAt(index);
    this.itemsForm.updateValueAndValidity();
  }
}
