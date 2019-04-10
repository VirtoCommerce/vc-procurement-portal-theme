import { Component, OnInit, Input, ElementRef, ViewChild, Renderer , ViewChildren } from '@angular/core';

@Component({
  selector: 'app-modify-count-product',
  templateUrl: './modify-count-product.component.html',
  styleUrls: ['./modify-count-product.component.css']
})
export class ModifyCountProductComponent implements OnInit {
  @Input() currencyProduct: string;
  @Input() priceProduct: number;
  @Input() countProduct: number;
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
    this.countProduct = 1;
    this.inputCountProduct=this.countProduct ;
    this.hideEdit = false;
    this.ngOnInit();
  }

  Remove() {
    this.countProduct = 0;
    this.ngOnInit();
  }
  Save(count: number) {
    this.countProduct = count;
    this.hideEdit = true;
    this.ngOnInit();
  }

  FocusOut(count: number) {
    this.countProduct = count; 
    this.hideEdit = true;
    //document.getElementById('lblName').innerHTML ='7';
    this.ngOnInit();
  }
}
