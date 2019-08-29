import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }


  setItemsAsInvalidated() {
    this.itemsIsValid = false;
  }

  validateItems() {
    /*
    Сплитим строчки
    в цикле
      Регексом проверяем формат каждой, пишем еррор
      иначе запрашиваем ску, если такого нет то баг

    если массив багов пустой то ставим валидное состояние.
     */
    if (!this.csvText.trim()) {
      return;
    }
    // first checks format
    const  csvLines = this.csvText.split('\r\n');
    if ( csvLines &&  csvLines.length > 0) {
      const results = [];
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < csvLines.length; i++) {
        const csvLine = csvLines[i];
        const result = this.parseAndValidateCsvLine(i + 1, csvLine);
        results.push(result);
      }

      if (results.some(x => x.invalid)) {
        this.itemsIsValid = false;
        this.errors = results.filter(x => x.invalid).map(x => `Error in line ${x.lineIndex}: ${x.message}`);
        return;
      }

      // secondly checks duplicates

      // for end checks sku existence

      this.itemsIsValid = true;
      this.errors = [];
    }


  }

  private parseAndValidateCsvLine(lineIndex: number, csvLine: string): IItemValidationResult {
    //const regex = /(\s*'[^']+'|\s*[^,]+)(?=,|$)/g;
    const splitted =  csvLine.split('/[,;\.\s]/');
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
        message = 'Invalid format of quantity. Qunantity must be interger number.';
      } else {
        bulkOrderItem = new BulkOrderItem(sku, qty);
      }
    }
    return { lineIndex, invalid, message, bulkOrderItem: new BulkOrderItem('123',  11) };
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
