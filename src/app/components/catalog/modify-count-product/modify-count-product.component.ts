import { Component, OnInit, Input, ElementRef, ViewChild, Renderer, ViewChildren } from '@angular/core';
import { ProductPrice } from '../../../models/product-price';

@Component({
  selector: 'app-modify-count-product',
  templateUrl: './modify-count-product.component.html',
  styleUrls: ['./modify-count-product.component.css']
})
export class ModifyCountProductComponent implements OnInit {
  @Input() productPrice: ProductPrice;
  hideEdit: boolean = true;
  //@ViewChild('inputCount') inputCount1: ElementRef;
  inputCountProduct: number;
  constructor(private renderer: Renderer) {
  }

  ngOnInit() {
    // this.countProduct = 0;
    // this.priceProduct = 0.0;
    // this.currencyProduct = "$";
  }

  ShowEdit(show: boolean) {
    this.hideEdit = false;
    //document.getElementById('inputCountProduct').focus();
    this.ngOnInit();
  }

  Add() {
    this.productPrice.count = 1;
    this.inputCountProduct = this.productPrice.count;
    this.hideEdit = false;
    this.ngOnInit();
  }

  Remove() {
    this.productPrice.count = 0;
    this.ngOnInit();
  }
  Save(count: number) {
    this.productPrice.count = count;
    this.hideEdit = true;
    this.ngOnInit();
  }

  FocusOut(count: number) {
    this.productPrice.count = count;
    this.hideEdit = true;
    //document.getElementById('lblName').innerHTML ='7';
    this.ngOnInit();
  }
}
