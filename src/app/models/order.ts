import { IOrder } from "./iorder";

export class Order implements IOrder{
    id: string;
    items: any;
    number: string;
    status: string;
    createdDate: string;
    createdBy: string;
    assignedTo: string;
    total: string;
}