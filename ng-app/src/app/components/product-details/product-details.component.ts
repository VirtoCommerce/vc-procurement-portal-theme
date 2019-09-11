import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CatalogService } from 'src/app/services';
import { Observable } from 'rxjs';
import { ICart } from 'src/app/models/dto/icart';
import { ActiveOrderService } from 'src/app/services/api/active-order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetails } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ProductDetailsComponent implements OnInit {

  fullDesc: ElementRef;
  product: ProductDetails;
  cart$: Observable<ICart>;

  constructor(
    private catalogService: CatalogService,
    private activeOrderService: ActiveOrderService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    config: NgbCarouselConfig
  ) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
    this.cart$ = this.activeOrderService.Cart;
    this.cart$.subscribe();
    this.activeOrderService.refreshCart();
    this.route.paramMap
      .pipe(
        switchMap(params => this.catalogService.getProduct(params.get('id')))
      )
      .subscribe((data: ProductDetails) => {
        this.product = data;
      });
  }

  openImageModal(content) {
    this.modalService.open(content, { centered: true });
  }

}
