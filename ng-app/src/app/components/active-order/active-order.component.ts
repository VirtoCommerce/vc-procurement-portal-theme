import { Component, OnInit, Input, isDevMode } from '@angular/core';
import { ActiveOrderService } from '../../services/active-order.service';
import { Product } from '../../models/product';
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
  styleUrls: ['./active-order.component.scss']
})
export class ActiveOrderComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  @Input() categories: Category[];
  userName = '';
  orderId = 'unknown';
  countItems = 0;
  currencySymbol = '';
  // currencySymbol:   IActiveOrderCurrency;
  subTotal = '';
  shipping = '';
  total = '';
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
    // this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.Init();
  }

  Init() {
    this.getUserName();
    this.getActiveOrder('');
    this.activeOrderService.removeForActiveOrder.
      subscribe((onRemove: boolean) => {
        this.onRemove = onRemove;
        this.getActiveOrder('');
      },
        (error: string) => {
          console.log('Active order component. Error \'removeForActiveOrder\': ' + error)
        }
      );
  }

  private getUserName() {
    this.activeOrderService.getUserName()
      .subscribe(
        (data: any) => {
          this.userName = data.userName;
        },
        error => {
          console.log('Active order component. Error \'getUserName\': ' + error)
          this.blockUI.stop();
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
          // console.log("STOP! Active order , getActiveOrder");
          // this.blockUI.stop();
          this.fillProducts(data);
        },
        error => {
          this.blockUI.stop();
          console.log('Active order component. Error \'getTotal\': ' + error);
        }
      );
  }

  private fillProducts(data: any) {
    // console.log('fillProducts count: ' + data.items.length);
    // this.products = new Array<Product>();
    // let _addedProducts = new Array<AddedProduct>();
    // for (const i of data.items) {
    //   const product = new Product();
    //   const productProperties = new ProductProperties();
    //   const priceProduct = new ProductPrice();

    //   productProperties.productId = i.productId;
    //   productProperties.name = i.name;
    //   productProperties.sku = i.sku;
    //   for (const cat of this.categories) {
    //     if (i.categoryId === cat.id) {
    //       productProperties.category = cat.name;
    //       break;
    //     }
    //   }
    //   priceProduct.id = i.id;
    //   priceProduct.productId = i.productId;
    //   priceProduct.currency = i.salePrice.currency.symbol;
    //   priceProduct.price = i.salePrice.amount;
    //   priceProduct.count = i.quantity;
    //   product.productProperties = productProperties;
    //   product.productPrice = priceProduct;
    //   let item = new AddedProduct(priceProduct.id, priceProduct.productId, priceProduct.count);
    //   _addedProducts.push(item);
    //   this.products.push(product);
    // }
    // this.activeOrderService.afterLoad(_addedProducts);
  }

  clear() {
    //console.log('Remove all');
    this.activeOrderService.Clear();
  }
}

