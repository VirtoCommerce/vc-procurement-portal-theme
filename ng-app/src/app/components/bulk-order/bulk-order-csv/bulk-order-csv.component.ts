import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services';
import { of, Observable } from 'rxjs';
import { concatAll, concatMap, mergeAll, catchError } from 'rxjs/operators';
import { IProduct } from 'src/app/models/dto/product';

class BulkOrderItem{
  constructor(public sku: string, public quantity: number) {}
}
interface IItemValidationResult {
  lineIndex: number;
  invalid: boolean;
  message: string;
  bulkOrderItem: BulkOrderItem;
}

@Component({
  selector: 'app-bulk-order-csv',
  templateUrl: './bulk-order-csv.component.html',
  styleUrls: ['./bulk-order-csv.component.scss']
})
export class BulkOrderCsvComponent implements OnInit {

  itemsIsValid = false;
  csvText = '';
  errors = [];
  private  validationResults: IItemValidationResult[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
  }


  setItemsAsInvalidated() {
    this.itemsIsValid = false;
  }

  validateItems() {
    if (!this.csvText.trim()) {
      this.itemsIsValid = false;
      this.errors = ['Your order is empty. You need to fill order items in CSV fromat like showing on placeholder.']
      return;
    }
    // first checks format
    this.validationResults = this.parseAndValidateCsv();

    if (this.showErrorsIfInvalid()) {
      return;
    }

    // secondly checks duplicates
    this.validateItemsOnDuplicates();
    if (this.showErrorsIfInvalid()) {
      return;
    }

    // for end checks sku existence
    this.validateItemsBySkuOnExistance();
    if (this.showErrorsIfInvalid()) {
      return;
    }

    this.itemsIsValid = true;
    this.errors = [];

  }

  private showErrorsIfInvalid() {
    if (this.validationResults.some(x => x.invalid)) {
      this.itemsIsValid = false;
      this.errors = this.validationResults.filter(x => x.invalid).map(x => `Error in line ${x.lineIndex}: ${x.message}`);
      return true;
    }
    return false;
  }
  private parseAndValidateCsv(): IItemValidationResult[] {
    const  csvLines = this.csvText.split(/\r?\n/);
    const validationResults = [];
    if ( csvLines &&  csvLines.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < csvLines.length; i++) {
        const csvLine = csvLines[i];
        const result = this.parseAndValidateCsvLine(i + 1, csvLine);
        validationResults.push(result);
      }
    }
    return validationResults;
  }

  private parseAndValidateCsvLine(lineIndex: number, csvLine: string): IItemValidationResult {
    //const regex = /(\s*'[^']+'|\s*[^,]+)(?=,|$)/g;
    const splitted =  csvLine.split(/[,;\.\s]/);
    let invalid = false;
    let message = '';
    let bulkOrderItem = null;
    if (splitted.length !== 2 ) {
      invalid = true;
      message = 'An invalid format of order item line.';
    } else {
      const [sku, qtyText] = splitted;
      const qty = parseInt(qtyText, 10);
      if (isNaN(qty)) {
        invalid = true;
        message = 'Invalid format of quantity. Quantity must be integer number.';
      } else {
        bulkOrderItem = new BulkOrderItem(sku, qty);
      }
    }
    return { lineIndex, invalid, message, bulkOrderItem: new BulkOrderItem('123',  11) };
  }


  private validateItemsOnDuplicates() {
    this.validationResults.forEach((r1, i1) => {
      if (this.validationResults.some((r2, i2) => r2.bulkOrderItem.sku === r1.bulkOrderItem.sku && i2 !== i1) ) {
        r1.invalid = true;
        r1.message = 'SKU value is duplicated';
      }
    });
  }

  private getProduct(sku: string): Observable<IProduct> {
    return !sku ? of(null) : this.catalogService.getProductBySku(sku)
    .pipe(catchError(() => {
      console.log('Finding product by sku is failed');
      return of(null);
    } ));
  }

  private validateItemsBySkuOnExistance() {

    const skuArr = this.validationResults.map(x => x.bulkOrderItem.sku);
    const requests = skuArr.map(x => this.catalogService.getProductBySku(x));
    const bySkuResults: IProduct[] = [];
    of(requests).pipe(concatAll()).subscribe(x => x.subscribe(p => bySkuResults.push(p)));
    this.validationResults.forEach(r =>  {
        const products =  bySkuResults.filter(x => x.sku === r.bulkOrderItem.sku );
        if (products === null || products.length > 1) {
          r.invalid = true;
          r.message = 'There is no product with such SKU value';
        }
    });
   }


  addItemsToCart() {
    // todo
    /*
      сплитим
      В цикле собираем пакет команд
      of().pipe(concatAll)
      сообщение об успешном добавлении
     */
  }

}
