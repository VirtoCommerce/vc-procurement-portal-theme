import { IOrder, IOrderItem, IOrderShipping, IOrderComment, IMoney } from "./iorder";

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
