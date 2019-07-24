import { ICurrency } from './icurrency';
import { PagedSearchCriteria } from './common/paged-search-criteria';

export class OrderSearchCriteria extends PagedSearchCriteria {
    CustomerId: string;
    Sort: string;
}

export interface IOrder {
    id: string;
    items: IOrderItem[];
    number: string;
    status: string;
    createdDate: string;
    createdBy: string;
    assignedTo: string;
    total: IOrderTotal;
    subTotal: IOrderSubtotal;
    shipping: IOrderShipping;
    toRole: string;
    comments: IOrderComment[];
}

export interface IOrderItem {
    id: string;
    quantity: number;
    productId: string;
    name: string;
    imageUrl: string;
}

export interface IOrderComment {
    id: string;
    userId: string;
    username: string;
    text: string;
}

export class OrderComment implements IOrderComment{
    id: string;
    userId: string;
    username: string;
    text: string;
    constructor(
        userId: string,
        username: string,
        text: string) {
            this.id = "AAA";
            this.userId = userId;
            this.username = username;
            this.text = text;
            }
}

export interface IOrderTotal {
    internalAmount: number;
    amount: number;
    truncatedAmount: number;
    formattedAmount: string;
    formattedAmountWithoutPoint: number;
    formattedAmountWithoutPointAndCurrency: number;
    currency: ICurrency;
    decimalDigits: number;
}

export interface IOrderSubtotal {
    internalAmount: number;
    amount: number;
    truncatedAmount: number;
    formattedAmount: string;
    formattedAmountWithoutPoint: number;
    formattedAmountWithoutPointAndCurrency: number;
    currency: ICurrency;
    decimalDigits: number;
}

export interface IOrderShipping {
    internalAmount: number;
    amount: number;
    truncatedAmount: number;
    formattedAmount: string;
    formattedAmountWithoutPoint: string;
    formattedAmountWithoutPointAndCurrency: string;
    currency: {
        code: string;
        cultureName: string;
        symbol: string;
        englishName: string;
        exchangeRate: number;
    };
    decimalDigits: number;
}
