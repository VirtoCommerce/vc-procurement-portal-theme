import { Component, OnInit, Input } from '@angular/core';
import { ProductProperties } from '../../../models/product-properties';
import { ActiveOrderService } from '../../../services/active-order.service';

@Component({
  selector: 'app-product-properties',
  templateUrl: './product-properties.component.html',
  styleUrls: ['./product-properties.component.css']
})
export class ProductPropertiesComponent implements OnInit {
  @Input() productProperties: ProductProperties;
  // @Input() nameProduct: string;
  // @Input() categoryProduct: string;
  // @Input() sku: string;
  // @Input() propertyProduct1Name: string;
  // @Input() propertyProduct1Value: string;
  // @Input() propertyProduct2Name: string;
  // @Input() propertyProduct2Value: string;


  constructor(

  ) {
  }

  ngOnInit() {
  }

}
