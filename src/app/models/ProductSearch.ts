export interface CatalogSearch {
  products: ProductSearch[];
}

export interface ProductSearch {
  id: string;
  name: string;
  images: any;
  price: any;
  properties: any;
  sku: string;
  catalogId: string;
  categoryId: string;
  url: string;
  image: string;
}
