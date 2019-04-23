import { Component, OnInit, Input } from '@angular/core';
import { ActiveOrderService } from '../../services/active-order.service';
import { Product } from '../../models/product';
import { ProductProperties } from '../../models/product-properties';
import { ProductPrice } from '../../models/product-price';
import { Category } from '../../models/category';
import { Post } from '../../models/Post';
import { User } from '../../models/user';
import { AddedProduct } from '../../models/added-product';
import { BlockUI, NgBlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.css']
})
export class ActiveOrderComponent implements OnInit {
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

  constructor(
    private activeOrderService: ActiveOrderService
  ) {
    this.countItems = 0;
  }

  ngOnInit() {
    this.getUserName();
    this.getActiveOrder("");
    this.activeOrderService.removeForActiveOrder.
      subscribe((onRemove: boolean) => {
        this.onRemove = onRemove;
        console.log('!!!onRemove!!! ' + onRemove);
        this.getActiveOrder("");
      },
        (error: string) => {
          console.log("Error getUserName: " + error)
        }
      )
  }

  getUserName() {
    this.blockUI.start("Get username...");
    this.activeOrderService.getUserName()
      .subscribe(
        (data: any) => {
          this.userName = data.userName;
          console.log("Result getUserName: " + data.userName)
          this.blockUI.stop();
        },
        error => {
          console.log("Error getUserName: " + error)
          this.blockUI.stop();
        }
      );
  }

  getActiveOrder(t: string) {
    this.blockUI.start("Get total active order...");
    this.activeOrderService.getTotal(t)
      .subscribe(
        (data: any) => {
          try {
            console.log('OK getActiveOrder:' + data);
            this.countItems = data.itemsCount;
            this.currencySymbol = data.currency.symbol;
            this.subTotal = data.subTotal.currency.symbol + data.subTotal.amount;
            if (data.shippingPrice.amount === 0) {
              this.shipping = 'Free';
            } else {
              this.shipping = data.shippingPrice.currency.symbol + data.shippingPrice.amount;
            }
            this.total = data.total.currency.symbol + data.total.amount;
            this.blockUI.stop();
            this.fillProducts(data);
          }
          catch (e) {
            this.blockUI.stop();
            console.log('Hook getActiveOrder:' + e);
          }
        },
        error => {
          this.blockUI.stop();
          console.log("Error getActiveOrder: " + error);
        }
      );
  }

  fillProducts(data: any) {
    this.blockUI.start("Get details of active order...");
    if (data == null) {
      console.log('null catch')
    }
    try {
      this.products = new Array<Product>();
      let _addedProducts = new Array<AddedProduct>();
      for (var i in data.items) {
        let product = new Product();
        let productProperties = new ProductProperties();
        let priceProduct = new ProductPrice();

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
      console.log('fill: ' + this.products.length);
      
      this.activeOrderService.afterLoad(_addedProducts);
      this.blockUI.stop();
    } catch (e) {
      console.log('catch works!!!');
      
      this.activeOrderService.afterRemovedForTable();
      this.blockUI.stop();
    }
    // this.activeOrderService.afterRemovedForTable();
  }

  clear() {
    //console.log('Remove all');
    this.activeOrderService.Clear();
  }
}

