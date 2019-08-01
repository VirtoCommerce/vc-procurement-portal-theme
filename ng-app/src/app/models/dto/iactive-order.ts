import { ICurrency } from './common/currency';

export interface IActiveOrder {
    id: string;
    name: string;
    storeId: string;
    hasPhysicalProducts: boolean;
    isAnonymous: boolean;
    customerId: string;
    customerName: string;
    isRecuring: boolean;
    volumetricWeight: number;
    weight: number;
    height: number;
    length: number;
    width: number;
    total: IActiveOrderTotal;
    subTotal: IActiveOrderTotal;
    shippingPrice: IActiveOrderTotal;
    itemsCount: number;
    itemsQuantity: number;
    currency: IActiveOrderCurrency;
    items: IActiveOrderItem[];
}

export interface IActiveOrderItem { }

export interface IActiveOrderTotal {
    internalAmount: number;
    amount: number;
    truncatedAmount: number;
    formattedAmount: string;
    formattedAmountWithoutPoint: string;
    formattedAmountWithoutPointAndCurrency: string;
    currency: ICurrency;
    decimalDigits: number;
}

export interface IActiveOrderCurrency {
    code: string;
    cultureName: string;
    symbol: string;
    englishName: string;
    exchangeRate: number;
}
