import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  } from 'events';

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


  constructor() { }

  ngOnInit() {
  }

  onRemove() {
    this.removeClicked.emit(this.index);
  }

  get id() { return this.itemForm.get('id'); }

  get sku() { return this.itemForm.get('sku'); }

  get qty() { return this.itemForm.get('qty'); }

}
