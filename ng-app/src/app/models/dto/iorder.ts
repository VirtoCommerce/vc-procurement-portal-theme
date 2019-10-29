import { PagedSearchCriteria } from '@models/dto/common/paged-search-criteria';
import { IMoney } from '@models/dto/common/money';
import { ICurrency } from '@models/dto/common/currency';
import { IAddress } from '@models/dto/common/address';

export class OrderSearchCriteria extends PagedSearchCriteria {
  CustomerId: string;
  Sort: string;
  StartDate: Date;
  EndDate: Date;
  StoreIds: string[];
  Status: string;
  Statuses: string[];
}

// this entity does not exist on server
export interface IOrderComment {
  id: string;
  userId: string;
  username: string;
  text: string;
}
// this entity does not exist on server
export class OrderComment implements IOrderComment {
  id: string;
  userId: string;
  username: string;
  text: string;
  constructor(userId: string, username: string, text: string) {
    this.id = 'AAA';
    this.userId = userId;
    this.username = username;
    this.text = text;
  }
}

export interface IOrder {
  customerName: string;
  customerId: string;
  storeId: string;
  addresses: IAddress[];
  financialStatus: string;
  inPayments: InPayment[];
  items: IOrderItem[];
  shipments: IOrderShipping[];
  taxDetails: any[];
  number: string;
  isApproved: boolean;
  status: string;
  currency: ICurrency;
  currencyCode: string;
  isCancelled: boolean;
  cancelled: boolean;
  dynamicProperties: any[];
  createdDate: string;
  modifiedDate: string;
  createdBy: string;
  modifiedBy: string;
  discounts: any[];
  total: IMoney;
  discountAmount: IMoney;
  discountAmountWithTax: IMoney;
  subTotal: IMoney;
  subTotalWithTax: IMoney;
  shippingTotal: IMoney;
  shippingTotalWithTax: IMoney;
  shippingTaxTotal: IMoney;
  shippingPrice: IMoney;
  shippingPriceWithTax: IMoney;
  paymentTotal: IMoney;
  paymentTotalWithTax: IMoney;
  paymentPrice: IMoney;
  paymentPriceWithTax: IMoney;
  paymentDiscountTotal: IMoney;
  paymentDiscountTotalWithTax: IMoney;
  paymentTaxTotal: IMoney;
  discountTotal: IMoney;
  discountTotalWithTax: IMoney;
  taxTotal: IMoney;
  shippingDiscountTotalWithTax: IMoney;
  shippingDiscountTotal: IMoney;
  subTotalTaxTotal: IMoney;
  subTotalDiscount: IMoney;
  subTotalDiscountWithTax: IMoney;
  id: string;
}

export interface IOrderShipping {
  title: string;
  handle: string;
  shipmentMethodCode: string;
  shipmentMethodOption: string;
  items: any[];
  packages: any[];
  inPayments: any[];
  deliveryIAddress: IAddress;
  taxDetails: any[];
  operationType: string;
  number: string;
  status: string;
  currency: ICurrency;
  childrenOperations: any[];
  dynamicProperties: any[];
  createdDate: string;
  modifiedDate: string;
  createdBy: string;
  modifiedBy: string;
  id: string;
  taxTotal: IMoney;
  taxPercentRate: number;
  discounts: any[];
  price: IMoney;
  priceWithTax: IMoney;
  total: IMoney;
  totalWithTax: IMoney;
  itemsSubtotal: IMoney;
  itemsSubtotalWithTax: IMoney;
  discountAmount: IMoney;
  discountAmountWithTax: IMoney;
}

export interface IOrderItem {
  currency: ICurrency;
  reserveQuantity: number;
  quantity: number;
  productId: string;
  sku: string;
  catalogId: string;
  categoryId: string;
  name: string;
  imageUrl: string;
  isGift: boolean;
  isCancelled: boolean;
  taxDetails: any[];
  dynamicProperties: any[];
  createdDate: string;
  modifiedDate: string;
  createdBy: string;
  modifiedBy: string;
  id: string;
  listPrice: IMoney;
  listPriceWithTax: IMoney;
  placedPrice: IMoney;
  placedPriceWithTax: IMoney;
  extendedPrice: IMoney;
  extendedPriceWithTax: IMoney;
  discountAmount: IMoney;
  discountAmountWithTax: IMoney;
  discountTotal: IMoney;
  discountTotalWithTax: IMoney;
  taxTotal: IMoney;
  taxPercentRate: number;
  discounts: any[];
}

export interface InPayment {
  customerId: string;
  gatewayCode: string;
  paymentMethodType: string;
  outerId: string;
  operationType: string;
  number: string;
  isApproved: boolean;
  status: string;
  currency: ICurrency;
  sum: IMoney;
  tax: IMoney;
  isCancelled: boolean;
  childrenOperations: any[];
  dynamicProperties: any[];
  createdDate: string;
  modifiedDate: string;
  createdBy: string;
  modifiedBy: string;
  id: string;
}
