export interface IOrder {
    id: string;
    items: IOrderItem[];
    number: string;
    status: string;
    createdDate: string;
    createdBy: string;
    assignedTo: string;
    total: string;
}

export interface IOrderItem {
    id: string;
    quantity: number;
    productId: string;
    name: string;
    imageUrl: string;
}