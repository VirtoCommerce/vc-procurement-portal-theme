import { Component, OnInit, Input, isDevMode } from '@angular/core';
import { ActiveOrderService } from '../../services/active-order.service';
import { Product } from '../../models/product';



import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services';
import { first } from 'rxjs/operators';
import { IActiveOrder, IActiveOrderCurrency } from '../../models/iactive-order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.scss']
})
export class ActiveOrderComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  cart$: Observable<any>;

  constructor(
    private activeOrderService: ActiveOrderService,
  ) {
    // this.currentUser = this.authenticationService.currentUserValue;
  }


  ngOnInit() {
    this.cart$ = this.activeOrderService.Cart;
    this.cart$.subscribe(x => console.log(x));
  }


  getActiveOrder(t: string) {

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
    this.activeOrderService.ClearAllItems();
  }
}

