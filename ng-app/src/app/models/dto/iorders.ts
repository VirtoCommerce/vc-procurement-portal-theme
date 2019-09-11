import { IOrder } from '@models/dto/iorder';

export interface IOrders {
    totalCount: number;
    results: IOrder[];
}
