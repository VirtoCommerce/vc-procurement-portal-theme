import { Component, OnInit, Input, ElementRef, ViewChild, Renderer, ViewChildren } from '@angular/core';
import { ProductPrice } from '../../../models/product-price';
import { ActiveOrderService } from '../../../services/active-order.service';
import { Post } from '../../../models/Post';
import { AddedProduct } from '../../../models/added-product';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-modify-count-product',
  templateUrl: './modify-count-product.component.html',
  styleUrls: ['./modify-count-product.component.css']
})
export class ModifyCountProductComponent implements OnInit {
  @Input() productPrice: ProductPrice;
  hideEdit: boolean = true;
  //@Input() editable: boolean = true;
  inputCountProduct: number;
  errorMessage: any;
  result: any;
  onLoad: boolean;
  constructor(
    private renderer: Renderer,
    private activeOrderService: ActiveOrderService
  ) {
  }

  ngOnInit() {
  }

  ShowEdit(show: boolean) {
    this.hideEdit = false;
    this.ngOnInit();
  }

  Add() {
    this.productPrice.count = 1;
    this.inputCountProduct = this.productPrice.count;
    this.hideEdit = false;
    console.log('before add');
    try {
      this.activeOrderService.Add(this.productPrice.productId)
        .subscribe(
          (data: Post) => {
            this.activeOrderService.afterRemovedForActiveOrder();
          },
          error => console.log("Post:" + error)
        );
      ;
    }
    catch (e) {
      console.log('Exception' + e);
    }
    console.log('after add');
    this.activeOrderService.afterRemovedForActiveOrder();
    this.ngOnInit();
  }




  Remove() {
    this.productPrice.count = 0;
    console.log(' Remove productId=' + this.productPrice.id);
    try {
      this.activeOrderService.Remove(this.productPrice.id)
        .subscribe(
          (data: Post) => {
            console.log("Result remove successfully!");
            this.ngOnInit();
          },
          error => console.log("Remove: " + error)
        );
      ;
    }
    catch (e) {
      console.log('Exception' + e);
    }
    this.activeOrderService.afterRemovedForActiveOrder();
  }

  Change(count: number) {
    console.log('Change:' + count);
    this.productPrice.count = 1;
    this.inputCountProduct = this.productPrice.count;
    this.hideEdit = false;
    try {
      this.activeOrderService.Change(this.productPrice.id, count)
        .subscribe(
          (data: Post) => {
          },
          error => console.log("Post:" + error)
        );
      ;
    }
    catch (e) {
      console.log('Exception' + e);
    }
    this.activeOrderService.afterRemovedForActiveOrder();
    this.ngOnInit();
  }

  FocusOut(count: number) {
    // this.productPrice.count = count;
    // this.hideEdit = true;
    // this.Change(count);
    // this.ngOnInit();
  }
}
