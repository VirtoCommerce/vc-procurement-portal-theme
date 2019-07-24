import { IOrder, IOrderItem, IOrderTotal, IOrderSubtotal, IOrderShipping, IOrderComment } from "./iorder";

export class Order implements IOrder{
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
