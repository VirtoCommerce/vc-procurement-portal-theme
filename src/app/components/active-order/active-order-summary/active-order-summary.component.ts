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
  styleUrls: ['./active-order-summary.component.css']
})
export class ActiveOrderSummaryComponent implements OnInit {
  urlDownloadInvoice: string;
  @BlockUI() blockUI: NgBlockUI;
  @Input() categories: Category[];
  userName: string = "";
  orderId: string = "unknown";
  countItems: number = 0;
  currencySymbol: string = "";
  subTotal: string = "";
  shipping: string = "";
  total: string = "";
  items: any;
  products: Product[];
  result: any;
  onRemove = false;
  onAdd = false;
  createOrder: any;
  isSuccessfully: boolean = false;
  constructor(
    private activeOrderService: ActiveOrderService,
    private location: Location,
    private router: Router
  ) {
    this.countItems = 0;
  }

  ngOnInit() {
    this.getUserName();
    this.getActiveOrder("");
    this.activeOrderService.removeForActiveOrder.
      subscribe((onRemove: boolean) => {
        this.onRemove = onRemove;
        this.getActiveOrder("");
      },
        (error: string) => {
          console.log("Error getUserName: " + error)
        }
      )
  }

  getUserName() {
    // console.log("START! Active order summary, getUserName");
    this.blockUI.start("Get username...");
    this.activeOrderService.getUserName()
      .subscribe(
        (data: any) => {
          this.userName = data.userName;
          // console.log("STOP! Active order summary, getUserName");
          this.blockUI.stop();
        },
        (error: string) => {
          console.log("Error getUserName: " + error)
          this.blockUI.stop();
        }
      );
  }

  getActiveOrder(t: string) {
    // console.log("START! Active order  summary, getActiveOrder");
    this.blockUI.start("Get total active order...");
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
          }
          catch (e) {
            this.blockUI.stop();
            console.log('Error(Catch) getActiveOrder:' + e);
          }
        },
        error => {
          this.blockUI.stop();
          console.log("Error getActiveOrder: " + error);
        }
      );
  }

  fillProducts(data: any) {
    // console.log("START! Active order summary, fillProducts");
    this.blockUI.start("Get details of active order...");
    this.products = new Array<Product>();
    let _addedProducts = new Array<AddedProduct>();
    for (var i in data.items) {
      let product = new Product();
      let productProperties = new ProductProperties();
      let priceProduct = new ProductPrice();
      productProperties.image = data.items[i].imageUrl;
      productProperties.productId = data.items[i].productId;
      productProperties.name = data.items[i].name;
      productProperties.sku = data.items[i].sku;
      for (var j in this.categories) {
        if (data.items[i].categoryId == this.categories[j].id) {
          productProperties.category = this.categories[j].name;
          break;
        }
      }
      priceProduct.id = data.items[i].id;
      priceProduct.productId = data.items[i].productId;
      priceProduct.currency = data.items[i].salePrice.currency.symbol;
      priceProduct.price = data.items[i].salePrice.amount;
      priceProduct.count = data.items[i].quantity;
      product.productProperties = productProperties;
      product.productPrice = priceProduct;
      let item = new AddedProduct(priceProduct.id, priceProduct.productId, priceProduct.count);
      _addedProducts.push(item);
      this.products.push(product);
    }

    this.activeOrderService.afterLoad(_addedProducts);
    // console.log("STOP! Active order summary, fillProduct()");
    this.blockUI.stop();
    // this.activeOrderService.afterRemovedForTable();
  }

  close() {
    this.location.back();
  }

  checkout() {
    // console.log("START! Active order summary, checkout");
    this.blockUI.start("Creating order...");
    this.activeOrderService.createOrder()
      .subscribe(
        (data: ICreateOrder) => {
          this.createOrder = data.order;
          // console.log("STOP! Active order summary, checkout");
          this.blockUI.stop();
          this.isSuccessfully = true;
          this.urlDownloadInvoice = "storefrontapi/orders/" + this.createOrder.number + "/invoice";
          this.ngOnInit();
          //this.activeOrderService.afterRemovedForTable();
        },
        (error: string) => {
          console.log("Error checkout: " + error)
          this.blockUI.stop();
          //this.activeOrderService.afterRemovedForTable();
        }
      );
    this.blockUI.stop();
    //this.activeOrderService.afterRemovedForTable();
  }

}
