import { IOrder, IOrderItem, IOrderShipping, IOrderComment } from "./iorder";
import { IMoney } from './common/money';

export class Order {
    id: string;
    items: IOrderItem[];
    number: string;
    status: string;
    createdDate: string;
    createdBy: string;
    assignedTo: string;
    total: IMoney;
    subTotal: IMoney;
    shipping: IOrderShipping;
    toRole: string;
    comments: IOrderComment[];
}
