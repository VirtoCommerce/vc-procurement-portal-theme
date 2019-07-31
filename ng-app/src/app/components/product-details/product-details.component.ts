import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { CatalogService } from "src/app/services";
import { IProduct } from "src/app/models/product";
import { Observable } from "rxjs";
import { ICart } from "src/app/models/icart";
import { ActiveOrderService } from "src/app/services/active-order.service";
import { IImage } from 'src/app/models/common/image';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  cart$: Observable<ICart>;
  name: string;
  sku: string;
  price: string;
  primaryImage: string;
  fullDescription: string;
  quickDescription: string;
  brand: string;
  images: IImage[];
  constructor(
    private catalogService: CatalogService,
    private activeOrderService: ActiveOrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cart$ = this.activeOrderService.Cart;
    this.activeOrderService.refreshCart();
    this.route.paramMap
      .pipe(
        switchMap(params => this.catalogService.getProduct(params.get("id")))
      )
      .subscribe((data: any) => {
        this.product = data[0] as IProduct;
        this.name = this.product.name;
        this.sku = this.product.sku;
        this.price = this.product.price.actualPrice.formattedAmount;
        this.product.descriptions.forEach(desc => {
          if (desc.reviewType === "FullReview") {
            this.fullDescription = desc.value;
          } else {
            this.quickDescription = desc.value;
          }
        });
        this.product.properties.forEach(prop => {
          if (prop.name === "BRAND") {
            this.brand = prop.value;
          }
        });
        if (this.product.primaryImage) {
          this.primaryImage = this.product.primaryImage.url;
        }
        this.images = this.product.images;
      });
  }
}
