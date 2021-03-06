import { IImage } from '@models/dto/common/image';

export class ProductDetails {
  id: string;
  sku: string;
  name: string;
  title: string;
  price: string;
  brand: string;
  model: string;
  quickReview: string;
  fullReview: string;
  primaryImage: IImage;
  images: IImage[];
  inStock: number;
}
