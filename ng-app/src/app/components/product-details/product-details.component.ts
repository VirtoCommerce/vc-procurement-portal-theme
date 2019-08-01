import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { CatalogService } from "src/app/services";
import { IProduct } from "src/app/models/dto/product";
import { Observable } from "rxjs";
import { ICart } from "src/app/models/dto/icart";
import { ActiveOrderService } from "src/app/services/active-order.service";
import { IImage } from "src/app/models/dto/common/image";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
  providers: [NgbCarouselConfig]
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild("quickDescriptionElement", { static: false }) quickDesc: ElementRef;
  @ViewChild("fullDescriptionElement", { static: false }) fullDesc: ElementRef;
  product: IProduct;
  cart$: Observable<ICart>;
  name: string;
  sku: string;
  price: string;
  primaryImage: string;
  brand: string;
  images: IImage[];
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
            this.fullDesc.nativeElement.innerHTML = desc.value;
          } else {
            this.quickDesc.nativeElement.innerHTML = desc.value;
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

  openImageModal(content) {
    this.modalService.open(content, { centered: true });
  }

}
