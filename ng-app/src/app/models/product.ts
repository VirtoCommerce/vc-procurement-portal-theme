import { IProductPrice } from './dto/common/price';
import { IImage } from './dto/common/image';

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
}
