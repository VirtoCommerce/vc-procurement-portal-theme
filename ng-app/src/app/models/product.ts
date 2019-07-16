import { ProductProperties } from './product-properties';
import { ProductPrice } from './product-price';

export class Product {
  id: string;
  name: string;
  priceforsort: number;
  images: any;
  price: number;
  properties: any;
  sku: string;
  catalogId: string;
  categoryId: string;
  url: string;
  image: string;
  productProperties: ProductProperties;
  productPrice: ProductPrice;
}
