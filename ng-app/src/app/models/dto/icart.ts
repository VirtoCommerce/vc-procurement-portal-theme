import { ILanguage } from './common/language';
import { ICurrency } from './common/currency';
import { IMoney } from './common/money';
import { IProduct } from './product';
import { IUser } from './iuser';

export interface ICart {
  name: string;
  storeId: string;
  hasPhysicalProducts: boolean;
  isAnonymous: boolean;
  customer: IUser;
  customerId: string;
  customerName: string;
  isRecuring: boolean;
  volumetricWeight: number;
  weight: number;
  height: number;
  length: number;
  width: number;
  total: IMoney;
  subTotal: IMoney;
  subTotalWithTax: IMoney;
  shippingPrice: IMoney;
  shippingPriceWithTax: IMoney;
  shippingTotal: IMoney;
  shippingTotalWithTax: IMoney;
  paymentPrice: IMoney;
  paymentPriceWithTax: IMoney;
  paymentTotal: IMoney;
  paymentTotalWithTax: IMoney;
  extendedPriceTotal: IMoney;
  extendedPriceTotalWithTax: IMoney;
  handlingTotal: IMoney;
  handlingTotalWithTax: IMoney;
  discountAmount: IMoney;
  discountTotal: IMoney;
  discountTotalWithTax: IMoney;
  addresses: any[];
  items: ILineItem[];
  itemsCount: number;
  itemsQuantity: number;
  coupons: any[];
  payments: any[];
  shipments: any[];
  objectType: string;
  dynamicProperties: any[];
  availablePaymentMethods: any[];
  recentlyAddedItem: ILineItem;
  isValid: boolean;
  validationErrors: any[];
  discounts: any[];
  currency: ICurrency;
  taxTotal: IMoney;
  taxPercentRate: number;
  taxDetails: any[];
  language: ILanguage;
  id: string;
}

export interface ILineItem {
  createdDate: string;
  product: IProduct;
  productId: string;
  productType: string;
  catalogId: string;
  categoryId: string;
  sku: string;
  name: string;
  quantity: number;
  inStockQuantity: number;
  requiredShipping: boolean;
  imageUrl: string;
  isGift: boolean;
  languageCode: string;
  isReccuring: boolean;
  taxIncluded: boolean;
  isReadOnly: boolean;
  listPrice: IMoney;
  listPriceWithTax: IMoney;
  salePrice: IMoney;
  salePriceWithTax: IMoney;
  placedPrice: IMoney;
  placedPriceWithTax: IMoney;
  extendedPrice: IMoney;
  extendedPriceWithTax: IMoney;
  discountAmount: IMoney;
  discountAmountWithTax: IMoney;
  discountTotal: IMoney;
  discountTotalWithTax: IMoney;
  objectType: string;
  dynamicProperties: any[];
  isValid: boolean;
  validationErrors: any[];
  taxTotal: IMoney;
  taxPercentRate: number;
  taxDetails: any[];
  currency: ICurrency;
  discounts: any[];
  id: string;
}



export class ChangeCartItemQty {
  constructor(
    public lineItemId: string,
    public quantity: number) {}
}
















