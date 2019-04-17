import { ProductProperties } from "./product-properties";
import { ProductPrice } from "./product-price";

export class Product {
  id: string;
  name: string;
  images: any;
  price: any;
  properties: any;
  sku: string;
  catalogId: string;
  categoryId: string;
  // outline: string;
  // seoPath: string;
  url: string;
  // isBuyable: boolean;
  // isInStock: boolean;
  // isActive: boolean;
  // trackInventory: boolean;
  // maxQuantity: number;
  // minQuantity: number;
  // productType: string;
  // enableReview: boolean;
  // maxNumberOfDownload: number;
  // hasUserAgreement: boolean;
  // availableQuantity: number;
  // isQuotable: boolean;
  // isAvailable: boolean;
  // taxPercentRate: number;
  
  image: string;
  productProperties: ProductProperties;
  productPrice: ProductPrice;
}
