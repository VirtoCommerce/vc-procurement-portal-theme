import { Component, OnInit, Input } from '@angular/core';
import { ActiveOrderService } from '../../../services/active-order.service';
import { Product } from '../../../models/product';


@Component({
  selector: 'app-active-order-detail',
  templateUrl: './active-order-detail.component.html',
  styleUrls: ['./active-order-detail.component.css']
})
export class ActiveOrderDetailComponent implements OnInit {
  @Input() isSummary: boolean = false;
  @Input() products: Product[];
  constructor(
    private activeOrderService: ActiveOrderService
  ) { }

  ngOnInit() {
    
  }
}

