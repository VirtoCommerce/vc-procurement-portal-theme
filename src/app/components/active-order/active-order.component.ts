import { Component, OnInit, Input } from '@angular/core';
import { ActiveOrderService } from '../../services/active-order.service';
import { Product } from '../../models/product';
import { ProductProperties } from '../../models/product-properties';
import { ProductPrice } from '../../models/product-price';
import { Category } from '../../models/category';
import { User } from '../../models/user';
import { AddedProduct } from '../../models/added-product';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services';
import { first } from 'rxjs/operators';
import { IActiveOrder, IActiveOrderCurrency } from '../../models/iactive-order';

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
  // currencySymbol:   IActiveOrderCurrency;
  subTotal: string = "";
  shipping: string = "";
  total: string = "";
  items: any;
  products: Product[];
  result: any;
  onRemove = false;
  onAdd = false;
  currentUser: User;
  userFromApi: User;
  activeOrder: IActiveOrder;

  constructor(
    private activeOrderService: ActiveOrderService,
    private userService: UserService,
    private authenticationService: AuthenticationService

  ) {
    this.countItems = 0;
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {

    this.FakeInit();
  }

  Init() {
    this.getUserName();
    this.getActiveOrder("");
    this.activeOrderService.removeForActiveOrder.
      subscribe((onRemove: boolean) => {
        this.onRemove = onRemove;
        this.getActiveOrder("");
      },
        (error: string) => {
          console.log("Active order component. Error 'removeForActiveOrder': " + error)
        }
      )
  }

  FakeInit() {
    this.getFakeUserName();
    this.getFakeActiveOrder("");
  }

  getFakeUserName() {
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.userFromApi = user;
      this.userName = user.username;
    });
  }

  getUserName() {
    this.activeOrderService.getUserName()
      .subscribe(
        (data: any) => {
          this.userName = data.userName;
        },
        error => {
          console.log("Active order component. Error 'getUserName': " + error)
          this.blockUI.stop();
        }
      );
  }

  getFakeActiveOrder(t: string) {
    this.activeOrderService.getFakeTotal()
      .subscribe(
        (data: any) => {
          this.activeOrder = data[0] as IActiveOrder;
          this.countItems = this.activeOrder.itemsCount;
          this.subTotal = this.activeOrder.subTotal.formattedAmount;
          this.shipping = this.activeOrder.shippingPrice.formattedAmount;
          this.total = this.activeOrder.total.formattedAmount;
          this.fillProducts(this.activeOrder);

          // let _addedProducts = new Array<AddedProduct>();
          // this.activeOrderService.afterLoad(_addedProducts);
        },
        error => {
          this.blockUI.stop();
          console.log("Active order component. Error 'getTotal': " + error);
        }
      );

  }

  getActiveOrder(t: string) {
    this.activeOrderService.getTotal(t)
      .subscribe(
        (data: any) => {
          this.countItems = data.itemsCount;
          this.currencySymbol = data.currency.symbol;
          this.subTotal = data.subTotal.currency.symbol + data.subTotal.amount;
          if (data.shippingPrice.amount === 0) {
            this.shipping = 'Free';
          } else {
            this.shipping = data.shippingPrice.currency.symbol + data.shippingPrice.amount;
          }
          this.total = data.total.currency.symbol + data.total.amount;
          //console.log("STOP! Active order , getActiveOrder");
          //this.blockUI.stop();
          this.fillProducts(data);
        },
        error => {
          this.blockUI.stop();
          console.log("Active order component. Error 'getTotal': " + error);
        }
      );
  }

  fillProducts(data: any) {
    console.log("fillProducts count: " + data.items.length);
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
    this.activeOrderService.afterLoad(_addedProducts);
  }

  clear() {
    //console.log('Remove all');
    this.activeOrderService.Clear();
  }
}

