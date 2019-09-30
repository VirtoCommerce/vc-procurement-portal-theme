import { Injectable } from '@angular/core';
import { ProductDetails } from '@models/product';
import { IProduct } from '@models/dto/product';

@Injectable({
  providedIn: 'root'
})
export class ProductConverterService {

  constructor() { }

  toProductDetails(productDto: IProduct): ProductDetails {

    const result = new ProductDetails();
    result.id = productDto.id;
    result.name = productDto.name;
    result.sku = productDto.sku;
    result.title = productDto.title;
    result.price = productDto.price.actualPrice.formattedAmount;
    const quickReview = productDto.descriptions.find(x => x.reviewType === 'QuickReview');
    result.quickReview =  ( quickReview || { value: ''} ).value;
    const fullReview = productDto.descriptions.find(x => x.reviewType === 'FullReview');
    result.fullReview =  ( fullReview || { value: ''} ).value;
    result.brand = (productDto.properties.find(x => x.name === 'Brand') || {value: ''}).value;
    result.model = (productDto.properties.find(x => x.name === 'Model') || {value: ''}).value;
    result.primaryImage = productDto.primaryImage;
    result.images = productDto.images;
    result.inStock = productDto.availableQuantity;
    return result;
  }



}
