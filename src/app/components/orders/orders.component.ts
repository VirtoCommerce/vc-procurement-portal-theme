import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  heroes$: Observable<Product[]>;
  test: string;
  constructor() { }
  // constructor(private store: Store<fromReducer.product.State>) {
  //   this.test = "qwe";
  // }

  ngOnInit() {
    // this.heroes$ = this.store.pipe(select(fromSelectors.getProducts));
    // this.test = "qwe";
  }

}
