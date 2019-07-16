import { Component, OnInit, Input } from '@angular/core';
import { ActiveOrderService } from '../../../services/active-order.service';
import { Product } from '../../../models/product';
import { ProductProperties } from '../../../models/product-properties';
import { ProductPrice } from '../../../models/product-price';
import { Category } from '../../../models/category';
import { Post } from '../../../models/Post';
import { User } from '../../../models/user';
import { AddedProduct } from '../../../models/added-product';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Location } from '@angular/common';

@Component({
  selector: 'app-active-order-post-checkout',
  templateUrl: './active-order-post-checkout.component.html',
  styleUrls: ['./active-order-post-checkout.component.scss']
})
export class ActiveOrderPostCheckoutComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  @Input() categories: Category[];
  @Input() number = '';
  @Input() status = '';
  @Input() modifiedDate = '';
  @Input() items: Product[];
  @Input() urlDownloadInvoice: string;
  userName = '';
  orderId = 'unknown';
  countItems = 0;
  currencySymbol = '';
  subTotal = '';
  shipping = '';
  total = '';
  result: any;
  onRemove = false;
  onAdd = false;

  constructor(
    private activeOrderService: ActiveOrderService,
    private location: Location
  ) {
    this.countItems = 0;
  }

  ngOnInit() {

  }

}

