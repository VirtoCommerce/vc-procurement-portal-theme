export class PaginationInfo {
  page = 1;
  collectionSize: number;
  constructor(public  pageSize: number = 10) {}
}
