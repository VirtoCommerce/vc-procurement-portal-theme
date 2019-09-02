import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services';
import { of, Observable, forkJoin } from 'rxjs';
import { concatAll, concatMap, mergeAll, catchError, mergeMap } from 'rxjs/operators';
import { IProduct } from 'src/app/models/dto/product';
import { ActiveOrderService } from 'src/app/services/active-order.service';
import { AlertsService } from 'src/app/modules/alerts/alerts.service';

class BulkOrderItem {
  productId: string = null;
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
  private  validationResult: IItemValidationResult[] = [];

  constructor(private catalogService: CatalogService, private activeOrderService: ActiveOrderService, private alertsService: AlertsService) { }

  ngOnInit() {
  }


  setItemsAsInvalidated() {
    this.itemsIsValid = false;
  }

  /**
   * on button validate cklicked
   */
  async validate() {
    if (!this.csvText.trim()) {
      this.itemsIsValid = false;
      this.errors = ['Your order is empty. You need to fill order items in CSV fromat like showing on placeholder.']
      return;
    }
    // first checks format
    this.validationResult = this.parseAndValidateCsv();
    if (this.showErrorsIfInvalid()) {
      return;
    }

    // secondly checks duplicates
    this.validateItemsOnDuplicates();
    if (this.showErrorsIfInvalid()) {
      return;
    }

    // for end checks sku existence
    await this.validateItemsWithRealProduct();
    if (this.showErrorsIfInvalid()) {
      return;
    }

    this.itemsIsValid = true;
    this.errors = [];
    this.alertsService.success('Bulk order items are successfully validated');
  }

  /**
   * check if exists ivalid item and show errors in that case.
   * returns True if exist invalid items
   */
  private showErrorsIfInvalid(): boolean {
    if (this.validationResult.some(x => x.invalid)) {
      this.itemsIsValid = false;
      this.errors = this.validationResult.filter(x => x.invalid).map(x => `Error in line ${x.lineIndex}: ${x.message}`);
      return true;
    }
    return false;
  }

  /**
   * parse CSV text and validate format. Returns IItemValidationResult[]
   */
  private parseAndValidateCsv(): IItemValidationResult[] {
    const  csvLines = this.csvText.split(/\r?\n/);
    const validationResult = [];
    if ( csvLines &&  csvLines.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < csvLines.length; i++) {
        const csvLine = csvLines[i];
        const result = this.parseAndValidateCsvLine(i + 1, csvLine);
        validationResult.push(result);
      }
    }
    return validationResult;
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
    return { lineIndex, invalid, message, bulkOrderItem };
  }

  /**
   * validate parsed items on duplicates by SKU
   */
  private validateItemsOnDuplicates() {
    this.validationResult.forEach((vr1) => {
    if (this.validationResult.some((vr2) => vr2.bulkOrderItem.sku === vr1.bulkOrderItem.sku && vr2.lineIndex !== vr1.lineIndex) ) {
        vr1.invalid = true;
        vr1.message = 'SKU value is duplicated';
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

  /**
   * validate parsed items on real existence of products with such SKU values
   */
  private async validateItemsWithRealProduct() {
    const skuArr = this.validationResult.map(x => x.bulkOrderItem.sku);
    const requests = skuArr.map(x => this.getProduct(x));
    const bySkuResults = await forkJoin(requests).toPromise();
    this.validationResult.forEach(r =>  {
        const products =  bySkuResults.filter(x => x && x.sku === r.bulkOrderItem.sku );
        if (!products || products.length === 0 || products.length > 1) {
          r.invalid = true;
          r.message = 'There is no product with such SKU value';
        } else {
          const product = products[0];
          r.bulkOrderItem.productId = product.id;
          if (!product.inStock) {
            r.invalid = true;
            r.message = 'Product out of shtock!';
          } else if (r.bulkOrderItem.quantity > product.availableQuantity ) {
            r.invalid = true;
            r.message = `The requested quantity of goods ${r.bulkOrderItem.quantity} exceeds the maximum available ${product.availableQuantity}`;
          }
        }
    });
   }


  addItemsToCart() {
    if (!this.itemsIsValid) {
       return;
    }
    const addToCartRequests = this.validationResult.map(x => this.activeOrderService.addItem(x.bulkOrderItem.productId, x.bulkOrderItem.quantity));
    forkJoin(addToCartRequests)
    .subscribe(x => {
      this.itemsIsValid = false;
      this.alertsService.success(`${this.validationResult.length} items successfully added to the active order.`);

   });

  }

}