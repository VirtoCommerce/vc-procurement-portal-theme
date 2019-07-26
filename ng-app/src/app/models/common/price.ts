import { ICurrency } from "./currency";
import { IMoney } from './money';

export interface IProductPrice {
  pricelistId: string;
  currency: ICurrency;
  productId: string;
  discountAmount: IMoney;
  discountAmountWithTax: IMoney;
  discountPercent: number;
  listPrice: IMoney;
  listPriceWithTax: IMoney;
  salePrice: IMoney;
  salePriceWithTax: IMoney;
  actualPrice: IMoney;
  actualPriceWithTax: IMoney;
  discounts: any[];
  minQuantity: number;
  tierPrices: ITierPrice[];
  taxTotal: IMoney;
  taxPercentRate: number;
}

interface ITierPrice {
  price: IMoney;
  priceWithTax: IMoney;
  discountAmount: IMoney;
  discountAmountWithTax: IMoney;
  actualPrice: IMoney;
  actualPriceWithTax: IMoney;
  quantity: number;
  currency: ICurrency;
  taxTotal: IMoney;
  taxPercentRate: number;
  taxDetails: any[];
}
