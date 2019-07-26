import { Component, OnInit, Input, ElementRef, ViewChild, Renderer, ViewChildren } from '@angular/core';
import { ProductPrice } from '../../../models/product-price';
import { ActiveOrderService } from '../../../services/active-order.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-modify-count-product',
  templateUrl: './modify-count-product.component.html',
  styleUrls: ['./modify-count-product.component.scss']
})
export class ModifyCountProductComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  @Input() productPrice: ProductPrice;
  hideEdit = true;
  inputCountProduct: number;
  errorMessage: any;
  result: any;
  onLoad: boolean;
  constructor(private renderer: Renderer, private activeOrderService: ActiveOrderService) {}

  ngOnInit() {
  }

  ShowEdit(show: boolean) {
    this.hideEdit = false;
    this.ngOnInit();
  }

  Add() {
    this.blockUI.start('Loading...');
    this.productPrice.count = 1;
    this.inputCountProduct = this.productPrice.count;
    this.hideEdit = false;
    // console.log('before add');
    // try {
    //   this.activeOrderService.AddItem(this.productPrice.productId)
    //     .subscribe(
    //       (data: Post) => {
    //         console.log('afterRemovedForActiveOrder 1');
    //         this.activeOrderService.afterRemovedForActiveOrder();
    //       },
    //       error => console.log('Post:' + error)
    //     );
    // } catch (e) {
    //   console.log('Exception' + e);
    // }
  }




  Remove() {
    this.blockUI.start('Loading...');
    this.productPrice.count = 0;
    // console.log(' Remove productId=' + this.productPrice.id);
    // this.activeOrderService.RemoveItem(this.productPrice.id)
    //   .subscribe(
    //     (data: Post) => {
    //       // console.log("Result remove successfully!");
    //       //this.ngOnInit();
    //       this.activeOrderService.afterRemovedForActiveOrder();
    //     },
    //     error => console.log('Remove: ' + error)
    //   );
  }

  Change(count: number) {
    this.blockUI.start('Loading...');
    this.productPrice.count = 1;
    this.inputCountProduct = this.productPrice.count;
    this.hideEdit = false;
    // this.activeOrderService.ChangeItemQuantity(this.productPrice.id, count)
    //   .subscribe(
    //     (data: Post) => {
    //       this.activeOrderService.afterRemovedForActiveOrder();
    //     },
    //     error => console.log('Post:' + error)
    //   );

  }
}


