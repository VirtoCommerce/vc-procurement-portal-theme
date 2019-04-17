import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {
  @Input() nameProduct: string;
  @Input() categoryProduct: string;
  @Input() sku: string;
  @Input() propertyProduct1Name: string;
  @Input() propertyProduct1Value: string;
  @Input() propertyProduct2Name: string;
  @Input() propertyProduct2Value: string;
  
  
  constructor() {
  }

  ngOnInit() {
  }

}
