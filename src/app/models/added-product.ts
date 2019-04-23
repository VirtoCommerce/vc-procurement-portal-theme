export class AddedProduct {
    id: string;
    productid: string;
    count: number;
    constructor(_id: string, _productid:string, _count: number) {
        this.id = _id;
        this.productid = _productid;
        this.count = _count;
    }
}