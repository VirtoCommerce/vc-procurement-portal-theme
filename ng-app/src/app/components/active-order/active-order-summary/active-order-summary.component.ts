import { Component, OnInit, Input } from '@angular/core';
import { ActiveOrderService } from '../../../services/active-order.service';
import { Product } from '../../../models/product';
import { ProductProperties } from '../../../models/product-properties';
import { ProductPrice } from '../../../models/product-price';
import { Category } from '../../../models/category';
import { User } from '../../../models/user';
import { AddedProduct } from '../../../models/added-product';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Location } from '@angular/common';
import { ICreateOrder } from '../../../models/create-order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-order-summary',
  templateUrl: './active-order-summary.component.html',
  styleUrls: ['./active-order-summary.component.scss']
})
export class ActiveOrderSummaryComponent implements OnInit {
  urlDownloadInvoice: string;
  @BlockUI() blockUI: NgBlockUI;
  @Input() categories: Category[];
  userName = '';
  orderId = 'unknown';
  countItems = 0;
  currencySymbol = '';
  subTotal = '';
  shipping = '';
  total = '';
  items: any;
  products: Product[];
  result: any;
  onRemove = false;
  onAdd = false;
  createOrder: any;
  isSuccessfully = false;
  constructor(
    private activeOrderService: ActiveOrderService,
    private location: Location,
    private router: Router
  ) {
    this.countItems = 0;
  }

  ngOnInit() {
    this.getUserName();
    this.getActiveOrder('');
    this.activeOrderService.removeForActiveOrder.
      subscribe((onRemove: boolean) => {
        this.onRemove = onRemove;
        this.getActiveOrder('');
      },
        (error: string) => {
          console.log('Error getUserName: ' + error)
        }
      );
  }

  getUserName() {
    // console.log("START! Active order summary, getUserName");
    this.blockUI.start('Get username...');
    this.activeOrderService.getUserName()
      .subscribe(
        (data: any) => {
          this.userName = data.userName;
          // console.log("STOP! Active order summary, getUserName");
          this.blockUI.stop();
        },
        (error: string) => {
          console.log('Error getUserName: ' + error)
          this.blockUI.stop();
        }
      );
  }

  getActiveOrder(t: string) {
    // console.log("START! Active order  summary, getActiveOrder");
    this.blockUI.start('Get total active order...');
    console.log('active-order-summary');
    this.activeOrderService.getTotal(t)
      .subscribe(
        (data: any) => {
          try {
            this.countItems = data.itemsCount;
            this.currencySymbol = data.currency.symbol;
            this.subTotal = data.subTotal.currency.symbol + data.subTotal.amount;
            if (data.shippingPrice.amount === 0) {
              this.shipping = 'Free';
            } else {
              this.shipping = data.shippingPrice.currency.symbol + data.shippingPrice.amount;
            }
            this.total = data.total.currency.symbol + data.total.amount;
            // console.log("STOP! Active order summary, getTotal");
            this.blockUI.stop();
            this.fillProducts(data);
          } catch(e) {
            this.blockUI.stop();
            console.log('Error(Catch) getActiveOrder:' + e);
          }
        },
        error => {
          this.blockUI.stop();
          console.log('Error getActiveOrder: ' + error);
        }
      );
  }

  fillProducts(data: any) {
    // console.log("START! Active order summary, fillProducts");
    this.blockUI.start('Get details of active order...');
    this.products = new Array<Product>();
    const addedProducts = new Array<AddedProduct>();
    for (const i of data.items) {
      const product = new Product();
      const productProperties = new ProductProperties();
      const priceProduct = new ProductPrice();
      productProperties.image = i.imageUrl;
      productProperties.productId = i.productId;
      productProperties.name = i.name;
      productProperties.sku = i.sku;

      for (const cat of this.categories) {
        if (i.categoryId === cat.id) {
          productProperties.category = cat.name;
          break;
        }

      }
      priceProduct.id = i.id;
      priceProduct.productId = i.productId;
      priceProduct.currency = i.salePrice.currency.symbol;
      priceProduct.price = i.salePrice.amount;
      priceProduct.count = i.quantity;
      product.productProperties = productProperties;
      product.productPrice = priceProduct;
      const item = new AddedProduct(priceProduct.id, priceProduct.productId, priceProduct.count);
      addedProducts.push(item);
      this.products.push(product);
    }

    this.activeOrderService.afterLoad(addedProducts);
    // console.log("STOP! Active order summary, fillProduct()");
    this.blockUI.stop();
    // this.activeOrderService.afterRemovedForTable();
  }

  close() {
    this.location.back();
  }

  checkout() {
    // console.log("START! Active order summary, checkout");
    this.blockUI.start('Creating order...');
    this.activeOrderService.createOrder()
      .subscribe(
        (data: ICreateOrder) => {
          this.createOrder = data.order;
          // console.log("STOP! Active order summary, checkout");
          this.blockUI.stop();
          this.isSuccessfully = true;
          this.urlDownloadInvoice = 'storefrontapi/orders/' + this.createOrder.number + '/invoice';
          this.ngOnInit();
          // this.activeOrderService.afterRemovedForTable();
        },
        (error: string) => {
          console.log('Error checkout: ' + error)
          this.blockUI.stop();
          // this.activeOrderService.afterRemovedForTable();
        }
      );
    this.blockUI.stop();
    // this.activeOrderService.afterRemovedForTable();
  }

}

